import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    // posts 파일 이름 잡아주기.
    const fileNames = fs.readdirSync(postsDirectory);
    // fileNames => ["pre-rendering.md", "ssg.md"];
    const allPostsData = fileNames.map(fileName => {
        // 정규식을 이용하여 .md 지워주기.
        const id = fileName.replace(/\.md$/, "");

        // 전체경로를 잡아줌.
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data as {date: string; title: string}
        }
    })

    // Sorting
    return allPostsData.sort((a:any, b: any) => {
        if(a.date < b.date){
            return 1;
        }else {
            return -1;
        }
    })
}

export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/,"")
            }
        }
    })
}

export const getPostData = async (id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(remarkHtml).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as {date: string; title: string})
    }
}
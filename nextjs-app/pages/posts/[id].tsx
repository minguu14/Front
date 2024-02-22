import { getAllPostIds, getPostData } from '@/lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from "@/styles/Home.module.css";
import React from 'react'
import Head from 'next/head';

interface PostProps {
    postData: {
        date: string;
        title: string;
        contentHtml: string;
    }
}

const Post = ({postData}:PostProps) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={styles.headingLg}>{postData.title}</h1>
            <div>
                {postData.date}
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </div>
  )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    // paths => [{params: {id: "pre-rendering", id: "ssg"}}]
    return {
        paths,
        fallback: false,
        // false : getStaticPaths로 리턴되지 않는 것은 모두 404 페이지로 뜸
        // true : fallback 페이지가 뜨게 됨.
    }
}
 
export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params?.id as string)
    return {
        props: {
            postData
        }
    }
}
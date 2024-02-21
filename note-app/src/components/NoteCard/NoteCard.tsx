import { BsFillPinFill } from "react-icons/bs";
import { NotesIconBox } from "../../styles/styles";
import { Note } from "../../types/note"
import { Card, ContentBox, FooterBox, TagsBox, TopBox } from "./NoteCard.styles"
import getRelevantBtns from "../../utils/getRelevantBtns";
import { useAppDispatch } from "../../hooks/redux";
import { readNote, setPinnedNotes } from "../../store/notesListSlice/notesListSlice";
import parse from "html-react-parser";
import ReadNoteModal from "../Modal/ReadNoteModal/ReadNoteModal";

interface NoteCardProps {
    note: Note,
    type: string,
}

const NoteCard: React.FC<NoteCardProps> = ({ note, type}) => {
    const dispatch = useAppDispatch();
    const { title, content, tags, color, priority, date, isPinned, isRead, id } = note;

    // 콘텐츠 string으로 변환해주는 함수.
    const noteCardParse = () => {
        const imgContent = content.includes("img");

        if(imgContent) {
            return content;
        }else {
            return content.length > 75 ? content.slice(0, 75) + "...." : content;
        }
    }


  return (
    <>  
        {/* 읽기 상태에 따라 읽기 모달 활성화 및 비활성화 */}
        {isRead && <ReadNoteModal note={note} type={type}/>}
        <Card style={{backgroundColor: color}}>
            <TopBox>
                {/* 노트카드 제목 */}
                <div className="noteCard__title">
                {title.length > 10 ? title.slice(0, 10) + " ..." : title}
                </div>
                {/* 우선순위 */}
                <div className="noteCard__top-options">
                    <span className="noteCard__priority">{priority}</span>
                {/* notes에 있을 때만 Pin 기능 활성화 */}
                    {type !== "archive" && type !== "trash" && (
                        <NotesIconBox
                        className="noteCard__pin"
                        onClick={() => dispatch(setPinnedNotes((({id}))))}
                        >
                         <BsFillPinFill
                            style={{color: isPinned ? "red" : ""}}
                         />
                        </NotesIconBox>
                    )}
                </div>
            </TopBox>
            {/* 노트 내용 */}
            <ContentBox onClick={() => dispatch(readNote({type, id}))}>
               {parse(noteCardParse())}
            </ContentBox>
            {/* 노트 태그 */}
            <TagsBox>
                {tags?.map(({ tag, id}) => (
                    <span key={id}>{tag}</span>
                ))}
            </TagsBox>
            {/* 생성 날짜 및 수정, 보관함, 쓰레기통 버튼 */}
            <FooterBox>
                <div className="noteCard__date">{date}</div>
                <div>{getRelevantBtns(type, note, dispatch)}</div>
            </FooterBox>
        </Card>
    </>
  )
}

export default NoteCard
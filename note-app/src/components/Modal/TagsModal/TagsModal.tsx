import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { DeleteBox, FixedContainer } from "../Modal.styles";
import { Box, StyledInput, TagsBox } from "./TagsModal.styles";
import { Tag } from "../../../types/tag";
import { toggleTagsModal } from "../../../store/modalSlice/modalSlice";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import getStandardName from "../../../utils/getStandardName";
import { addTags, deleteTags } from "../../../store/tagSlice/tagSlice";
import { v4 } from "uuid";
import { removeTags } from "../../../store/notesListSlice/notesListSlice";

interface TagsModalProps {
    type: string;
    addedTags?: Tag[];
    handleTags?: (tag: string, type: string) => void;
}


const TagsModal = ({ type, addedTags, handleTags }:TagsModalProps) => {
    const dispatch = useAppDispatch();
    const { tagsList } = useAppSelector((state) => state.tag);
    const [inputText, setInputText] = useState("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!inputText) {
            return;
        }

        dispatch(addTags({tag: inputText.toLocaleLowerCase(), id: v4()}));
        setInputText("");
    }

    const deleteTagsHandler = (tag: string, id: string) => {
        dispatch(deleteTags(id));
        dispatch(removeTags(tag));
    }

  return (
    <FixedContainer>
        <Box>
            <div className="editTags__header">
                <div className="editTags__title">
                    {/* 타입에 따라 태그 이름 변경 */}
                    {type === "add" ? "Add" : "Edit"} Tags
                </div>
                <DeleteBox
                className="editTags__close"
                // 타입에 맞는 태그 모달 비활성화.
                onClick={() => dispatch(toggleTagsModal({type, view: false}))}
                >
                    <FaTimes/>
                </DeleteBox>
            </div>
            {/* 추가 및 수정 할 태그명 입력 */}
            <form onSubmit={submitHandler}>
                <StyledInput
                 type="text"
                 value={inputText}
                 placeholder="New Tag .."
                 onChange={(e) => setInputText(e.target.value)}
                />
            </form>
            {/* 태그 생성 부분 */}
            <TagsBox>
                {tagsList.map(({ tag, id }) => (
                    <li key={id}>
                        <div className="editTags__tag">{getStandardName(tag)}</div>
                        {/* 태그 수정 할 때 UI */}
                        {type === "edit" ? (
                            <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                                <FaTimes/>
                            </DeleteBox>
                        ) : 
                        // 노트 태그 수정 할 때 UI
                        (
                            // 노트에 추가 된 태그가 있으면 Minus로 표시, 아니면 Plus로 표시.
                            <DeleteBox>
                                {addedTags?.find((addedTags: Tag) => addedTags.tag === tag.toLowerCase()) ? 
                                (<FaMinus onClick={() => handleTags!(tag, "remove")}/>) : 
                                (<FaPlus onClick={() => handleTags!(tag, "add")}/>)
                                }
                            </DeleteBox>
                        )
                        }
                    </li>
                ))}
            </TagsBox>
        </Box>
    </FixedContainer>
  )
}

export default TagsModal
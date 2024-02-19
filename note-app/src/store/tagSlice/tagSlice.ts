import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "../../types/tag";
import { v4 } from "uuid";
import { toast } from "react-toastify";

interface TagState {
    tagsList: Tag[];
}

const initialState: TagState = {
    tagsList: [
        {tag: "learnings", id: v4()},
        {tag: "work", id: v4()},
        {tag: "quotes", id: v4()},
    ],
}

const tagSlice = createSlice({
    name: "tag",
    initialState,
    reducers: {
        addTags: (state, { payload }) => {
            if(state.tagsList.find(({ tag }) => tag === payload.tag)) {
                toast.warning("이미 존재하는 태그입니다.")
            } else {
                // reducers안에서는 내부적으로 immer라는 라이브러리를 사용하기 때문에
                // 불변성을 지켜줄 필요가 없다.
                state.tagsList.push(payload);
                toast.info("새로운 태그가 등록되었습니다.");
            }
        },
        deleteTags: (state, { payload }) => {
            state.tagsList = state.tagsList.filter(({ id }) => id !== payload.id);
            toast.info("태그가 삭제되었습니다.");
        }
    },
})

export const { addTags, deleteTags } = tagSlice.actions;
export default tagSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "../../types/tag";

interface TagState {
    tagsList: Tag[];
}

const initialState: TagState = {
    tagsList: [
        {tag: "learnings", id: "1"},
        {tag: "work", id: "2"},
        {tag: "quotes", id: "3"},
    ],
}

const tagSlice = createSlice({
    name: "tag",
    initialState,
    reducers: {},
})

export default tagSlice.reducer;
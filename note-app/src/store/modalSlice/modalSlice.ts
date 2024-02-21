import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    viewEditTagsModal: boolean;
    viewAddTagsModal: boolean;
    viewCreateNoteModal: boolean;
    viewFiltersModal: boolean;
}

const initialState: ModalState = {
    viewEditTagsModal: false,
    viewAddTagsModal: false,
    viewCreateNoteModal: false,
    viewFiltersModal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        // 노트 생성 모달 활성화.
        toggleCreateNoteModal: (state, action) => {
            state.viewCreateNoteModal = action.payload;
        },
        toggleTagsModal: (state, { payload }) => {
            const { type, view } = payload;
            // 타입에 맞는 모달 활성화.
            if(type === "add") {
                state.viewAddTagsModal = view;
            }else {
                state.viewEditTagsModal = view;
            }
        },
        // 필터 모달 활성화.
        toggleFiltersModal: (state, action) => {
            state.viewFiltersModal = action.payload
        }
    },
});


export const { toggleCreateNoteModal, toggleFiltersModal, toggleTagsModal } = modalSlice.actions;
export default modalSlice.reducer;
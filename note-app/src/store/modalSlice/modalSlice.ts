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
        toggleCreateNoteModal: (state, action) => {
            state.viewCreateNoteModal = action.payload;
        },
        toggleTagsModal: (state, { payload }) => {
            const { type, view } = payload;
            
            if(type === "add") {
                state.viewAddTagsModal = view;
            }else {
                state.viewAddTagsModal = view;
            }
        },
        toggleFiltersModal: (state, action) => {
            state.viewFiltersModal = action.payload
        }
    },
});


export const { toggleCreateNoteModal, toggleFiltersModal, toggleTagsModal } = modalSlice.actions;
export default modalSlice.reducer;
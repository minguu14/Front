import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice/menuSlice";
import modalReducer from "./modalSlice/modalSlice";
import notesListsReducer from "./notesListSlice/notesListSlice";
import tagReducer from "./tagSlice/tagSlice";


export const store = configureStore({
    reducer: {
        menu:menuReducer,
        modal:modalReducer,
        notesList:notesListsReducer,
        tag:tagReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
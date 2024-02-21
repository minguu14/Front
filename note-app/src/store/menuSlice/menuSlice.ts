import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu:(state, action) => {
            // payload에 따라 활성화.
            state.isOpen = action.payload;
        }
    },
});


export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
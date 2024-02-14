import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "./orderType";


type OrderState = {
    order: IOrder[];
    isLoading: boolean;
    error: string;
}

const initialState: OrderState = {
    order: [],
    isLoading: false,
    error: ""
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase
    }
})

export default orderSlice.reducer;
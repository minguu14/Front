import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../products/products-type";

type cartStateType = {
    products: IProduct[],
    totalPrice: number,
    userId: string,
}

const initialState:cartStateType = {
    products: [],
    totalPrice: 0,
    userId: "",
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export default cartSlice.reducer;
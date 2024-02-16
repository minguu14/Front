import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../products/products-type";
import axios from "axios";
import { json } from "react-router-dom";

export const postOrder = createAsyncThunk(
    "cart/postOrder",
    async (order: cartStateType, thunkApi) => {
        try {
            await axios.post("https://65cc705edd519126b83e75f2.mockapi.io/orders",order);
            thunkApi.dispatch(sendOrder());
        } catch (err) {
            return thunkApi.rejectWithValue(err);
        }
    }
)

type cartStateType = {
    products: IProduct[],
    totalPrice: number,
    userId: string,
}

const initialState:cartStateType = {
    products: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") || "")
    : [],
    totalPrice: 0,
    userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId") || "")
    : "",
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUserId:(state, action) => {
            state.userId = action.payload;
            
            localStorage.setItem("userId", JSON.stringify(state.userId));
        },

        removeUserId:(state) => {
            state.userId = "";

            localStorage.setItem("userId", JSON.stringify(state.userId));
        },

        addToCart:(state, action) => {
            state.products.push({
                ...action.payload,
                quantity: 1,
                total: action.payload.price,
            });

            localStorage.setItem("cartProducts",JSON.stringify(state.products));
        },

        deleteFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);

            localStorage.setItem("cartProducts",JSON.stringify(state.products));
        },

        incrementProduct: (state, action) => {
            state.products = state.products.map((item) => item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
            }
            : item
            )
            localStorage.setItem("cartProducts",JSON.stringify(state.products));
        },

        decrementProduct: (state, action) => {
            state.products = state.products.map((item) => item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
                total: item.price * (item.quantity - 1),
            }
            : item
            )
            localStorage.setItem("cartProducts",JSON.stringify(state.products));
        },

        getTotalPrice: (state) => {
            state.totalPrice = state.products.reduce(
                (acc, item) => (acc += item.total), 0
            );
            return state;
        },

        sendOrder: (state) => {
            state.products = [];
            localStorage.setItem("cartProducts",JSON.stringify(state.products));
        }
    },
})


export const {
    addToCart,
    sendOrder,
    deleteFromCart,
    incrementProduct,
    decrementProduct,
    getTotalPrice,
    setUserId,
    removeUserId
} = cartSlice.actions;
export default cartSlice.reducer;
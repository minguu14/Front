import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../products/products-type";
import axios from "axios";

export const postOrder = createAsyncThunk(
    "cart/postOrder",
    async (order: cartStateType, thunkApi) => {
        try {
            await axios.post("https://65cc705edd519126b83e75f2.mockapi.io/orders",order);
            thunkApi.dispatch(sendOrder());
        } catch (err) {
            return err;
        }
    }
)

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
    reducers: {
        setUserId:(state, action) => {
            state.userId = action.payload;
            
            
        },

        removeUserId:(state) => {
            state.userId = "";

           
        },

        addToCart:(state, action) => {
            state.products.push({
                ...action.payload,
                quantity: 1,
                total: action.payload.price,
            });

            
        },

        deleteFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);

            
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
           
        },

        getTotalPrice: (state) => {
            state.totalPrice = state.products.reduce(
                (acc, item) => (acc += item.total), 0
            );
            return state;
        },

        sendOrder: (state) => {
            state.products = [];
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
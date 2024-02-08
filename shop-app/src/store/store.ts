import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/useSlice";
import categoriesReducer from "./categories/categorySlice";
import productsReducer from "./products/productsSlice";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        categories: categoriesReducer,
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
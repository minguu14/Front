import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./products-type";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category: string) => {
        try {
            let response;
            if(category){
                response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            }else{
                response = await axios.get("https://fakestoreapi.com/products");
            }
            return response.data;
        }catch (error){
            return error;
        }
    }
) 

type ProductsType = {
    products: IProduct[],
    isLoading: boolean;
    error: string;
}

const initialState:ProductsType = {
    products: [],
    isLoading: false,
    error: "",
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            console.log("pending");
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})

export default productsSlice.reducer;
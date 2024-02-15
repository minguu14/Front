import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "./orderType";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId: string, thunkApi) => {
        try {
            const response = await axios.get(`https://65cc705edd519126b83e75f2.mockapi.io/orders?search=${userId}`);
            return response.data;
        }catch (err) {
            return thunkApi.rejectWithValue(err);
        }
    }
)

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
        .addCase(fetchOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        })
        .addCase(fetchOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})

export default orderSlice.reducer;
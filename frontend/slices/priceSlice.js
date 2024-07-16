import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    prices: [],
    status: 'idle',
    error: null,
    currentSymbol: 'bitcoin',
};

export const fetchPrices = createAsyncThunk(
    'prices/fetchPrices',
    async (symbol) => {
        const response = await axios.get(`http://localhost:3001/api/prices/${symbol}`);
        return response.data;
    }
);

export const priceSlice = createSlice({
    name: 'prices',
    initialState,
    reducers: {
        setCurrentSymbol: (state, action) => {
            state.currentSymbol = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPrices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.prices = action.payload;
            })
            .addCase(fetchPrices.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { setCurrentSymbol } = priceSlice.actions;

export const selectPrices = (state) => state.prices.prices;
export const selectCurrentSymbol = (state) => state.prices.currentSymbol;

export default priceSlice.reducer;

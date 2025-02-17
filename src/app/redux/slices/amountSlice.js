import { createSlice } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
    name: 'amount',
    initialState: 0, // initial balance, you can set to any value
    reducers: {
        increment: (state) => {
            return state + 1; // Increase by 10
        },
        decrement: (state) => {
            return state - 1; // Decrease by 10
        },
    },
});

export const { increment, decrement } = amountSlice.actions;
export default amountSlice.reducer;

'use client'
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    initialState: {
        data:[]
    },
    name: "data",
    reducers: {
        setDatas: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { setDatas } = dataSlice.actions;
export default dataSlice.reducer;
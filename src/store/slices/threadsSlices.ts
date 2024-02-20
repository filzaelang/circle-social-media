import { IThreadCard } from "../../interface/ThreadInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const initialThreadsState: { threads: IThreadCard[] } = {
    threads: []
};

export const threadsSlice = createSlice({
    name: "threads",
    initialState: initialThreadsState,
    reducers: {
        GET_THREADS: (state, action: PayloadAction<IThreadCard[]>) => {
            state.threads = action.payload;
        },
    },
})

export default threadsSlice.reducer;
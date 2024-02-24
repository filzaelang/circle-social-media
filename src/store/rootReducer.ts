import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlices";
import { threadsSlice } from "./slices/threadsSlices";
import { oneThreadsSlice } from "./slices/oneThreadslices";

export const { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } =
    authSlice.actions;

export const { GET_THREADS, SET_THREADS_LIKES } = threadsSlice.actions;
export const { GET_ONE_THREAD, SET_ONE_THREAD_LIKES } = oneThreadsSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadsSlice.reducer;
export const oneThreadReducer = oneThreadsSlice.reducer;

const rootReducer = combineReducers({
    auth: authReducer,
    threads: threadReducer,
    oneThreads: oneThreadReducer,
    // other reducer
});

export default rootReducer;

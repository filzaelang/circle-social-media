import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlices";
import { threadsSlice } from "./slices/threadsSlices";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
    authSlice.actions;

export const { GET_THREADS } = threadsSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadsSlice.reducer;

const rootReducer = combineReducers({
    auth: authReducer,
    threads: threadReducer,
    // other reducer
});

export default rootReducer;

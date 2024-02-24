import { IUser } from '../../interface/UserInterface'
import { setAuthToken } from '../../libs/api';
import { createSlice } from '@reduxjs/toolkit'

const initialAuthState: { data: IUser } = {
    data: {
        id: 0,
        username: "",
        full_name: "",
        email: "",
        photo_profile: "",
        description: "",
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (state, action) => {
            const payload = action.payload;
            const { token } = action.payload;
            setAuthToken(token);
            localStorage.setItem("token", token);
            const user: IUser = {
                id: payload.obj.id,
                username: payload.obj.username,
                full_name: payload.obj.full_name,
                email: payload.obj.email,
                photo_profile: payload.obj.photo_profile,
                description: payload.obj.description
            };

            state.data = user
        },
        AUTH_CHECK: (state, action) => {
            const payload = action.payload;
            const user: IUser = {
                id: payload.check.id,
                username: payload.check.username,
                full_name: payload.check.full_name,
                email: payload.check.email,
                photo_profile: payload.check.photo_profile,
                description: payload.check.description
            };

            state.data = user
        },
        AUTH_LOGOUT: (state) => {
            setAuthToken(null);
            localStorage.removeItem('token');

            state.data = {
                id: 0,
                username: '',
                full_name: '',
                email: '',
                photo_profile: '',
                description: '',
                followers_count: 0,
                followings_count: 0,
            };
        },
    },
});
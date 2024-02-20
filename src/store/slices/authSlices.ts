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
        followers_count: 0,
        followings_count: 0
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (state, action) => {
            const {
                id,
                username,
                full_name,
                email,
                photo_profile,
                description,
                followers_count,
                followings_count
            } = action.payload.obj;

            const { token } = action.payload;
            setAuthToken(token);
            localStorage.setItem("token", token);

            state.data.id = id;
            state.data.username = username;
            state.data.full_name = full_name;
            state.data.email = email;
            state.data.photo_profile = photo_profile;
            state.data.description = description;
            state.data.followers_count = followers_count;
            state.data.followings_count = followings_count;
        },
        AUTH_CHECK: (state, action) => {

        },
        AUTH_ERROR: (state) => {

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
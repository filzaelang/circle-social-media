import { IUser } from '../../interface/UserInterface'
import { setAuthToken } from '../../libs/api';
import { createSlice } from '@reduxjs/toolkit'

const initialAuthState: IUser = {
    id: 0,
    username: "",
    full_name: "",
    email: "",
    photo_profile: "",
    description: "",
    followers_count: 0,
    followings_count: 0
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

            const token = action.payload.token;
            setAuthToken(token);
            localStorage.setItem("token", token);

            state.id = id;
            state.username = username;
            state.full_name = full_name;
            state.email = email;
            state.photo_profile = photo_profile;
            state.description = description;
            state.followers_count = followers_count;
            state.followings_count = followings_count;
        },
        // AUTH_LOGIN: (_, action) => {
        //     const payload = action.payload
        //     // console.log(payload)

        //     const user: IUser = {
        //         id: payload.obj.id,
        //         username: payload.obj.username,
        //         full_name: payload.obj.full_name,
        //         email: payload.obj.email,
        //         photo_profile: payload.obj.photo_profile,
        //         description: payload.obj.description,
        //         followers_count: payload.obj.followers_count,
        //         followings_count: payload.obj.followings_count,
        //     }

        //     return user
        // },
        AUTH_CHECK: (state, action) => {
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

            state.id = id;
            state.username = username;
            state.full_name = full_name;
            state.email = email;
            state.photo_profile = photo_profile;
            state.description = description;
            state.followers_count = followers_count;
            state.followings_count = followings_count;

        },
        AUTH_ERROR: (state) => {
            localStorage.removeItem('token');
        },
        AUTH_LOGOUT: (state) => {
            setAuthToken(null);
            localStorage.removeItem('token');

            state = {
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
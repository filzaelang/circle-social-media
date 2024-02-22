import { IThreadCard } from "../../interface/ThreadInterface";
import { createSlice } from "@reduxjs/toolkit";


const initialThreadsState: IThreadCard[] = []

export const threadsSlice = createSlice({
    name: "threads",
    initialState: initialThreadsState,
    reducers: {
        GET_THREADS: (_, action) => {
            const payload = action.payload

            const thread = payload.map((data: IThreadCard) => {
                return {
                    id: data.id,
                    content: data.content,
                    image: data.image,
                    number_of_likes: data.number_of_likes,
                    number_of_replies: data.number_of_replies,
                    created_at: data.created_at,
                    created_by: data.created_by,
                    updated_at: data.updated_at,
                    updated_by: data.updated_by,
                    is_liked: data.is_liked,
                }
            })

            return thread
        },
        SET_THREADS_LIKES: (state, action) => {
            const { id, is_liked } = action.payload;

            // Check if payload is an array
            if (!Array.isArray(state)) {
                console.error("Payload is not an array:", state);
                return state;
            }

            // Update the state based on the thread ID
            return state.map((data: IThreadCard) => {
                if (data.id === id) {
                    return {
                        ...data,
                        number_of_likes: is_liked
                            ? (data.number_of_likes ?? 0) - 1
                            : (data.number_of_likes ?? 0) + 1,
                        is_liked: !is_liked,
                    };
                }
                return data;
            });
        },
    },
})

export default threadsSlice.reducer;



// SET_THREAD_LIKE: (
        //     state,
        //     action: { payload: { id: number; isLiked: boolean } }
        // ) => {
        //     const { id, isLiked } = action.payload;

        //     state.threads = state.threads.map((thread) => {
        //         if (thread.id === id) {
        //             return {
        //                 ...thread,
        //                 likes_count: isLiked
        //                     ? thread.likes_count - 1
        //                     : thread.likes_count + 1,
        //                 is_liked: !isLiked,
        //             };
        //         }
        //         return thread;
        //     });
        // },
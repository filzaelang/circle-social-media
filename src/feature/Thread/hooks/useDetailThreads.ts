import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../../libs/api'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ONE_THREAD } from '../../../store/rootReducer'
import { RootState } from '../../../store/types/rootStates'
import { setAuthToken } from '../../../libs/api'
import { SET_ONE_THREAD_LIKES } from '../../../store/rootReducer'

export function useDetailThreads() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const oneThread = useSelector((state: RootState) => state.oneThreads)
    setAuthToken(localStorage.token)

    async function navigateOneThread(id: number) {
        try {
            getOneThread(id)
            navigate(`/thread/${id}`)
        } catch (error) {
            throw error
        }
    }

    async function getOneThread(id: number | undefined) {
        try {
            const response = await API.get(`/thread/${id}`)
            dispatch(GET_ONE_THREAD(response.data))
        } catch (error) {
            throw error
        }
    }

    async function updateLikesCount(id: number, is_liked: boolean) {
        try {
            if (!is_liked) {
                await API.post("/like", { thread_id: id })
            } else if (is_liked) {
                await API.delete(`/like/${id}`)
            }
            dispatch(SET_ONE_THREAD_LIKES({ id: id, is_liked: is_liked }))
        } catch (error) {
            console.error("Error updating likes count:", error);
            throw error
        }
    }

    useEffect(() => {
        oneThread
    }, [dispatch])

    return {
        updateLikesCount, navigateOneThread, getOneThread, oneThread
    }
}
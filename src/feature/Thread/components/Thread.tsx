import { Text, Image, Flex, Divider, Box, Avatar } from '@chakra-ui/react'
import { IThreadCard } from '../../../interface/ThreadInterface';
import { useState, useEffect } from 'react';
// import FeatureLikedPost from './FeatureLikedPost';
import { API } from '../../../libs/api';
import { useDispatch, useSelector } from "react-redux"
import { GET_THREADS } from '../../../store/rootReducer';
import { SET_THREADS_LIKES } from '../../../store/rootReducer';

//icon
import { TbPointFilled } from "react-icons/tb";
import { BiMessageAltDetail } from "react-icons/bi";
import { RootState } from '../../../store/types/rootStates';
import { FaHeart } from "react-icons/fa";

const Thread = () => {
    const dispatch = useDispatch();
    const threads = useSelector((state: RootState) => state.threads)

    async function getThreads() {
        try {
            const response = await API.get("/thread")
            // setThreads(response.data.data)
            dispatch(GET_THREADS(response.data))
        } catch (error) {
            // setUsers(response.data.data)
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
            dispatch(SET_THREADS_LIKES({ id: id, is_liked: is_liked }))
        } catch (error) {
            console.error("Error updating likes count:", error);
            throw error
        }
    }

    useEffect(() => {
        getThreads()
    }, [dispatch])

    return (
        <>
            {
                threads?.map((data: IThreadCard) => (
                    <Box key={data.id}>
                        <Divider />
                        <Flex gap={3} mt={"10px"} mb={"10px"}>
                            {/* image */}
                            <Avatar size={{ base: "sm", md: "md", lg: "md", xl: "md", xxl: "md" }} src='https://bit.ly/dan-abramov' />
                            {/* Thread */}
                            <Flex flexDirection={"column"}>
                                <Flex alignItems={"center"} gap={1}>
                                    <Text color="white" fontWeight="bold" fontSize={"14px"}>{data.created_by?.full_name}</Text>
                                    <Text color="#606060" fontSize={"14px"}>@{data.created_by?.username}</Text>
                                    <TbPointFilled color="#606060" fontSize={"14px"} />
                                    <Text color="#606060" fontSize={"14px"}>{data.created_at}</Text>
                                </Flex>
                                <Text color={"white"}>{data.content}</Text>
                                {data.image && <Image src={data.image} />}
                                <Flex gap={3}>
                                    <Flex gap={0.5} alignItems={"center"}>
                                        <Text
                                            onClick={() => updateLikesCount(data.id, data.is_liked)}
                                        >
                                            <FaHeart color={data.is_liked ? "red" : "grey"} />
                                        </Text>
                                        <Text color="#606060" fontSize={"14px"}>{data.number_of_likes}</Text>
                                    </Flex>
                                    <Flex gap={0.5} alignItems={"center"}>
                                        <BiMessageAltDetail color="#606060" />
                                        <Text color="#606060" fontSize={"14px"}>{data.number_of_replies}</Text>
                                        <Text color="#606060" fontSize={"14px"}>Replies</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Divider />
                    </Box>
                ))
            }

        </>
    )
}

export default Thread;


// onClick={() => updateLikesCount(data.id, data.is_liked)}
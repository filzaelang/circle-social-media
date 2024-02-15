import { Text, Image, Flex, Divider, Box, Avatar } from '@chakra-ui/react'
import { IThreadCard } from '../interface/ThreadInterface';
import data from '../mock/json/threadsDummy.json'
import { useState, useEffect } from 'react';
import FeatureLikedPost from './FeatureLikedPost';

//icon
import { TbPointFilled } from "react-icons/tb";
import { BiMessageAltDetail } from "react-icons/bi";

const Thread = () => {

    const [threads, setThreads] = useState<IThreadCard[]>([]);

    const fetchData = async () => {
        try {
            const threadsData: IThreadCard[] = data.threads.map(thread => ({
                ...thread,
                liked: false
            }));
            setThreads(threadsData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {threads.map((thread: IThreadCard, index: number) => (
                <Box>
                    <Divider />
                    <Flex key={index} bg="#1d1d1d" gap={3} mt={"10px"} mb={"10px"}>
                        {/* image */}
                        <Avatar size={{ base: "sm", md: "md", lg: "md", xl: "md", xxl: "md" }} src={thread.picture} />
                        {/* Thread */}
                        <Flex flexDirection="column">
                            <Flex alignItems={"center"} gap={1}>
                                <Text color="white" fontWeight="bold" fontSize={"14px"}>{thread.fullName}</Text>
                                <Text color="#606060" fontSize={"14px"}>@{thread.username}</Text>
                                <TbPointFilled color="#606060" fontSize={"14px"} />
                                <Text color="#606060" fontSize={"14px"}>4h</Text>
                            </Flex>
                            <Text color="white">{thread.content}</Text>
                            {thread.image && <Image src={thread.image} />}
                            <Flex gap={3}>
                                <FeatureLikedPost likes={thread.likes_count} />
                                <Flex gap={0.5} alignItems={"center"}>
                                    <BiMessageAltDetail color="#606060" />
                                    <Text color="#606060" fontSize={"14px"}>{thread.replies_count}</Text>
                                    <Text color="#606060" fontSize={"14px"}>Replies</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider />
                </Box >
            ))
            }
        </>
    )
}

export default Thread;
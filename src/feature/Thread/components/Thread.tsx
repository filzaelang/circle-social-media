import { Text, Image, Flex, Divider, Box, Avatar } from '@chakra-ui/react'
import { IThreadCard } from '../../../interface/ThreadInterface';
import { useState, useEffect } from 'react';
import FeatureLikedPost from '../../FeatureLikedPost';
import { API } from '../../../libs/api';

//icon
import { TbPointFilled } from "react-icons/tb";
import { BiMessageAltDetail } from "react-icons/bi";

const Thread = () => {

    // Axios
    const [threads, setThreads] = useState<IThreadCard[]>([]);
    // const [users, setUsers] = useState<any>([]);

    async function getThreads() {
        try {
            const response = await API.get("/thread")
            setThreads(response.data.data)
            // setUsers(response.data.data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getThreads().then((data) => console.log(data))
    }, [])
    // Axios

    return (
        <>
            {
                threads?.map((data: IThreadCard, a: number) => (
                    <Box key={a}>
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
                                    <Text color="#606060" fontSize={"14px"}>4h</Text>
                                </Flex>
                                <Text color={"white"}>{data.content}</Text>
                                {data.image && <Image src={data.image} />}
                                <Flex gap={3}>
                                    <FeatureLikedPost likes={20} />
                                    <Flex gap={0.5} alignItems={"center"}>
                                        <BiMessageAltDetail color="#606060" />
                                        <Text color="#606060" fontSize={"14px"}>30</Text>
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
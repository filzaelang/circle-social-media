import { Box, Flex, Divider, Avatar, Text, Image } from '@chakra-ui/react'
import { useDetailThreads } from '../feature/Thread/hooks/useDetailThreads';

//icon
import { TbPointFilled } from "react-icons/tb";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function ThreadDetail() {
    const { updateLikesCount, oneThread } = useDetailThreads()
    return (

        <Box key={oneThread.data.id}>
            <Divider />
            <Flex gap={3} mt={"10px"} mb={"10px"}>
                {/* image */}
                <Avatar
                    size={{ base: "sm", md: "md", lg: "md", xl: "md", xxl: "md" }}
                    src={'https://bit.ly/dan-abramov'}
                />
                {/* Thread */}
                <Flex flexDirection={"column"}>
                    <Flex alignItems={"center"} gap={1}>
                        <Text color="white" fontWeight="bold" fontSize={"14px"}>{oneThread.data.created_by?.full_name}</Text>
                        <Text color="#606060" fontSize={"14px"}>@{oneThread.data.created_by?.username}</Text>
                        <TbPointFilled color="#606060" fontSize={"14px"} />
                        <Text color="#606060" fontSize={"14px"}>{oneThread.data.created_at}</Text>
                    </Flex>
                    <Text color={"white"}>{oneThread.data.content}</Text>
                    {oneThread.data.image && <Image src={oneThread.data.image} />}
                    <Flex gap={3}>
                        <Flex gap={0.5} alignItems={"center"}>
                            <Text
                                onClick={() => updateLikesCount(oneThread.data.id, oneThread.data.is_liked)}
                            >
                                <FaHeart color={oneThread.data.is_liked ? "red" : "grey"} />
                            </Text>
                            <Text color="#606060" fontSize={"14px"}>{oneThread.data.number_of_likes}</Text>
                        </Flex>
                        <Flex gap={0.5} alignItems={"center"}>
                            <BiMessageAltDetail color="#606060" />
                            <Text color="#606060" fontSize={"14px"}>{oneThread.data.number_of_replies}</Text>
                            <Text color="#606060" fontSize={"14px"}>Replies</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Divider />
        </Box>
    )
}

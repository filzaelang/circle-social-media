import { Text, Image, Flex, Divider, Box } from '@chakra-ui/react'
import threadsData from '../mock/data/data';
import { IThreadCard } from '../interface/ThreadInterface';

//icon
import { TbPointFilled } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";

function Thread() {
    return (
        <>
            {threadsData.map((thread: IThreadCard, index: number) => (
                <Box>
                    <Divider />
                    <Flex key={index} bg="#1d1d1d" gap={3} mt={"10px"} mb={"10px"}>
                        {/* image */}
                        <Image borderRadius='full' boxSize={{ base: "30px", md: "45px", lg: "45px", xl: "45px" }} src={thread.picture} alt={thread.fullName} bottom="30" left="5" />
                        {/* Thread */}
                        <Flex>
                            <Flex flexDirection="column">
                                <Flex alignItems={"center"} gap={1}>
                                    <Text color="white" fontWeight="bold" fontSize={"14px"}>{thread.fullName}</Text>
                                    <Text color="#606060" fontSize={"14px"}>@{thread.username}</Text>
                                    <TbPointFilled color="#606060" fontSize={"14px"} />
                                    <Text color="#606060" fontSize={"14px"}>4h</Text>
                                </Flex>
                                <Text color="white">{thread.content}</Text>
                                <Flex gap={3}>
                                    <Flex gap={0.5} alignItems={"center"}>
                                        <FaRegHeart fontSize={"14px"} color="#606060" />
                                        <Text color="#606060" fontSize={"14px"}>{thread.likes_count}</Text>
                                    </Flex>
                                    <Flex gap={0.5} alignItems={"center"}>
                                        <BiMessageAltDetail color="#606060" />
                                        <Text color="#606060" fontSize={"14px"}>{thread.replies_count}</Text>
                                        <Text color="#606060" fontSize={"14px"}>Replies</Text>
                                    </Flex>
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
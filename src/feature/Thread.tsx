import { Text, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
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
                <Grid key={index} templateColumns="repeat(12, 1fr)" bg="#1d1d1d" borderBottom="2px solid white" borderTop="2px solid white">
                    {/* image */}
                    <GridItem colSpan={1} padding="0" position="relative" zIndex={1} mt="10px" mb="10px">
                        <Image borderRadius='full' boxSize='45px' src={thread.picture} alt={thread.fullName} bottom="30" left="5" />
                    </GridItem>

                    {/* Thread */}
                    <GridItem colSpan={11} position="relative" zIndex={2} mt="10px" mb="10px">
                        <Flex flexDirection="column">
                            <Flex alignItems={"center"} gap={1}>
                                <Text color="white" fontWeight="bold">{thread.fullName}</Text>
                                <Text color="#606060">@{thread.username}</Text>
                                <TbPointFilled color="#606060" />
                                <Text color="#606060">4h</Text>
                            </Flex>
                            <Text color="white">{thread.content}</Text>
                            <Flex gap={3}>
                                <Flex gap={0.5} alignItems={"center"}>
                                    <FaRegHeart color="#606060" />
                                    <Text color="#606060">{thread.likes_count}</Text>
                                </Flex>
                                <Flex gap={0.5} alignItems={"center"}>
                                    <BiMessageAltDetail color="#606060" />
                                    <Text color="#606060">{thread.replies_count}</Text>
                                    <Text color="#606060">Replies</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
                </Grid>
            ))}
        </>
    )
}

export default Thread;
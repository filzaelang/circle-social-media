import { Heading, Flex } from "@chakra-ui/react"

//components
import FeatureCreatePost from "../feature/FeatureCreatePost"
import Thread from "../feature/Thread";


function Home() {

    return (
        <Flex flexDirection={"column"} wrap={"wrap"} paddingLeft={"30px"} paddingRight={"30px"}>
            <Heading as={"h1"} color={"white"} mb={"20px"}>Home</Heading>
            <FeatureCreatePost />

            <Thread />
        </Flex>
    )
}

export default Home
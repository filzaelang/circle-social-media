import {
    Container,
    Text,
    Card,
    CardBody,
    Heading,
    Flex,
    Image,
    Avatar,
    Stack,
    Button,

} from "@chakra-ui/react"

function Profile() {
    return (
        <Container>
            <Card bg="#1d1d1d" >
                <CardBody bg={"#262626"} borderRadius={"20px"}>
                    <Heading as={"h3"} fontSize={"md"} color={"white"}>My Profile</Heading>
                    <Flex flexDirection='column' marginTop={"10px"} mb={4}>
                        <Image
                            borderRadius={"10px"}
                            width={"100%"}
                            height={"200px"}
                            objectFit={"cover"}
                            src='https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?w=900&t=st=1707182435~exp=1707183035~hmac=b0a570c2efd11753a18424e5a952eccdfbcaec5db7781bd5600c3bb1b88f3e1c'
                        />
                        <Avatar
                            size={"lg"}
                            name='Photo Profile'
                            src='https://bit.ly/dan-abramov'
                            position={"relative"}
                            bottom={"30"}
                            left={"5"}
                            border={'5px solid black'}
                        />
                    </Flex>
                    <Stack spacing='0.5' marginTop={"-10"}>
                        <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>Filza Elang Buana</Text>
                        <Text color={"#606060"}>@filzaelang</Text>
                        <Text color={"white"}>Disana gunung disini gunung ditengah-tengahnya</Text>
                        <Flex>
                            <Flex gap={3}>
                                <Flex gap={0.5}>
                                    <Text color={"white"}>23</Text>
                                    <Text color={"#606060"}>Following</Text>
                                </Flex>
                                <Flex gap={0.5}>
                                    <Text color={"white"}>21</Text>
                                    <Text color={"#606060"}>Follower</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card >
        </Container>
    )
}

export default Profile
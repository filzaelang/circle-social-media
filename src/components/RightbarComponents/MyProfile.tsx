import { Heading, Flex, Image, Text } from '@chakra-ui/react'
import { Card, CardBody, Stack, Button } from '@chakra-ui/react'

function MyProfile() {

    // const imageStyle = {
    //     width: '100%',
    //     height: '50%', // Setengah tinggi gambar
    //     // objectFit: 'cover',
    //     // clipPath: 'inset(0 0 50% 0)', // Crop setengah bagian bawah gambar
    //     borderRadius: 'lg'
    // };

    return (

        <Card maxW='sm' bg="#1d1d1d" >
            <CardBody bg={"#262626"} borderRadius={"20px"}>
                <Heading as={"h3"} fontSize={"md"} color={"white"}>My Profile</Heading>
                <Flex flexDirection='column' marginTop={"10px"} mb={4}>
                    <Image
                        borderRadius={"10px"}
                        width={"100%"}
                        height={"80px"}
                        objectFit={"cover"}
                        src='https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?w=900&t=st=1707182435~exp=1707183035~hmac=b0a570c2efd11753a18424e5a952eccdfbcaec5db7781bd5600c3bb1b88f3e1c'
                    />
                    <Image
                        borderRadius='full'
                        boxSize='60px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                        position={"relative"}
                        bottom={"30"}
                        left={"5"}
                        border={'5px solid black'}
                    />
                </Flex>
                <Stack spacing='0.5' marginTop={"-10"}>
                    <Button
                        backgroundColor="#1d1d1d"
                        border={'2px solid white'}
                        borderRadius={"10px"}
                        height={"20px"}
                        bottom={"0"}
                        ml="auto"
                    >
                        <Text fontSize={"10px"} color={"white"}>Edit Profile</Text>
                    </Button>
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
    )
}

export default MyProfile
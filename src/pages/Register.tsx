import { Container, Heading, Input, Text, Button, Flex, Grid } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FormControl } from '@chakra-ui/react'

function Register() {
    return (
        <Grid height={"100vh"} bg="#1d1d1d">
            <Container mt={"10%"}>
                <Heading color={"#04a51e"} fontWeight={"Bold"} mb={3}>circle</Heading>
                <Text color={"white"} fontSize={"larger"} fontWeight={"bold"} mb={3}>Create account Circle</Text>
                <FormControl isRequired>
                    <Input type="text" placeholder="Full Name" mb={2} />
                    <Input type="email" placeholder="Email" mb={2} />
                    <Input type="password" placeholder="Password" mb={2} />
                </FormControl>
                <Button
                    colorScheme="orange"
                    padding="20px"
                    width="100%"
                    backgroundColor="#04a51e"
                    borderRadius={100}
                    mb={2}
                >
                    Create
                </Button>
                <Flex gap={1} alignItems={"center"}>
                    <Text fontSize={"12px"} color={"white"}>Already have account?</Text>
                    <NavLink to={"/login"}>
                        <Text fontSize={"12px"} color={"#04a51e"}>Login</Text>
                    </NavLink>
                </Flex>
            </Container>
        </Grid>
    )
}

export default Register
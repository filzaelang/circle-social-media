import { Container, Input, Text, Button, Flex, Spacer, Grid } from "@chakra-ui/react"
import {
    FormControl
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom"

function Login() {
    return (
        <Grid height={"100vh"} bg="#1d1d1d">
            <Container mt={"10%"}>
                <Text fontSize={"40px"} color={"#04a51e"} fontWeight={"Bold"} mb={3}>circle</Text>
                <Text color={"white"} fontSize={"larger"} fontWeight={"bold"} mb={3}>Login to Circle</Text>
                <FormControl color={"white"} isRequired>
                    <Input type="text" placeholder="Email/Username" color={"white"} mb={2} />
                    <Input type="password" placeholder="Password" color={"white"} mb={2} />

                    <Flex>
                        <Spacer />
                        <Text color={"white"} mb={2}>Forgot Password?</Text>
                    </Flex>
                    <Button
                        colorScheme="orange"
                        padding="20px"
                        width="100%"
                        backgroundColor="#04a51e"
                        borderRadius={100}
                        mb={2}
                    >
                        Login
                    </Button>
                </FormControl>
                <Flex gap={1} alignItems={"center"}>
                    <Text fontSize={"12px"} color={"white"}>Don't have an account yet?</Text>
                    <NavLink to={"/register"}>
                        <Text fontSize={"12px"} color={"#04a51e"}>Create account</Text>
                    </NavLink>
                </Flex>
            </Container>
        </Grid>
    )
}

export default Login
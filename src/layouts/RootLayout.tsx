import { Outlet } from "react-router-dom"
import { Grid, GridItem, Text } from "@chakra-ui/react"

//components
import Navbar from "../components/Navbar"

function RootLayout() {

    return (
        <Grid templateColumns="repeat(12, 1fr)" bg="gray.50">
            {/* sidebar */}
            <GridItem
                as="aside"
                colSpan={{ base: 12, lg: 3, xl: 3 }}
                bg="#1d1d1d"
                padding="30px"
                minHeight={{ lg: '100vh' }}
                borderRight="2px solid white"
                display={{ base: "block", lg: "block", xl: "block" }} // Menampilkan sidebar di mode apapun
            >
                <Navbar />
            </GridItem>

            {/* main content & navbar */}
            <GridItem
                as="main"
                bg="#1d1d1d"
                colSpan={{ base: 12, lg: 6, xl: 6 }}
                padding="40px"
                display={{ base: "block", lg: "block", xl: "block" }}
            >
                <Outlet />
            </GridItem>

            {/* Right bar */}
            <GridItem
                as={"aside"}
                colSpan={{ base: 0, lg: 3, xl: 3 }}
                bg="#1d1d1d"
                padding="2"
                borderLeft="2px solid white"
                display={{ base: "none", lg: "block", xl: "block" }} // Menampilkan right bar hanya di lg dan xl
            >
                <Text color="#ffffff">Rightbar</Text>
            </GridItem>
        </Grid >
    )
}

export default RootLayout
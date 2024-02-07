import { Outlet } from "react-router-dom"
import { Grid, GridItem } from "@chakra-ui/react"

//components
import Navbar from "../components/Navbar"
import Rightbar from "../components/Rightbar"

function RootLayout() {

    // const layoutBase = (
    //     <Grid templateColumns="repeat(12, 1fr)" bg="gray.50">
    //         {/* main content*/}
    //         <GridItem
    //             as="main"
    //             bg="#1d1d1d"
    //             colSpan={{ base: 12, lg: 7, xl: 7 }}
    //             padding="40px"
    //             display={{ base: "block", lg: "block", xl: "block" }}
    //         >
    //             <Outlet />
    //         </GridItem>

    //         {/* sidebar */}
    //         <GridItem
    //             as="aside"
    //             colSpan={{ base: 12, lg: 2, xl: 2 }}
    //             bg="#1d1d1d"
    //             padding="30px"
    //             minHeight={{ lg: '100vh' }}
    //             borderRight="2px solid white"
    //             display={{ base: "none", lg: "block", xl: "block" }} // Menampilkan sidebar di mode apapun
    //         >
    //             <Navbar />
    //         </GridItem>
    //     </Grid>
    // );


    return (
        <Grid templateColumns="repeat(12, 1fr)" bg="gray.50">
            {/* sidebar */}
            <GridItem
                as="aside"
                colSpan={{ base: 12, lg: 2, xl: 2 }}
                bg="#1d1d1d"
                padding="30px"
                minHeight={{ lg: '100vh' }}
                borderRight={{ lg: "2px solid white" }}
                display={{ base: "block", lg: "block", xl: "block" }} // Menampilkan sidebar di mode apapun
            >
                <Navbar />
            </GridItem>

            {/* main content & navbar */}
            <GridItem
                as="main"
                bg="#1d1d1d"
                colSpan={{ base: 12, lg: 7, xl: 7 }}
                padding="40px"
                display={{ base: "block", lg: "block", xl: "block" }}
            >
                <Outlet />
            </GridItem>

            {/* Right bar */}
            <GridItem
                as={"aside"}
                colSpan={{ base: 12, lg: 3, xl: 3 }}
                bg="#1d1d1d"
                paddingTop={"40px"}
                borderLeft={{ lg: "2px solid white" }}
                zIndex={3}
                display={{ base: "block", lg: "block", xl: "block" }} // Menampilkan right bar hanya di lg dan xl
            >
                <Rightbar />
            </GridItem>
        </Grid >
    )
}

export default RootLayout
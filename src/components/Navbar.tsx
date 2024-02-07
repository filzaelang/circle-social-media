import { Heading, Spacer, Text, Button, Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

// icons
import { RiHome7Line } from "react-icons/ri";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {

    const sidebarHeight = useBreakpointValue({ base: "auto", lg: "90vh" });
    const location = useLocation();

    const isItemActive = (path: string) => {
        return location.pathname === path;
    };

    const navItemStyles = {
        fontWeight: "normal"
    };

    const activeItemStyles = {
        fontWeight: "bolder",
    };

    return (
        <Flex as={"nav"} color={"white"} flexDirection={"column"} justify={"space-between"} gap={4} minHeight={sidebarHeight}
            position={"fixed"}>
            <Heading as={"h1"} color={"#04a51e"} fontWeight={"Bold"} fontSize={"60px"}>
                circle
            </Heading>
            {/* ListItem Home */}
            <NavLink to="/" style={isItemActive("/") ? activeItemStyles : navItemStyles}>
                <Flex flexDirection={"row"} gap={3}>
                    <RiHome7Line fontSize={"25px"} style={isItemActive("/") ? activeItemStyles : navItemStyles} />
                    <Text fontSize="md">Home</Text>
                </Flex>
            </NavLink>

            {/* ListItem Search */}
            <NavLink to="/search" style={isItemActive("/search") ? { fontWeight: "bold" } : navItemStyles}>
                <Flex flexDirection={"row"} gap={3}>
                    <MdOutlinePersonSearch fontSize={"25px"} style={isItemActive("/search") ? activeItemStyles : navItemStyles} />
                    <Text fontSize="md">Search</Text>
                </Flex>
            </NavLink>

            {/* ListItem Follows */}
            <NavLink to="/follows" style={isItemActive("/follows") ? { fontWeight: "bold" } : navItemStyles}>
                <Flex flexDirection={"row"} gap={3}>
                    <FaRegHeart fontSize={"25px"} style={isItemActive("/follows") ? activeItemStyles : navItemStyles} />
                    <Text fontSize="md">Follows</Text>
                </Flex>
            </NavLink>

            {/* ListItem Profile */}
            <NavLink to="/profile" style={isItemActive("/profile") ? { fontWeight: "bold" } : navItemStyles}>
                <Flex flexDirection={"row"} gap={3}>
                    <FaRegCircleUser fontSize={"25px"} style={isItemActive("/profile") ? activeItemStyles : navItemStyles} />
                    <Text fontSize="md">Profile</Text>
                </Flex>
            </NavLink>

            <Box>
                <NavLink to="/create-post">
                    <Button
                        colorScheme="orange"
                        padding="20px"
                        width="100%"
                        backgroundColor="#04a51e"
                        borderRadius={100}
                    >
                        Create Post
                    </Button>
                </NavLink>
            </Box>
            <Spacer />

            {/* ListItem Logout */}
            <NavLink to="/logout" style={isItemActive("/logout") ? { fontWeight: "bold" } : navItemStyles}>
                <Flex flexDirection={"row"} gap={3}>
                    <TbLogout2 fontSize={"25px"} style={isItemActive("/logout") ? activeItemStyles : navItemStyles} />
                    <Text fontSize="md">Logout</Text>
                </Flex>
            </NavLink>
        </Flex >
    );
}

export default Navbar;

import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="white" fontWeight="bold">Soviet Sights</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.700", "gray.600") }} color="white">
              Home
            </Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.700", "gray.600") }} color="white">
              About
            </Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.700", "gray.600") }} color="white">
              Contact
            </Link>
          </RouterLink>
          <RouterLink to="/republics">
            <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.700", "gray.600") }} color="white">
              Republics
            </Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { makeUnit } from "../../themes/globals.theme";

const MenuItems: React.FC = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

interface AppBarProps {
  onMenuClick(): void;
}

const AppBar: React.FC<AppBarProps> = props => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={makeUnit(1.5)}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Box onClick={props.onMenuClick}>
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Heyteach
        </Heading>
      </Flex>
      <Box display={{ sm: "none", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Button bg="transparent" border="1px">
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default AppBar;

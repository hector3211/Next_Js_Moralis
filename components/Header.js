import React from "react";
import { Flex, Text, Center, Button } from "@chakra-ui/react";
export default function Header({ user, logout, isLoggingOut }) {
  return (
    <header>
      <Flex
        px="10px"
        py="6"
        justifyContent="space-between"
        bg="purple.400"
        color="white"
      >
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            OpenSpace Dashboard
          </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button
            ml="4"
            colorScheme="purple"
            onClick={logout}
            disabled={isLoggingOut}
          >
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
}

import { Box } from "@chakra-ui/react";
import React from "react";

export default function CustomContainer({ children }) {
  return (
    <Box
      bg="purple.100"
      width="full"
      height="full"
      px="20"
      py="10"
      rounded="lg"
      shadow="lg"
      textAlign="left"
    >
      {children}
    </Box>
  );
}

import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Profile({ user }) {
  const [input, setInput] = useState("");
  const { setUserData, isUserUpdating } = useMoralis();
  return (
    <CustomContainer>
      <Text>
        <b>🕹&nbsp; Username: </b>
        {user.getUsername()}
      </Text>
      <Text>
        <b>💵&nbsp; Wallet Address: </b>
        {user.get("ethAddress")}
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim() !== "") {
            setUserData({
              username: input,
            }).then(() => {
              setInput("");
            });
          }
        }}
      >
        <FormControl mt="6" mb="6">
          <FormLabel htmlFor="username">Set a new Username</FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="Ex. LightsOut"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="purple" disabled={isUserUpdating}>
          ✔&nbsp; Change username
        </Button>
      </form>
    </CustomContainer>
  );
}

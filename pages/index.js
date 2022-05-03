import {
  Button,
  Flex,
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import Head from "next/head";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import Nft from "../components/Nft";
import Send from "../components/Send";
export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut, account } =
    useMoralis();
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | OpenSpace</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal.400, purple.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            OpenSpace
          </Text>
          <Button
            onClick={() =>
              authenticate({
                signingMessage: "Signing into OpenSpace Dash",
              })
            }
            colorScheme="purple"
            size="lg"
            mt="6"
          >
            Login With MetaMask
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>OpenSpace</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box
          flex="1"
          bgGradient="linear(to-br, teal.400, purple.300)"
          px="44"
          py="20"
        >
          <Tabs
            size="lg"
            colorScheme="purple"
            align="center"
            variant="enclosed"
          >
            <TabList>
              <Tab color="white" fontWeight="bold">
                Profile
              </Tab>
              <Tab color="white" fontWeight="bold">
                Balance
              </Tab>
              <Tab color="white" fontWeight="bold">
                Transactions
              </Tab>
              <Tab color="white" fontWeight="bold">
                NFTs
              </Tab>
              <Tab color="white" fontWeight="bold">
                Send ETH
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance user={user} />
              </TabPanel>
              <TabPanel>
                <Transactions user={user} />
              </TabPanel>
              <TabPanel>
                <Nft user={user} />
              </TabPanel>
              <TabPanel>
                <Send user={user} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}

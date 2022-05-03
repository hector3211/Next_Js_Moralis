import React, { useEffect, useState } from "react";
import CustomContainer from "./CustomContainer";
import { Divider, Text } from "@chakra-ui/react";
import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";

export default function Balance({ user }) {
  const Web3Api = useMoralisWeb3Api();
  const { fetchERC20Balances, data } = useERC20Balances();
  const [ethBalance, setEthBalance] = useState(0);
  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      })
      .catch((err) => console.log(err));
    if (result.balance) {
      setEthBalance(Moralis.Units.FromWei(result.balance));
    }
  };
  useEffect(() => {
    fetchNativeBalance();
    fetchERC20Balances({
      params: {
        chain: "rinkeby",
        address: user.get("ethAddress"),
      },
    });
  }, []);
  return (
    <CustomContainer>
      <Text mb="3" fontSize="xl" fontWeight="bold">
        <b>My ERC20 Tokens: </b>
      </Text>
      {ethBalance && (
        <Text>
          💰&nbsp;{ethBalance} <b>ETH</b>
        </Text>
      )}
      <Divider />
      {data &&
        data.map((token) => (
          <div key={token.symbol}>
            <Text>
              💸&nbsp;{Moralis.Units.FromWei(token.balance)}{" "}
              <b>{token.symbol}</b>
            </Text>
          </div>
        ))}
    </CustomContainer>
  );
}

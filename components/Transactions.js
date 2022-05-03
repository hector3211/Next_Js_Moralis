import { Divider, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./CustomContainer";
export default function Transactions({ user }) {
  const Web3Api = useMoralisWeb3Api();
  const BASE_URL = "https://rinkeby.etherscan.io/tx/";
  const [transactionArray, setTransactionArray] = useState([]);
  const fetchTransactions = async () => {
    const data = await Web3Api.account
      .getTransactions({
        chain: "rinkeby",
        address: user.get("ethAddress"),
        limit: 3,
      })
      .catch((err) => console.log(err));
    if (data) {
      setTransactionArray(data.result);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <CustomContainer>
      <Text fontSize="xl" mb="6" fontWeight="bold">
        Last Three Transactions
      </Text>
      <Text>
        {transactionArray &&
          transactionArray.map((transaction) => (
            <div key={transaction.hash}>
              <Link href={`${BASE_URL}${transaction.hash}`} isExternal>
                ➡&nbsp; {transaction.hash}
              </Link>
              <Divider />
            </div>
          ))}
      </Text>
    </CustomContainer>
  );
}

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import store from "store";
import { SimpleGrid, Box, Text, Center } from "@chakra-ui/react";

// interface ParamsID {
//   id: string;
// }

function Go() {
  const [state, setState] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const urlDestination = store.get("shorten_destination").destination;
    const urlId = store.get("shorten_destination").id;

    if (id === urlId) {
      setState((pv) => !pv);
      setTimeout(() => {
        window.location.href = urlDestination;
      }, 1000);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Go</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SimpleGrid columns={1}>
        <Box as={Center} bg="brandDark.100" height="100vh">
          {state && (
            <Text color="white" fontSize="larger">
              please wait..
            </Text>
          )}
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Go;

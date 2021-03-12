import Head from "next/head";
import { SimpleGrid, Box, Center } from "@chakra-ui/react";
// components
import { Field, Result } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <SimpleGrid columns={[1, null, 2]}>
        <Box as={Center} bg="brandDark.100" height="100vh">
          <Field />
        </Box>
        <Box as={Center} bg="brandDark.200" height="100vh">
          <Result />
        </Box>
      </SimpleGrid>
    </>
  );
}

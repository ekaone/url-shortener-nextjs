import { SimpleGrid, Box, Center } from "@chakra-ui/react";
// components
import { Field, Result } from "../components";

export default function Home() {
  return (
    <>
      <SimpleGrid columns={[1, null, 2]}>
        <Box as={Center} bg="brandDark.100" height="100vh">
          <Field />
        </Box>
        <Box bg="brandDark.200" height="100vh" paddingTop="20px">
          <Result />
        </Box>
      </SimpleGrid>
    </>
  );
}

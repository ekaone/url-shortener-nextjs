import React from "react";
import { Box, Image } from "@chakra-ui/react";

function Result() {
  return (
    <Box>
      <Image
        src="/link_shortener.svg"
        boxSize="250px"
        objectFit="cover"
        alt="Logo link shortener"
      />
    </Box>
  );
}

export default Result;

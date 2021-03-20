import React from "react";
import Link from "next/link";
import { Box, Text, Stack, Divider, HStack, VStack } from "@chakra-ui/react";
import { useUrl } from "../hooks/useUrl";

interface UrlsProps {
  destination: string;
  shorten: string;
  createdAt: string;
}

const GlobeIcon = () => (
  <span role="img" aria-label="globe">
    🌐
  </span>
);

const LinkIcon = () => (
  <span role="img" aria-label="link">
    🔗
  </span>
);

const Urls = ({ destination, shorten, createdAt }: UrlsProps) => (
  <Box
    borderLeftWidth="5px"
    borderRadius="2px"
    borderColor="brandGreen.500"
    width="75%"
    padding="10px"
    bg="brandDark.100"
  >
    <Stack>
      <HStack>
        <GlobeIcon />
        <Text color="brandYellow.100">{destination}</Text>
      </HStack>
      <Divider />
      <HStack>
        <LinkIcon />
        <Text color="brandGreen.500">Shorten:{""}</Text>
        <Link href={shorten}>
          <a target="_blank" style={{ color: "brandYellow.100" }}>
            <Text color="brandYellow.100">{shorten}</Text>
          </a>
        </Link>
      </HStack>
      <Text color="white" fontSize="10px">
        {createdAt}
      </Text>
    </Stack>
  </Box>
);

function Result() {
  const [urls] = useUrl();

  return (
    <>
      <VStack>
        {urls?.map((url) => (
          <Urls
            key={url.id}
            destination={url.destination}
            shorten={url.shorten}
            createdAt={url.createdAt}
          />
        ))}
      </VStack>
    </>
  );
}

export default Result;

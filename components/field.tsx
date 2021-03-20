import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  Input,
  FormHelperText,
  Box,
  Kbd,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useUrl } from "../hooks/useUrl";

const yoyoVariants = {
  animationOne: {
    y: [0, -5],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

function Field() {
  const [shorten, setShorten] = useState();
  const [urls, setUrls] = useUrl();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    console.log(shorten);
  }, [shorten]);

  const Enter = () => (
    <motion.div variants={yoyoVariants} animate="animationOne">
      <Kbd bg="brandDark.100">Enter</Kbd>
    </motion.div>
  );

  const handleKeyUp = async (e: any) => {
    if (e.keyCode === 13) {
      const value = e.target.value;

      if (value === "") {
        return;
      }
      await fetch(`https://is.gd/create.php?format=json&url=${value}`)
        .then((response) => response.json())
        .then((data) => {
          setUrls([
            ...urls,
            {
              id: Math.random(),
              destination: value,
              shorten: data.shorturl,
              createdAt: new Date().toLocaleString(),
            },
          ]);
          setShorten(data.shorturl);
        });
    }
  };

  return (
    <>
      <Box justifyContent="center">
        <FormControl id="search">
          <Input
            ref={ref}
            width={["sm", null, "lg"]}
            background="transparent"
            color="brandOrange"
            border={0}
            borderBottom="1px"
            borderRadius="none"
            fontSize="large"
            fontWeight={500}
            autoComplete="off"
            boxShadow="none !important"
            px={3}
            py={2}
            onKeyUp={handleKeyUp}
            placeholder=" url"
          />
          <FormHelperText color="brandGreen.500">
            <Enter />
          </FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}

export default Field;

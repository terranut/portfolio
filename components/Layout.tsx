import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { Center, Box, Flex } from "@chakra-ui/layout";
import { Menu } from "./Menu";
import { routes } from "../data/routes";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();

  const DefaultLayout = () => (
    <Flex
      bg="black"
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        bg="white"
        width={{ xs: "", md: "50vw" }}
        height="100%"
        order={{ xs: "1", md: "0" }}
        overflow="scroll"
      >
        {children}
      </Box>
      <Menu routes={routes} />
    </Flex>
  );

  return (
    <Center height="100vh" flexDirection="column">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultLayout />
    </Center>
  );
};

export default Layout;

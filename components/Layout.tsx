import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, Head, Card, Heading, Grid, SimpleGrid } from "./ui";
import Profile from "./Profile";
import { Menu } from "./Menu/Menu";
import { data } from "../data/data";
import { Fade } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(data.menu.filter((e) => e.path === router.pathname)[0].display);
  }, [router.pathname]);

  return (
    <Box id="main-wrapper" m={{ xs: "5", md: "20" }} pb="20">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex boxShadow="dark-lg" gap={5} direction={{ xs: "column", md: "row" }}>
        <Box position={{xs:"relative",md:"sticky"}} top={{xs:"0",md:"5"}} height="100%">
          <Profile />
        </Box>

        <Card p="0" width="100%">
          <Flex justifyContent="space-between">
            <Fade delay={0.1} in={true}>
              <Flex direction="column" pt="8" pl="10">
                <Heading size="lg">{page}</Heading>
                <Box width="40px" height="5px" mt="5" bg="yellow" borderRadius="full"></Box>
              </Flex>
            </Fade>

            <Menu items={data.menu} />
          </Flex>

          <Fade in={true} delay={0.1}>
            <Box pl="10" pr="10" pt="5">{children}</Box>
          </Fade>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout;

import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, Head, Card, Heading } from "./ui";
import Profile from "./Profile";
import { Menu } from "./Menu/Menu";
import { Fade } from "@chakra-ui/react";

type Props = {
  store: any;
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Portfolio", store }: Props) => {
  const router = useRouter();
  const [page, setPage] = useState("");

  useEffect(() => {
    if (store?.menu) {
      setPage(store?.menu?.filter((e) => e.path === router.pathname)[0].display);
    } else {
      setPage(title);
    }
  }, [router.pathname]);

  return (
    <Box
      id="main-wrapper"
      ml={{ xs: "5", md: "10em", lg: "25em" }}
      mr={{ xs: "5", md: "10em", lg: "25em" }}
      mt={{ xs: "5", md: "5em" }}
      pb="20"
    >
      <Head>
        <title>{`${title} | ${store?.id?.name}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex boxShadow="dark-lg" gap={5} direction={{ xs: "column", md: "row" }}>
        <Box position={{ xs: "relative", md: "sticky" }} top={{ xs: "0", md: "5" }} height="100%">
          <Profile profile={store.profile} idData={store.id} socialLinks={store.social} />
        </Box>

        <Card p="0" width="100%">
          <Flex justifyContent="space-between">
            <Fade delay={0.1} in={true}>
              <Flex direction="column" pt="8" pl="10">
                <Heading size="lg">{page}</Heading>
                <Box width="40px" height="5px" mt="5" bg="yellow" borderRadius="full"></Box>
              </Flex>
            </Fade>

            <Menu items={store.menu} />
          </Flex>

          <Fade in={true} delay={0.1}>
            <Box pl="10" pr="10" pt="8">
              {children}
            </Box>
          </Fade>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout;

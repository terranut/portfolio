import Layout from "../components/Layout";
import { Text, Box, Flex, Center, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { stackData } from "../data/stackData";
import Profile from "../components/Profile";

const HomePage = () => {
  const stackInfo = stackData.map((element, idx) => (
    <Flex key={idx}>
      {element.icon}
      <Box p="2">
        <Text fontSize="12px" fontWeight="bold" lineHeight="1" color="grey">
          {element.title}
        </Text>
        <Text fontSize="10px" lineHeight="1" color="grey">
          {element.info}
        </Text>
      </Box>
    </Flex>
  ));

  return (
    <Layout title="Home | ABOUT">
      <Flex height="100%" flexDirection="column">
        <Profile />
        <Stack mt="10" direction={{ xs: "column", md: "row" }} spacing="24px">
          {stackInfo}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default HomePage;

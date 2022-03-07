import Layout from "../components/Layout";
import { Text, Box, Flex, Stack } from "@chakra-ui/layout";
import { stackData } from "../data/stackData";
import Profile from "../components/Profile";
import ProfileTabs from "../components/ProfileTabs";

const HomePage = () => {
  const stackInfo = stackData.map((element, idx) => (
    <Flex key={idx}>
      {element.icon}
      <Box p="2">
        <Text fontSize="12px" fontWeight="bold" lineHeight="1" >
          {element.title}
        </Text>
        <Text fontSize="10px" lineHeight="1" >
          {element.info}
        </Text>
      </Box>
    </Flex>
  ));

  return (
    <Layout title="José Mendoza">
      <Flex p="5" height="100%" flexDirection="column">
        <Profile />
        <Stack mt="10" direction={{ xs: "column", md: "row" }} spacing="24px">
          {stackInfo}
        </Stack>
        <ProfileTabs />
      </Flex>
    </Layout>
  );
};

export default HomePage;

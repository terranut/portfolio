import Layout from "../components/Layout";
import { Text, Heading, List, ListItem, Box, Flex, Center, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { stackData } from "../data/stackData";

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
      <Flex height="100%" flexDirection="column" justifyContent="center">
        <Flex width="100%" height="fit-content" flexDirection={{ xs: "column", md: "row" }}>
          <Center>
            <Image  borderRadius="10" src="/assets/jima.jpg"></Image>
          </Center>

          <Flex flexDirection="column" p="5" display="flex" justifyContent="space-evenly">
            <Heading size="md" color="black_light">
              @terranut
            </Heading>
            <Box fontSize="small" color="grey">
              Hola. Soy desarrollador Frontend con experiencia en los frameworks más populares del
              mercado como son Angular y React con Next. Adoro el diseño de aplicaciones y estoy
              intentando enseñar a mi gato a programar.
            </Box>
          </Flex>
        </Flex>

        <Stack mt="10" direction={{ xs: "column", md: "row" }} spacing="24px">
          {stackInfo}
        </Stack>
      </Flex>
    </Layout>
  );
};

export default HomePage;

import { Heading, Box, Flex,Center } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Profile = () => (
  <Flex width="100%" height="fit-content" flexDirection={{ xs: "column", md: "row" }}>
    <Center>
      <Image borderRadius="10" src="/assets/jima.jpg"></Image>
    </Center>
    <Flex flexDirection="column" p="5" display="flex" justifyContent="space-evenly">
      <Heading size="md" color="black_light">
        @terranut
      </Heading>
      <Box fontSize="small" color="grey">
        Hola. Me llamo Nacho y soy desarrollador Frontend con experiencia en los frameworks más populares del mercado
        como son Angular y React con Next. Adoro el diseño de aplicaciones y juegos. Actualmente mis esfuerzos tratan de enseñar Javascript a mi gata.
      </Box>
    </Flex>
  </Flex>
);

export default Profile;

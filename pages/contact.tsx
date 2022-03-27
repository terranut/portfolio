import Layout from "../components/Layout";
import { Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image, Stack, Link } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";

const ContactPage = (props) => (
  <Layout title="José Mendoza | Contacto" store={props.store}>
    <Center h="100%">
      <Flex direction="column" alignItems="center">
        <Heading fontFamily="smoch">Hablemos</Heading>
        <Text fontSize="14px">
          Si necesitas más información o tienes alguna pregunta. Contacta conmigo.
        </Text>

        <Stack mt="10" direction="row" spacing="40px">
          <Image borderRadius="full" boxSize="150px" objectFit="cover" src="/assets/jima.jpg" />
        </Stack>

        <Stack mt="10" direction="row" spacing="40px">
          <Flex direction="column" alignItems="center">
            <FiMail size="2em" />
            <Text fontSize="10px">EMAIL</Text>
            <Text fontSize="12px">namenal@gmail.com</Text>
          </Flex>
          <Link
            display="flex"
            alignItems="center"
            flexDirection="column"
            fontSize="12px"
            href="https://www.linkedin.com/in/jima-95a94a142"
            isExternal
          >
            <AiFillLinkedin size="3em" />
            <Text fontSize="10px">LINKEDIN</Text>
            Perfil profesional
          </Link>
        </Stack>
      </Flex>
    </Center>
  </Layout>
);

export default ContactPage;

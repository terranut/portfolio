import Layout from "../components/Layout";
import { Text, Heading, Flex, Center, Image, Stack, Link } from "../components/ui";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import GMap from "../components/GMap/GMap";

const ContactPage = (props) => {
  const [showMap,setShowMap] = useState(false)
  const [center,setCenter] = useState(null);
  useEffect(() => {
    if(props?.store?.contact){
      setCenter({lat: parseFloat(props?.store?.contact[0].lat), lng: parseFloat(props?.store?.contact[0].lng)})
      setShowMap(true)
    }
   
  },[props]);


  return (
    <Layout title="Contacto" store={props.store}>
      <Center h="100%"> 
        <Flex direction="column" alignItems="center" width="100%">
          {showMap ?  <GMap center={center} height="350px" zoom={11}/> :''} 
          <Text mt="5"  fontSize="14px">
            Si necesitas más información o tienes alguna pregunta. Contacta conmigo.
          </Text>


          <Stack mt="10" mb="10" direction="row" spacing="40px">
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
};

export default ContactPage;

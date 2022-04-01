import Layout from "../components/Layout";
import { Text, Heading, Flex, Center, Image, Stack, Link } from "../components/ui";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import GMap from "../components/GMap/GMap";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const ContactPage = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [center, setCenter] = useState(null);

  const [photo, setPhoto] = useState("");
  useEffect(() => {
    if (props?.store?.contact) {
      setPhoto(props.store.contact[0].photo);

      if (props.store.contact[0].lat && props.store.contact[0].lng) {
        setCenter({
          lat: parseFloat(props?.store?.contact[0].lat),
          lng: parseFloat(props?.store?.contact[0].lng),
        });
        setShowMap(true);
      }
    }
  }, [props]);

  return (
    <Layout title="Contacto" store={props.store}>
      <Center h="100%">
        <Flex direction="column" alignItems="center" width="100%" mb="5">
          {showMap ? <GMap center={center} height="350px" zoom={11} /> : ""}

          {photo ? (
            <Image
            borderRadius="10px"
              mt="5"
              mb="5"
              width="100%"
              height="300px"
              src={`https://drive.google.com/uc?id=${props.store.contact[0].photo}`}
            />
          ) : (
            ""
          )}

          <Text mt="5" mb="10" fontSize="14px">
            Si necesitas más información o tienes alguna pregunta. Contacta conmigo.
          </Text>

          <SocialLinks color="yellow" size="25px" items={props.store.social} showTitle={true} />
        </Flex>
      </Center>
    </Layout>
  );
};

export default ContactPage;

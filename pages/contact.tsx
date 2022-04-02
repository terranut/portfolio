import Layout from "../components/Layout";
import { Text, Heading, Flex, Center, Image, Stack, Link } from "../components/ui";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import GMap from "../components/GMap/GMap";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import React from "react";
import { SheetContext } from "../hooks/SheetContext";

const ContactPage = (props) => {
  const store: any = React.useContext(SheetContext);
  const [showMap, setShowMap] = useState(false);
  const [center, setCenter] = useState(null);

  const [photo, setPhoto] = useState("");
  useEffect(() => {
    if (store?.contact) {
      setPhoto(store.contact[0].photo);

      if (store.contact[0].lat && store.contact[0].lng) {
        setCenter({
          lat: parseFloat(store?.contact[0].lat),
          lng: parseFloat(store?.contact[0].lng),
        });
        setShowMap(true);
      }
    }
  }, [props]);

  return (
    <Layout title="Contacto" store={store}>
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
              src={`https://drive.google.com/uc?id=${store.contact[0].photo}`}
            />
          ) : (
            ""
          )}

          <Text mt="5" mb="10" fontSize="14px">
            Si necesitas más información o tienes alguna pregunta. Contacta conmigo.
          </Text>

          <SocialLinks color="yellow" size="25px" items={store.social} showTitle={true} />
        </Flex>
      </Center>
    </Layout>
  );
};

export default ContactPage;

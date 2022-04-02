import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../stylesResume.css";
import React, { useEffect, useState, createContext } from "react";
import { Center, Spinner, Text } from "../components/ui";
import { useManager } from "../hooks/useManager";
import SheetProvider from "../hooks/MyProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const manager = useManager();
  const [sheetId, setSheetId] = useState("");

  useEffect(() => {
    if (manager[0]) {
      console.log(window?.location.href,manager);
      let url = window?.location.href;
      manager[0].forEach((element) => {
        if (url.indexOf(element.url) > -1) {
          setSheetId(element.id_file);
        }
      });
    }
  }, [manager]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {sheetId ? (
        <SheetProvider sheetId={sheetId}>
          <Component {...pageProps} />{" "}
        </SheetProvider>
      ) : (
        <Center height="100vh" width="100vw" flexDirection="column">
          <Spinner thickness="8px" speed="0.65s" emptyColor="black.700" color="yellow" size="xl" />
          <Text mt="5">Cargando...</Text>
        </Center>
      )}
    </ChakraProvider>
  );
}

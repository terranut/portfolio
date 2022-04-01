import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../stylesResume.css";
import useGoogleSheets from "use-google-sheets";
import React, { useEffect, useState } from "react";
import { Center, Spinner, Text } from "../components/ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState({});
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_API,
    sheetId: "1EoEVDQ4KTKK6h9Zp7djWjv467w3LkbvUGyO5xPDY_X4",
  });

  useEffect(() => {
    console.log(data);

    //MENU
    let menu = data[1]?.data;
    if (menu && menu.length) {
      menu = menu.filter((e: any) => e.enabled === "TRUE");
    }

    //PORTFOLIO ORDEN POR GRUPOS
    let portfolio = data[4]?.data;
    let portfolioGroups = {};
    if (portfolio && portfolio.length) {
      let groups = new Set();
      portfolio.forEach((e: any) => {
        if (e.group && e.group.length) {
          groups.add(e.group);
        }
      });
      groups.forEach((e: any) => {
        portfolioGroups[e] = portfolio.filter((f: any) => f.group === e);
      });
    }

    setStore((appState) => {
      store["profile"] = data[0]?.data;
      store["menu"] = menu;
      store["id"] = data[2]?.data[0];
      store["workingOn"] = data[3]?.data;
      store["portfolio"] = portfolioGroups;
      store["skills"] = data[5]?.data;
      store["blog"] = data[6]?.data;
      store["social"] = data[7]?.data;
      store["education"] = data[8]?.data;
      store["experience"] = data[9]?.data;
      store["contact"] = data[10]?.data;
      return { ...appState };
    });
  }, [data]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {!data.length ? (
        <Center height="100vh" width="100vw" flexDirection="column">
          <Spinner thickness="8px" speed="0.65s" emptyColor="black.700" color="yellow" size="xl" />
          <Text mt="5">Cargando...</Text>
        </Center>
      ) : (
        <Component {...pageProps} store={store} />
      )}
    </ChakraProvider>
  );
}

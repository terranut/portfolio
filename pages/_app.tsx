import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../stylesResume.css";
import React, { useEffect, useState } from "react";
import { useManager } from "../hooks/useManager";
import SheetProvider from "../hooks/SheetProvider";
import LoadingPage from "../components/LoadingPage";

export default function MyApp({ Component, pageProps }: AppProps) {
  const manager = useManager();
  const [sheetId, setSheetId] = useState("");

  useEffect(() => {
    if (manager[0]) {
      console.log(window?.location.href, manager);
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
        <LoadingPage text={"Cargando..."} />
      )}
    </ChakraProvider>
  );
}

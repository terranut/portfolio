import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../stylesResume.css";
import useGoogleSheets from "use-google-sheets";
import React, { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState({});
  const { data, loading, error } = useGoogleSheets({
    apiKey: "",
    sheetId: "10HdQgss8VmnKeMtL1kGEt4ebRwBCTF02b0mKPrcsqVM",
  });

  useEffect(() => {
    console.log(data);

    setStore((appState) => {
      store["profile"] = data[0]?.data;
      store["menu"] = data[1]?.data;
      store["id"] = data[2]?.data[0];
      store["workingOn"] = data[3]?.data;
      store["companies"] = data[4]?.data;
      store["skillsA"] = data[5]?.data;
      store["skillsB"] = data[6]?.data;
      store["blog"] = data[7]?.data;
      store["social"] = data[8]?.data;
      store["education"] = data[9]?.data;
      store["experience"] = data[10]?.data;
      return { ...appState };
    });
  }, [data]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} store={store} /> 
    </ChakraProvider>
  );
}

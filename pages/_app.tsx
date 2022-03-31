import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../stylesResume.css";
import useGoogleSheets from "use-google-sheets";
import React, { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState({});
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_API,
    sheetId: "10HdQgss8VmnKeMtL1kGEt4ebRwBCTF02b0mKPrcsqVM",
  });

  useEffect(() => {
    console.log(data);

    let menu = data[1]?.data;
    if (menu && menu.length) {
      menu = menu.filter((e:any) => e.enabled === 'TRUE');
    }

    setStore((appState) => {
      store["profile"] = data[0]?.data;
      store["menu"] = menu;
      store["id"] = data[2]?.data[0];
      store["workingOn"] = data[3]?.data;
      store["companies"] = data[4]?.data;
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
      <Component {...pageProps} store={store} />
    </ChakraProvider>
  );
}

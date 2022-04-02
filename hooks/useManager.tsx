import { useState, useEffect } from "react";
import useGoogleSheets from "use-google-sheets";

export const useManager = () => {
  const [customData, setCustomData] = useState(undefined);
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_API,
    sheetId: "19qYB04_r1A3mO7ay5N3nBj3RKYWzfyslL7Hxs5uIyEQ",
  });


  useEffect(() => {
    if (data.length) {
      setCustomData(data[0].data);
    }
  }, [data]);

  return [customData, loading, error];
};

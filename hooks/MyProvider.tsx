import { useEffect, useState } from "react";
import { SheetContext } from "./SheetContext";
import { useData } from "./useData";

const SheetProvider = ({ children, sheetId }) => {
  const { store, loading, error } = useData(sheetId);

  const { Provider } = SheetContext;
  return <Provider value={store}>{children}</Provider>;
};

export default SheetProvider;

import { useEffect, useState } from "react";
import { SheetContext } from "./SheetContext";
import { useData } from "./useData";
import LoadingPage from "../components/LoadingPage";

const SheetProvider = ({ children, sheetId }) => {
  const { store, loading, error } = useData(sheetId);

  const { Provider } = SheetContext;
  return <Provider value={store}>{!loading ? children : <LoadingPage text={'Preparando perfil de usuario...'} />}</Provider>;
};

export default SheetProvider;

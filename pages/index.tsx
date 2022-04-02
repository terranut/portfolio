import React from "react";
import Layout from "../components/Layout";
import { Text, Heading } from "../components/ui";
import WorkCards from "../components/WorkCards/WorkCards";
import { SheetContext } from "../hooks/SheetContext";

const HomePage = () => {
  const store: any = React.useContext(SheetContext);

  return (
    <Layout title="Sobre mi" store={store}>
      <Text color="gray.100"> {store?.id?.description_a}</Text>
      <Text color="gray.100" mt="2">
        {store?.id?.description_b}
      </Text>

      {store?.workingOn?.length ? (
        <>
          <Heading mt="10" mb="5">
            {store?.id?.working_on_title}
          </Heading>
          <WorkCards items={store?.workingOn} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default HomePage;

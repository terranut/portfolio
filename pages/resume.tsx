import Layout from "../components/Layout";
import { Box, Text, Heading, Icon, Flex, Card } from "../components/ui";
import Skills from "../components/Skills/Skills";
import { SheetContext } from "../hooks/SheetContext";
import React from "react";

const ResumePage = () => {
  const store: any = React.useContext(SheetContext);

  return (
    <Layout title="Resumen" store={store}>
      {/* EDUCATION */}
      {store?.education?.length ? (
        <>
          <Flex alignItems="center" gap={4}>
            <Card p="3">
              <Icon color="yellow">mail</Icon>
            </Card>
            <Heading size="lg">Educación</Heading>
          </Flex>

          <Box className="rb-container" p="5">
            <ul className="rb">
              {store?.education?.map((e, idx) => {
                return (
                  <li key={idx} className="rb-item" ng-repeat="itembx">
                    <Text>{e.title}</Text>
                    <Text color="yellow">{e.data}</Text>
                    <Text>{e.description}</Text>
                  </li>
                );
              })}
            </ul>
          </Box>
        </>
      ) : (
        ""
      )}

      {/* EXPERIENCE */}
      {store?.experience?.length ? (
        <>
          <Flex alignItems="center" gap={4}>
            <Card p="3">
              <Icon color="yellow">mail</Icon>
            </Card>
            <Heading size="lg">Experiencia</Heading>
          </Flex>

          <Box className="rb-container" p="5">
            <ul className="rb">
              {store?.experience?.map((e, idx) => {
                return (
                  <li key={idx} className="rb-item" ng-repeat="itembx">
                    <Text>{e.title}</Text>
                    <Text color="yellow">{e.data}</Text>
                    <Text>{e.description}</Text>
                  </li>
                );
              })}
            </ul>
          </Box>
        </>
      ) : (
        ""
      )}

      {store?.skills?.length ? (
        <>
          <Heading mb="5" size="lg">
            Skills
          </Heading>
          <Skills mb="10" skills={store?.skills} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default ResumePage;

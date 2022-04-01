import Layout from "../components/Layout";
import { Box, Text, Heading, Icon, Flex, Card } from "../components/ui";
import Skills from "../components/Skills/Skills";

const ResumePage = (props) => {
  return (
    <Layout title="Resumen" store={props.store}>

      {/* EDUCATION */}
      {props?.store?.education?.length ? (
        <>
          <Flex alignItems="center" gap={4}>
            <Card p="3">
              <Icon color="yellow">mail</Icon>
            </Card>
            <Heading size="lg">Educación</Heading>
          </Flex>

          <Box className="rb-container" p="5">
            <ul className="rb">
              {props?.store?.education?.map((e, idx) => {
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
      {props?.store?.experience?.length ? (
        <>
          <Flex alignItems="center" gap={4}>
            <Card p="3">
              <Icon color="yellow">mail</Icon>
            </Card>
            <Heading size="lg">Experiencia</Heading>
          </Flex>

          <Box className="rb-container" p="5">
            <ul className="rb">
              {props?.store?.experience?.map((e, idx) => {
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

      {props?.store?.skills?.length ? (
        <>
          <Heading mb="5" size="lg">
            Skills
          </Heading>
          <Skills mb="10" skills={props?.store?.skills} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default ResumePage;

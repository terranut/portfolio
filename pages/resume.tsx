import Layout from "../components/Layout";
import { Box, Text, Heading, Icon, Flex, Card } from "../components/ui";

const ResumePage = (props) => (
  <Layout title="Resumen" store={props.store}>
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
  </Layout>
);

export default ResumePage;

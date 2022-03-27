import Layout from "../components/Layout";
import { Box, Text, Heading, Icon, Flex, Card } from "../components/ui";

const ResumePage = (props) => (
  <Layout title="Resumen" store={props.store}>
    <Flex alignItems="center" gap={4}>
      <Card p="3">
        <Icon color="yellow">mail</Icon>
      </Card>
      <Heading size="lg">Education</Heading>
    </Flex>

    <Box className="rb-container" p="5">
      <ul className="rb">
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
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
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
        <li className="rb-item" ng-repeat="itembx">
          <Text>Title</Text>
          <Text color="yellow">2007-2008</Text>
          <Text>Chris Serrano posted a photo on your wall.</Text>
        </li>
      </ul>
    </Box>


  </Layout>
);

export default ResumePage;

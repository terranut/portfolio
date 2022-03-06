import Layout from "../components/Layout";
import { Text, Heading, List, ListItem, Box } from "@chakra-ui/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { cv } from "../data/cv";

const listItem = (element) => {
  return(
    element.map((item, itemIdx) => (
      <ListItem key={itemIdx}>
        <ArrowForwardIcon mr="2" color="black" />
        {item}
      </ListItem>
    ))
  )
};

const list = cv.map((element, idx) => (
  <Box key={idx}>
    <Heading mt="5" size={element.size}>{element.name}</Heading>
    <List>
      <List>
        {listItem(element.items)}
      </List>
    </List>
  </Box>
));

const AboutPage = () => (
  <Layout title="Home | ABOUT">
    {list}
  </Layout>
);

export default AboutPage;

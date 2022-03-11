import Layout from "../components/Layout";
import { Heading, List, ListItem, Box } from "@chakra-ui/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { cv } from "../data/cv";

const listItem = (element) => {
  return element.map((item, itemIdx) => (
    <ListItem key={itemIdx}>
      <ArrowForwardIcon mr="2" color="black" />
      {item}
    </ListItem>
  ));
};

const list = cv.map((element, idx) => (
  <Box key={idx}>
    <Heading mt="5" size={element.size} fontFamily="smoch">
      {element.name}
    </Heading>
    <List>
      <List>{listItem(element.items)}</List>
    </List>
  </Box>
));

const CvPage = () => (
  <Layout title="José Mendoza | Experiencia">
    <Box p="5">{list}</Box>
  </Layout>
);

export default CvPage;

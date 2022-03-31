import Layout from "../components/Layout";
import { Box, Text, Heading, Icon, Flex, Card } from "../components/ui";
import Skills from "../components/Skills/Skills";

const PortfolioPage = (props) => {
  console.log(props);
  return (
    <Layout title="Portfolio" store={props.store}>
      Portfolio
    </Layout>
  );
};

export default PortfolioPage;

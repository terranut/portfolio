import Layout from "../components/Layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../components/ui";
import Skills from "../components/Skills/Skills";
import BlogCard from "../components/BlogCards/BlogCard";
import BlogCards from "../components/BlogCards/BlogCards";

const PortfolioPage = (props) => {
  return (
    <Layout title="Portfolio" store={props.store}>
      <Tabs>
        <TabList>
          {Object.keys(props.store.portfolio ? props.store.portfolio : []).map((key, index) => {
            return (
              <Tab key={index}>
                <div>{key}</div>
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          {Object.keys(props.store.portfolio ? props.store.portfolio : []).map((key, index) => {
            return (
              <TabPanel key={index}>
                <BlogCards items={props.store.portfolio[key]} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default PortfolioPage;

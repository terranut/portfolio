import Layout from "../components/Layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../components/ui";
import BlogCards from "../components/BlogCards/BlogCards";
import React from "react";
import { SheetContext } from "../hooks/SheetContext";

const PortfolioPage = () => {
  const store: any = React.useContext(SheetContext);

  return (
    <Layout title="Portfolio" store={store}>
      <Tabs>
        <TabList>
          {Object.keys(store.portfolio ? store.portfolio : []).map((key, index) => {
            return (
              <Tab key={index}>
                <div>{key}</div>
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          {Object.keys(store.portfolio ? store.portfolio : []).map((key, index) => {
            return (
              <TabPanel key={index}>
                <BlogCards items={store.portfolio[key]} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default PortfolioPage;

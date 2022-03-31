import { TabPanel } from "@chakra-ui/react";
const TabPanelApp = (props) => {
  return <TabPanel {...props}> {props.children}</TabPanel>;
};

export {TabPanelApp};
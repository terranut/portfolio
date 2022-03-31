import { TabPanels } from "@chakra-ui/react";
const TabPanelsApp = (props) => {
  return <TabPanels {...props}> {props.children}</TabPanels>;
};

export {TabPanelsApp};
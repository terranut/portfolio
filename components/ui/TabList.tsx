import { TabList } from "@chakra-ui/react";

const TabListApp = (props) => {
  return (
    <TabList {...props} border="none">
      {" "}
      {props.children}
    </TabList>
  );
};

export { TabListApp };

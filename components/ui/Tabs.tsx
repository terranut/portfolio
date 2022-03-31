import { Tabs } from "@chakra-ui/react";
const TabsApp = (props) => {
  return (
    <Tabs borderRadius="5px" color="white" {...props}>
      {props.children}
    </Tabs>
  );
};

export { TabsApp };

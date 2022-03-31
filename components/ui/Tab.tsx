import { Tab } from "@chakra-ui/react";
const TabApp = (props) => {
  return (
    <Tab
      {...props}
      _selected={{ color: 'yellow', bg: 'transparent' }}
      _focus={{ boxShadow: 0, backgroundColor: "red" }}
      _active={{ backgroundColor: "transparent" }}
    >
      {" "}
      {props.children}
    </Tab>
  );
};

export { TabApp };

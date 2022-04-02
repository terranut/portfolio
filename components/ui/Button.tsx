import { Button,Text } from "@chakra-ui/react";

const ButtonApp = (props) => {
  return (
    <Button
      bg="none"
      size="sm"
      _hover={{ color: "grayAlpha.100" }}
      _active={{ bg: "none" }}
      _focus={{ boxShadow: "none" }}
      {...props}
    >
      <Text>{props.children}</Text>
    </Button>
  );
};

export { ButtonApp };

import { Button } from "@chakra-ui/react";

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
      {props.children}
    </Button>
  );
};

export { ButtonApp };

import { Badge } from "@chakra-ui/react";

const BadgeApp = (props) => {
  return <Badge bg="black.300" color="white" borderRadius="8px" {...props}>{props.children}</Badge>;
};

export { BadgeApp };

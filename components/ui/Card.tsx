import { Flex } from "./index";

const Card = (props) => {
  return (
    <Flex
      border="1px solid"
      borderColor="black.200"
      bg="black.700"
      direction="column"
      borderRadius="20px"
      p="5"
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Card;

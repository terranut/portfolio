import { Flex } from "./index";

const Card = (props) => {
  const { gradient } = props;
  return (
    <Flex
      border="1px solid"
      borderColor="black.200"
      bg="black.700"
      direction="column"
      borderRadius="20px"
      p="5"
      overflow="hidden"
      bgGradient={gradient ? "linear(to-br, #2b2b2c00, #2b2b2c)" : "none"}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Card;

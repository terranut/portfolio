import { Stack, Flex, Text, Icon, Center } from "./ui";

const Metadata = (props) => {
  const { items,direction } = props;
  return (
    <Stack p="2" direction={direction ? direction : 'row'} spacing={10}>
      {items?.map((e, idx) => {
        return (
          <Flex key={idx} alignItems="center" width="100%" fontSize="14px">
            <Center p="2" boxSize="40px" bg="black.300" borderRadius="10px">
              <Icon color="yellow">{e.icon}</Icon>
            </Center>
            <Flex direction="column">
              <Text ml="4" color="black.100" fontSize="12px" textTransform="uppercase">
                {e.name}
              </Text>
              <Text ml="4">{e.value}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default Metadata;

import { Flex, Text, Progress, } from "../ui";

const Skill = (props) => {
  const { title, value } = props;

  return (
    <Flex direction="column">
      <Flex mb="2">
        <Text fontWeight="bold" color="gray.400" mr="3">
          {title}
        </Text>
        <Text fontWeight="bold" color="gray.400">{value}%</Text>
      </Flex>
      <Progress value={value} borderRadius="10px" background="gray.800" />
    </Flex>
  );
};

export default Skill;

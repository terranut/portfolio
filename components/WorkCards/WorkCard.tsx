import { Card, Stack, Box, Icon, Flex, Heading, Text } from "../ui";
import { WorkCardItem } from "./model";

const WorkCard = (props:WorkCardItem) => {
  return (
    <Card gradient="true">
      <Stack direction={{ xs: "column", sm: "row" }} spacing={5} p="3">
        <Box>
          <Icon color="yellow" size="50px">
            {props.icon}
          </Icon>
        </Box>
        <Flex direction="column">
          <Heading mb="2">{props.title}</Heading>
          <Text>{props.description} </Text>
        </Flex>
      </Stack>
    </Card>
  );
};

export default WorkCard;

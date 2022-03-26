import { Stack, Box, Heading, Text, Flex, Card, ImHtmlFive2, SimpleGrid } from "./ui";

interface WorkingCardItem {
  icon: string;
  title: string;
  description: string;
}

interface WorkingCardProps {
  items: WorkingCardItem[];
}

const WorkingCards = (props: WorkingCardProps) => {
  const { items } = props;
  return (
    <SimpleGrid columns={{ xs: 1, md: 2 }} gap={6} mb="10">
      {items?.map((e, idx) => {
        return (
          <Card>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={5} p="3">
              <Box>
                <ImHtmlFive2 size="50px" color="yellow" />
              </Box>
              <Flex direction="column">
                <Heading mb="2">
                  {e.title}
                </Heading>
                <Text>{e.description} </Text>
              </Flex>
            </Stack>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default WorkingCards;

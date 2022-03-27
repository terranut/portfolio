import { BlogCardItem } from "./model";
import { Box, Flex, Image, Text, Heading } from "../ui";

const BlogCard = (props: BlogCardItem) => {
  const { image, title, description, url } = props;
  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor="gray.800"
      borderRadius="10px"
      overflow="hidden"
      boxShadow="base"
    >
      <Image src="assets/hun.jpg" h="200px" objectFit="cover" />
      <Flex direction="column" p="5">
        <Heading size="sm">{title}</Heading>
        <Text mt="3">{description}</Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;

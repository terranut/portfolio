import { BlogCardItem } from "./model";
import { Box, Flex, Image, Text, Heading } from "../ui";

const BlogCard = (props: BlogCardItem) => {
  const { image, title, description, url } = props;

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Flex
      cursor="pointer"
      onClick={(e) => handleClick(url)}
      direction="column"
      border="1px solid"
      borderColor="gray.800"
      borderRadius="10px"
      overflow="hidden"
      boxShadow="base"
    >
      <Image src={`https://drive.google.com/uc?id=${image}`} h="200px" />
      <Flex direction="column" p="5">
        <Heading size="sm">{title}</Heading>
        <Text mt="3">{description}</Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;

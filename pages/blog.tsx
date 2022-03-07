import Layout from "../components/Layout";
import { post } from "../data/post";
import { Flex, Heading, Text, Wrap } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { FcVideoCall, FcReading } from "react-icons/fc";
import ButtonLink from "../components/ButtonLink";
import { wrapperBlog, cardBlog } from "../styles";

const cards = post.map((element, idx) => {
  const propsButton = {
    url: element.url,
    text: element.blog ? "Seguir leyendo" : "Ver video",
    icon: element.blog ? <FcReading /> : <FcVideoCall />,
  };

  return (
    <Flex __css={cardBlog} key={idx}>
      <Image width="100%" height="150px" objectFit="cover" src={element.image} />
      <Flex p="3" direction="column">
        <Heading size="sm">{element.title}</Heading>
        <Text mt="2" fontSize="12px">
          {element.text}
        </Text>
      </Flex>

      <ButtonLink {...propsButton} />
    </Flex>
  );
});

const BlogPage = () => (
  <Layout title="José Mendoza | Blog">
    <Wrap spacing="10" __css={wrapperBlog}>
      {cards}
    </Wrap>
  </Layout>
);

export default BlogPage;

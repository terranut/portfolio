import { BlogCardsProps } from "./model";
import { SimpleGrid } from "../ui";
import BlogCard from "./BlogCard";

const BlogCards = (props:BlogCardsProps) => {
    const { items } = props;
    return(
        <SimpleGrid columns={{ xs: 1, md: 2 }} gap={6} mb="10">
        {items?.map((e, idx) => {
          return <BlogCard key={idx} image="" title={e.title} description={e.description} url="" />;
        })}
      </SimpleGrid>
    )
};

export default BlogCards;

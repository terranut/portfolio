import BlogCards from "../components/BlogCards/BlogCards";
import Layout from "../components/Layout";

const BlogPage = (props) => (
  <Layout title="Blog" store={props.store}>
    <BlogCards items={props?.store.blog} />
  </Layout>
);

export default BlogPage;

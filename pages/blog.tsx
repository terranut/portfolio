import React from "react";
import BlogCards from "../components/BlogCards/BlogCards";
import Layout from "../components/Layout";
import { SheetContext } from "../hooks/SheetContext";

const BlogPage = () => {
  const store: any = React.useContext(SheetContext);

  return (
    <Layout title="Blog" store={store}>
      <BlogCards items={store?.blog} />
    </Layout>
  );
};

export default BlogPage;

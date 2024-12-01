import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";

const Blog = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <>
      <div className="bg-[#9538E2] py-8">
        <Helmet>
            <title>Gadget Heaven | Blog</title>
        </Helmet>
        <Heading
          title={`Blog`}
          subtitle={`Stay updated with the latest news, trends, and reviews on cutting-edge tech gadgets to help you make informed buying decisions.`}
        ></Heading>
      </div>
      <div className="my-12 max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Latest Tech Blogs
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

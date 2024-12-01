const BlogCard = ({ blog }) => {
  return (
    <div key={blog.id} className="card bg-base-100 shadow-xl overflow-hidden">
      <div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p className="text-sm text-gray-600">{blog.description}</p>
        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-white bg-[#9538E2] mt-4"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <h2 className="font-gothic text-2xl font-bold mb-4">{blog.title}</h2>
      <p className="font-gothic text-gray-300 mb-4">
        {blog.content.substring(0, 100)}...
      </p>
      <button className="text-yellow-500 hover:underline">Read More</button>
    </div>
  );
};

export default BlogCard;

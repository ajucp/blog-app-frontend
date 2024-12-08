import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../utils/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blogs
  const [error, setError] = useState(""); // Error state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs(); // Fetch blogs from the API
        console.log("Blogs from API:", data); // Debug fetched data
        setBlogs(data); // Set blogs in the state
        setLoading(false); // Stop loading
      } catch (error) {
        setError("Failed to load blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to fetch blogs only on component mount

  if (loading) return <div>Loading...</div>; // Show loading message while fetching blogs
  if (error) return <div>{error}</div>; // Show error message if something goes wrong

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      {/* Check if blogs exist */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.length === 0 ? (
          <div>No blogs available</div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-300 mb-4">{blog.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500 mb-2">
                By {blog.authorDetails.username} | {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <Link
                to={`/blogs/details/${blog._id}`}
                className="text-yellow-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;

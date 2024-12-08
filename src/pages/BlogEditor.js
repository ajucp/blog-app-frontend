import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBlog, getBlogById, editBlog } from "../utils/api"; // Import API functions

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams(); // Get blog ID from URL (for editing)
  const navigate = useNavigate();

  // Fetch the blog data if we're editing an existing blog
  useEffect(() => {
    if (id) {
      getBlogById(id)
        .then((blog) => {
          setTitle(blog.title);
          setContent(blog.content);
        })
        .catch((error) => console.error("Error fetching blog:", error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content };

    const token = localStorage.getItem("authToken"); // Get the JWT token from localStorage

    if (id) {
      // Editing existing blog
      try {
        await editBlog(id, blogData, token); // Pass token for authentication
        navigate("/"); // Redirect to the home page after editing
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    } else {
      // Creating a new blog
      try {
        await createBlog(blogData, token); // Pass token for authentication
        navigate("/"); // Redirect to the home page after creating
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{id ? "Edit Blog" : "Create Blog"}</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
          rows="6"
          required
        />
        <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded">
          {id ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;

import React from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../utils/api"; // Import API function
import CreateBlogForm from "../components/CreateBlogForm"; // Import the reusable form component

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = async (blogData) => {
    const token = localStorage.getItem("authToken"); // Get the JWT token from localStorage

    try {
      await createBlog(blogData, token); // Pass token for authentication
      navigate("/"); // Redirect to home after creating the blog
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>
      <CreateBlogForm title="" content="" onSubmit={handleSubmit} /> {/* Pass empty values for creating a new blog */}
    </div>
  );
};

export default CreateBlog;

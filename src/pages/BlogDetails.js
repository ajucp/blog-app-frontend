import React, { useState, useEffect } from "react"; // React and hooks
import { useParams, useNavigate } from "react-router-dom"; // Routing
import { getBlogById, editBlog, deleteBlog } from "../utils/api"; // API functions

const BlogDetails = () => {
  const [blog, setBlog] = useState(null); // State for blog details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [isEditing, setIsEditing] = useState(false); // Edit mode
  const [newTitle, setNewTitle] = useState(""); // New title for editing
  const [newContent, setNewContent] = useState(""); // New content for editing
  const { id } = useParams(); // Extract blog ID from URL
  const navigate = useNavigate(); // Navigation after delete or edit

  // Fetch blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id); // Fetch blog details
        setBlog(data); // Set blog state with fetched data
        setNewTitle(data.title); // Pre-fill the title for editing
        setNewContent(data.content); // Pre-fill the content for editing
        setLoading(false); // Stop loading
      } catch (error) {
        setError("Failed to load blog details");
        setLoading(false); // Stop loading on error
      }
    };

    fetchBlog();
  }, [id]); // Re-fetch when the `id` changes

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Disable editing mode
    setNewTitle(blog.title); // Reset to original title
    setNewContent(blog.content); // Reset to original content
  };

  const handleSaveEdit = async () => {
    try {
      const updatedBlog = { title: newTitle, content: newContent };
      await editBlog(id, updatedBlog); // Update blog via API
      const updatedData = await getBlogById(id); // Re-fetch the blog after saving
      setBlog(updatedData); // Update blog state with the new data
      setIsEditing(false); // Disable editing mode
      alert("Blog updated successfully!");
    } catch (error) {
      setError("Failed to update blog");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBlog(id); // Delete blog via API
      alert("Blog deleted successfully!");
      navigate("/"); // Redirect to home page after deletion
    } catch (error) {
      setError("Failed to delete blog");
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading state while fetching
  if (error) return <div>{error}</div>; // Show error state if something goes wrong

  // Fallback values if authorDetails or date is missing
  const authorName = blog?.authorDetails?.username || "Unknown Author";
  const formattedDate = blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Invalid Date";

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>
      <p className="text-gray-300 mb-4">{blog?.content}</p>
      <p className="text-sm text-gray-500">
        By {authorName} | {formattedDate}
      </p>

      {isEditing ? (
        <div className="mt-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
            placeholder="Blog Title"
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
            rows="6"
            placeholder="Blog Content"
          />
          <div className="flex gap-4">
            <button
              onClick={handleSaveEdit}
              className="bg-yellow-500 text-black px-6 py-3 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-6 py-3 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleEditClick}
            className="bg-yellow-500 text-black px-6 py-3 rounded"
          >
            Edit Blog
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-3 rounded"
          >
            Delete Blog
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;

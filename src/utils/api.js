import axios from 'axios';

const API_URL = "http://localhost:5000/api"; // Base URL for your backend API

// Utility to get the authentication token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Registration failed";
  }
};

// Login User
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Login failed";
  }
};

// Get Blogs with Pagination
export const getBlogs = async (page = 1, limit = 6) => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      params: { page, limit },
    });
    console.log('Blogs fetched from back end',response.data)
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to fetch blogs";
  }
};

// Get Single Blog by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data; // Return the blog data
  } catch (error) {
    throw error.response?.data?.error || "Failed to fetch blog";
  }
};

// Create a New Blog (with Authentication)
export const createBlog = async (blogData) => {
  const token = getAuthToken();

  try {
    const response = await axios.post(`${API_URL}/blogs`, blogData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to create blog";
  }
};

// Edit a Blog (with Authentication)
export const editBlog = async (id, blogData) => {
  const token = getAuthToken();

  try {
    const response = await axios.patch(`${API_URL}/blogs/${id}`, blogData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to update blog";
  }
};

// Delete a Blog (with Authentication)
export const deleteBlog = async (id) => {
  const token = getAuthToken();

  try {
    const response = await axios.delete(`${API_URL}/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to delete blog";
  }
};

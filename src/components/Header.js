import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // For navigation after logout

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    navigate("/login"); // Redirect to login page after logout
  };

  const isAuthenticated = localStorage.getItem("authToken"); // Check if user is authenticated

  return (
    <header className="bg-black text-yellow-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold">
          <Link to="/">BlogApp</Link>
        </h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>

          {/* Show Create Blog link only if user is logged in */}
          {isAuthenticated && (
            <Link to="/create" className="hover:text-yellow-300">Create Blog</Link>
          )}

          {/* Show Login and Register links only if user is NOT logged in */}
          {!isAuthenticated && (
            <>
              <Link to="/login" className="hover:text-yellow-300">Login</Link>
              <Link to="/register" className="hover:text-yellow-300">Register</Link>
            </>
          )}

          {/* Show Logout button only if user is logged in */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

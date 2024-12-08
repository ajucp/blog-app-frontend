import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog"; // Import CreateBlog page
import BlogDetails from "./pages/BlogDetails"; // Import BlogDetails page
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-yellow-500 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateBlog />} /> {/* Create blog route */}
            <Route path="/blogs/details/:id" element={<BlogDetails />} /> {/* Single blog route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

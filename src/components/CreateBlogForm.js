import React, { useState } from 'react';

const CreateBlogForm = ({ title, content, onSubmit }) => {
  const [formTitle, setFormTitle] = useState(title || '');
  const [formContent, setFormContent] = useState(content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: formTitle, content: formContent });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <input
        type="text"
        placeholder="Blog Title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
        required
      />
      <textarea
        placeholder="Blog Content"
        value={formContent}
        onChange={(e) => setFormContent(e.target.value)}
        className="w-full p-3 mb-4 bg-gray-700 text-yellow-500 rounded"
        rows="6"
        required
      />
      <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded">
        {title ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default CreateBlogForm;

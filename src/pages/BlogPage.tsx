import React, { useState } from "react";
import { blogs, Blog } from "../utils/Blogdata";

interface Comment {
  id: number;
  text: string;
  timestamp: string;
}

const BlogPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Default: show the newest blog
  const [selectedBlog, setSelectedBlog] = useState<Blog>(blogs[0]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      });
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, timestamp },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="py-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Blog Content (3/4) */}
          <div className="lg:col-span-3">
            {/* Header with Image and Topic */}
            <div className="mb-12">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h1 className="text-4xl font-bold text-[#3c405b] mt-6 text-center">
                {selectedBlog.title}
              </h1>
              <p className="text-center text-gray-500 mt-2">
                {selectedBlog.date} • 👍 {selectedBlog.reactions} • 💬{" "}
                {selectedBlog.comments}
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {selectedBlog.description}
              </p>
            </div>

            {/* Comments */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-[#3c405b] mb-4">
                Comments
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {comment.timestamp}
                    </p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommentSubmit} className="mt-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c405b]"
                  rows={4}
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-[#3c405b] text-white rounded-full hover:bg-[#2E3453] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - All Blogs (1/4) */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-[#3c405b] mb-6">
              All Blogs
            </h2>
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer mb-6 ${selectedBlog.id === blog.id ? "ring-2 ring-[#3c405b]" : ""
                    }`}
                  onClick={() => {
                    setSelectedBlog(blog);
                    setComments([]); // reset comments per blog (optional)
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#3c405b]">{blog.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                    <div className="flex justify-between text-sm text-gray-600 mt-3">
                      <span>👍 {blog.reactions}</span>
                      <span>💬 {blog.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

interface Comment {
  id: number;
  text: string;
  timestamp: string;
}

const BlogPage: React.FC = () => {
  // const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      setComments([...comments, { id: Date.now(), text: newComment, timestamp }]);
      setNewComment("");
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with Image and Topic */}
        <div className="mb-12">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Blog Header"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h1 className="text-4xl font-bold text-[#3c405b] mt-6 text-center">
            Latest Blog Topic
          </h1>
        </div>

        {/* Description Section (3/4 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-700 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit.
            </p>
          </div>

          {/* Comment Section (1/4 width) */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-[#3c405b] mb-4">Comments</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">{comment.text}</p>
                  <p className="text-sm text-gray-500 mt-2">{comment.timestamp}</p>
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

      </div>
    </div>
  );
};

export default BlogPage;
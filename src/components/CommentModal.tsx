import React, { useState } from "react";
import { X, Send } from "lucide-react"; // icons

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  if (!isOpen) return null; // don't render when closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Comment:", comment);
    // 👉 here you can call API to save comment
    setEmail("");
    setComment("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-md p-6 relative">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h3 className="text-xl font-bold text-[#3c405b] dark:text-white mb-4">
          Share Your Comment
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3c405b] focus:outline-none"
          />

          {/* Comment */}
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3c405b] focus:outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#3c405b] text-white py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Submit <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;

import React, { useState } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react"; // icons

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Email:", email, "Comment:", comment);

    // Clear fields
    setEmail("");
    setComment("");

    // Show success
    setSuccessMessage("✅ Your comment has been submitted successfully!");
    setLoading(false);

    // Auto-hide success after 3s
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-md p-6 relative">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          disabled={loading}
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
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3c405b] focus:outline-none disabled:opacity-50"
          />

          {/* Comment */}
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3c405b] focus:outline-none disabled:opacity-50"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#3c405b] text-white py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Submitting...
              </>
            ) : (
              <>
                Submit <Send size={18} />
              </>
            )}
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
            <CheckCircle size={18} /> {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentModal;

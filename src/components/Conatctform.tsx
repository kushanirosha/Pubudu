import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = {
      access_key: "5c2b5864-f170-46cf-b16f-2dd504234daf", //b9bf4eb1-37a2-458f-81bf-11255f5b2da6
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`transition-all duration-1000 opacity-100 translate-x-0`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
      >
        <h3 className="text-2xl font-bold text-[#3c405b] dark:text-white mb-6">
          Send a Message
        </h3>

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-600 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            placeholder="What's this about?"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-[#2E3453] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>

        {/* Status Message */}
        {status === "success" && (
          <p className="mt-4 text-green-600 font-medium text-center">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

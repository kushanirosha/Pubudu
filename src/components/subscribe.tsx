import React, { useState } from "react";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    // ✅ handle backend / API request here
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2E3453]">
          Subscribe to My Newsletter
        </h2>
        <p className="mt-3 text-[#3c405b]">
          Get the latest updates, projects, and design insights delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-[#2E3453]"
            required
          />
          <button
            type="submit"
            className="bg-[#2E3453] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;

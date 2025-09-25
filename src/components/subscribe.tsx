import React, { useState } from "react";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5c2b5864-f170-46cf-b16f-2dd504234daf", //b9bf4eb1-37a2-458f-81bf-11255f5b2da6
          subject: "New Newsletter Subscription",
          email: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("🎉 Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="bg-[#2E3453] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-lg font-medium text-green-600">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;

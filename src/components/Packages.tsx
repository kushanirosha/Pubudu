import React, { useState } from "react";

interface Package {
  id: number;
  title: string;
  description: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: "Social Media Post Design",
    description: "5 custom graphics optimized for Instagram & Facebook",
  },
  {
    id: 2,
    title: "Google Ad Banner Design",
    description: "2 static ad banners (3 common sizes)",
  },
  {
    id: 3,
    title: "Thumbnail Design",
    description: "3 eye-catching YouTube/social media thumbnails",
  },
  {
    id: 4,
    title: "Leaflet Design",
    description: "1 single-sided leaflet design",
  },
  {
    id: 5,
    title: "Logo Design",
    description: "1 primary logo + 2 variations (sub-mark & icon)",
  },
  {
    id: 6,
    title: "Brand Kit Design",
    description: "Color palette, typography & basic brand guide",
  },
  {
    id: 7,
    title: "Presentation Design",
    description: "10 slides for business or pitch deck",
  },
  {
    id: 8,
    title: "Animation GIFs",
    description: "3 short looping GIFs for social media",
  },
  {
    id: 9,
    title: "Video Creation",
    description: "1 edited promo/explainer video (up to 60s)",
  },
  {
    id: 10,
    title: "Animation Video",
    description: "1 animated video (up to 30s)",
  },
  {
    id: 11,
    title: "Website Development",
    description: "5-page responsive website design & development",
  },
];

const QuotationPage: React.FC = () => {
  const [order, setOrder] = useState<{ id: number; title: string; qty: number }[]>([]);

  const addToOrder = (pkg: Package, qty: number) => {
    if (qty <= 0) return;
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === pkg.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pkg.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { id: pkg.id, title: pkg.title, qty }];
    });
  };

  const removeItem = (id: number) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c405b] mb-2">Get Your Quotation</h2>
          <p className="text-lg text-gray-600">
            Choose the package you want and place your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left side packages */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              let qtyInput = 0;
              return (
                <div
                  key={pkg.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[#3c405b] mb-2">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      className="w-16 border rounded-lg px-2 py-1 text-sm"
                      onChange={(e) => (qtyInput = parseInt(e.target.value))}
                    />
                    <button
                      onClick={() => addToOrder(pkg, qtyInput)}
                      className="bg-[#3c405b] text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      Pick
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#3c405b] mb-4">Place Order</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <hr />

              <h4 className="text-md font-semibold text-gray-700">Order Details</h4>
              <div className="space-y-2">
                {order.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <span className="text-sm font-medium">{item.title}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">x{item.qty}</span>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700 text-xs"
                        onClick={() => removeItem(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
                {order.length === 0 && (
                  <p className="text-sm text-gray-500">No items selected yet</p>
                )}
              </div>

              <textarea
                placeholder="Write here something..."
                className="w-full border rounded-lg px-3 py-2 text-sm"
                rows={3}
              />

              <button
                type="submit"
                className="w-full bg-[#3c405b] text-white py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
              >
                Request Quotation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationPage;

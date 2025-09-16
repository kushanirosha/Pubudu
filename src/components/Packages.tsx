import React, { useState } from "react";

interface Package {
  id: number;
  title: string;
  description: string;
}

const packages: Package[] = [
  { id: 1, title: "Social Media Post Design", description: "5 custom graphics optimized for Instagram & Facebook" },
  { id: 2, title: "Google Ad Banner Design", description: "2 static ad banners (3 common sizes)" },
  { id: 3, title: "Thumbnail Design", description: "3 eye-catching YouTube/social media thumbnails" },
  { id: 4, title: "Leaflet Design", description: "1 single-sided leaflet design" },
  { id: 5, title: "Logo Design", description: "1 primary logo + 2 variations (sub-mark & icon)" },
  { id: 6, title: "Brand Kit Design", description: "Color palette, typography & basic brand guide" },
  { id: 7, title: "Presentation Design", description: "10 slides for business or pitch deck" },
  { id: 8, title: "Animation GIFs", description: "3 short looping GIFs for social media" },
  { id: 9, title: "Video Creation", description: "1 edited promo/explainer video (up to 60s)" },
  { id: 10, title: "Animation Video", description: "1 animated video (up to 30s)" },
  { id: 11, title: "Website Development", description: "5-page responsive website design & development" },
  { id: 12, title: "Package Design", description: "" },
  { id: 13, title: "Product Shoot", description: "With Modle or without Model" },
  { id: 14, title: "SEO", description: "" },
  { id: 15, title: "Social Media Hedling", description: "" },
  { id: 16, title: "UI?UX Design", description: "" },
];

const QuotationPage: React.FC = () => {
  const [order, setOrder] = useState<{ id: number; title: string; qty: number }[]>([]);
  const [alert, setAlert] = useState<string | null>(null);

  const addToOrder = (pkg: Package, qty: number) => {
    if (qty <= 0 || isNaN(qty)) {
      setAlert("Please enter a valid quantity before selecting a package.");
      return;
    }

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
    <div className="bg-gray-100 relative">
      <section className="pb-20 pt-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-2">Get Your Quotation</h2>
            <p className="text-lg text-gray-600">
              Choose the package you want and place your order
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left side packages */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pr-5 lg:border-r-4 lg:border-gray-500">
              {packages.map((pkg) => {
                let qtyInput = 0;
                return (
                  <div
                    key={pkg.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-[#3c405b] mb-2">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        placeholder="0"
                        className="w-16 border rounded-lg px-2 py-1 text-sm"
                        onChange={(e) => (qtyInput = parseInt(e.target.value))}
                      />
                      <button
                        onClick={() => addToOrder(pkg, qtyInput)}
                        className="bg-[#3c405b] text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right side form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 border-y-2 h-fit">
              <h3 className="text-xl font-semibold text-[#3c405b] mb-4">Place Order</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
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
                        <span className="text-sm text-gray-600">
                          Quantity: {item.qty}
                        </span>
                        <button
                          type="button"
                          className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-1 text-xs"
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

                 <hr />

                <input
                  type="tel"
                  placeholder="Asstimate Budjet"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                />

                <textarea
                  placeholder="Write here something..."
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                  rows={3}
                />

                <button
                  type="submit"
                  className="w-full bg-[#3c405b] text-white py-2 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Request Quotation
                </button>
                <p className="text-sm text-gray-500">
                  Note: We will send the quotation within 24 hours of receiving
                  your request. The reply will be sent to the email address you
                  provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Popup */}
      {alert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <p className="text-gray-800 font-medium">{alert}</p>
            <button
              onClick={() => setAlert(null)}
              className="mt-4 bg-[#3c405b] text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationPage;

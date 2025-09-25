import React, { useState } from "react";

interface Package {
  id: number;
  title: string;
  description: string;
}

const packages: Package[] = [
  { id: 1, title: "Social Media Post Design", description: "Select the design quntity that you need" },
  { id: 2, title: "Google Ad Banner Design", description: "Select the design quntity that you need" },
  { id: 3, title: "Thumbnail Design", description: "Select the channel and design quntity" },
  { id: 4, title: "Leaflet Design", description: "Select the pages and design quntity" },
  { id: 5, title: "Logo Design", description: "A professional logo package including 1 primary logo and 2 variations (sub-mark & icon)." },
  { id: 6, title: "Brand Kit Design", description: "A mini brand identity pack including color palette, typography, and basic brand guidelines." },
  { id: 7, title: "Presentation Design", description: "Custom-designed slides. Please specify the number of slides required." },
  { id: 8, title: "Animation GIFs", description: "3 short looping animated GIFs tailored for social media or website use." },
  { id: 9, title: "Video Creation", description: "A professionally edited promo or explainer video (up to 60 seconds)." },
  { id: 10, title: "Animation Video", description: "A high-quality animated video (up to 30 seconds) with engaging visuals." },
  { id: 11, title: "Website Development", description: "A modern, fully responsive website tailored to your business needs." },
  { id: 12, title: "Package Design", description: "Custom packaging design tailored to your product. Please specify quantity." },
  { id: 13, title: "Product Shoot", description: "Professional product photography with or without models." },
  { id: 14, title: "SEO", description: "Search Engine Optimization services to improve visibility and ranking on Google." },
  { id: 15, title: "Social Media Handling", description: "Complete management of your social media accounts including posting and engagement." },
  { id: 16, title: "UI/UX Design", description: "User interface and experience design for web and mobile applications." },
];

interface OrderItem {
  id: number;
  title: string;
  qty: number;
  details?: string;
}

interface PackageCardProps {
  pkg: Package;
  addToOrder: (pkg: Package, qty: number, details?: string) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, addToOrder }) => {
  const [inputs, setInputs] = useState<any>({});

  const handleInputChange = (field: string, value: number) => {
    setInputs((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSelectClick = () => {
    let totalQty = 0;
    let details = "";

    if (pkg.id === 2) {
      Object.entries(inputs).forEach(([size, val]) => {
        if (val > 0) {
          totalQty += Number(val);
          details += `${size}: ${val}, `;
        }
      });
    } else if (pkg.id === 3 || pkg.id === 4) {
      Object.entries(inputs).forEach(([key, val]) => {
        if (val > 0) {
          totalQty += Number(val);
          details += `${key}: ${val}, `;
        }
      });
    } else {
      totalQty = Number(inputs.qty) || 0;
    }

    if (details.endsWith(", ")) {
      details = details.slice(0, -2);
    }

    addToOrder(pkg, totalQty, details || undefined);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-[#3c405b] mb-2">{pkg.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
      </div>

      {/* Inputs */}
      {pkg.id === 1 && (
        <select
          className="border rounded-lg px-2 py-1 text-sm w-full mb-2"
          onChange={(e) => handleInputChange("qty", parseInt(e.target.value))}
        >
          <option value={0}>Select Quantity</option>
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
          <option value={10}>10</option>
          <option value={99}>Above 10</option>
        </select>
      )}

      {pkg.id === 2 && (
        <div className="space-y-2 mb-2">
          {["300x250", "336x280", "728x90", "300x600", "160x600", "320x100"].map((size) => (
            <div key={size} className="flex items-center justify-between">
              <span className="text-xs text-gray-600">{size}</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                className="w-16 border rounded-lg px-2 py-1 text-sm"
                onChange={(e) => handleInputChange(size, parseInt(e.target.value))}
              />
            </div>
          ))}
        </div>
      )}

      {pkg.id === 3 && (
        <div className="space-y-2 mb-2">
          {["YouTube", "TikTok"].map((channel) => (
            <div key={channel} className="flex items-center justify-between">
              <span className="text-xs text-gray-600">{channel}</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                className="w-16 border rounded-lg px-2 py-1 text-sm"
                onChange={(e) => handleInputChange(channel, parseInt(e.target.value))}
              />
            </div>
          ))}
        </div>
      )}

      {pkg.id === 4 && (
        <div className="space-y-2 mb-2">
          {["One Side", "Two Sides", "More"].map((type) => (
            <div key={type} className="flex items-center justify-between">
              <span className="text-xs text-gray-600">{type}</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                className="w-16 border rounded-lg px-2 py-1 text-sm"
                onChange={(e) => handleInputChange(type, parseInt(e.target.value))}
              />
            </div>
          ))}
        </div>
      )}

      {!([1, 2, 3, 4].includes(pkg.id)) && (
        <input
          type="number"
          min="1"
          placeholder="0"
          className="w-16 border rounded-lg px-2 py-1 text-sm mb-2"
          onChange={(e) => handleInputChange("qty", parseInt(e.target.value))}
        />
      )}

      <button
        onClick={handleSelectClick}
        className="bg-[#3c405b] text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        Select
      </button>
    </div>
  );
};

const QuotationPage: React.FC = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [alert, setAlert] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(100);
  const [loading, setLoading] = useState(false);

  // Web3Forms Access Key
  const WEB3FORMS_KEY = "b9bf4eb1-37a2-458f-81bf-11255f5b2da6";

  const addToOrder = (pkg: Package, qty: number, details?: string) => {
    if (qty <= 0 || isNaN(qty)) {
      setAlert("Please enter a valid quantity before selecting a package.");
      return;
    }

    setOrder((prev) => {
      const existing = prev.find((item) => item.id === pkg.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pkg.id
            ? { ...item, qty: item.qty + qty, details: details || item.details }
            : item
        );
      }
      return [...prev, { id: pkg.id, title: pkg.title, qty, details }];
    });
  };

  const removeItem = (id: number) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Append extra order details
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append(
      "order_details",
      JSON.stringify(order.map((o) => ({ title: o.title, qty: o.qty, details: o.details })))
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setProgress(100);

        let timeLeft = 5;
        const interval = setInterval(() => {
          timeLeft--;
          setProgress((prev) => prev - 20);
          if (timeLeft <= 0) {
            clearInterval(interval);
            setSuccess(false);
          }
        }, 1000);

        form.reset();
        setOrder([]);
      } else {
        setAlert("Failed to send. Try again later.");
      }
    } catch (error) {
      setAlert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 relative">
      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c405b] mb-2">Get Your Quotation</h2>
          <p className="text-lg text-gray-600">Choose the package you want and place your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left side packages */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pr-5 lg:border-r-4 lg:border-gray-500">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} addToOrder={addToOrder} />
            ))}
          </div>

          {/* Right side form */}
          <div className="bg-white rounded-xl shadow-2xl p-6 border-y-2 h-fit">
            <h3 className="text-xl font-semibold text-[#3c405b] mb-4">Place Order</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required className="w-full border rounded-lg px-3 py-2 text-sm" />
              <input type="email" name="email" placeholder="Email" required className="w-full border rounded-lg px-3 py-2 text-sm" />
              <input type="tel" name="phone" placeholder="Contact Number" required className="w-full border rounded-lg px-3 py-2 text-sm" />

              <hr />

              <h4 className="text-md font-semibold text-gray-700">Order Details</h4>
              <div className="space-y-2">
                {order.map((item) => (
                  <div key={item.id} className="flex justify-between items-start bg-gray-100 px-3 py-2 rounded-lg">
                    <div>
                      <span className="block text-sm font-medium">{item.title}</span>
                      <span className="block text-xs text-gray-600">Quantity: {item.qty}</span>
                      {item.details && <span className="block text-xs text-gray-500">{item.details}</span>}
                    </div>
                    <button
                      type="button"
                      className="bg-red-100 text-red-600 hover:bg-red-200 rounded-full p-1 text-xs h-fit"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {order.length === 0 && <p className="text-sm text-gray-500">No items selected yet</p>}
              </div>

              <hr />

              <input type="tel" name="budget" placeholder="Estimate Budget" className="w-full border rounded-lg px-3 py-2 text-sm" />
              <textarea name="message" placeholder="Write here something..." className="w-full border rounded-lg px-3 py-2 text-sm" rows={3} />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3c405b] text-white py-2 rounded-lg hover:bg-gray-700 transition"
              >
                {loading ? "Submitting..." : "Request Quotation"}
              </button>
            </form>
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
              className="mt-4 bg-[#3c405b] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg text-center max-w-sm relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-1 bg-green-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[#3c405b] mb-2">Success 🎉</h4>
              <p className="text-gray-700">We will send the quotation within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationPage;

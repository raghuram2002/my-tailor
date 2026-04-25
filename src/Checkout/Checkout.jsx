import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import { useCart } from "../context/CartContext";
import { FaCheckCircle, FaCreditCard, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";

const Checkout = () => {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errors, setErrors] = useState({});

  const shipping = cartTotal >= 2999 ? 0 : 99;
  const total = cartTotal + shipping;

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.pincode.trim()) newErrors.pincode = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (validate()) {
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex-grow flex items-center justify-center pt-20 text-center px-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">No items to checkout</h1>
            <Link to="/women" className="text-pink-600 hover:underline font-semibold">
              ← Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex-grow flex items-center justify-center pt-20 px-4">
          <div className="text-center max-w-md" style={{ animation: "scaleIn 0.5s ease" }}>
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Thank you for your order. Your custom-tailored outfit is being prepared with love.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Order ID: <span className="font-semibold text-[#3D1255]">
                #ST{Date.now().toString().slice(-8)}
              </span>
            </p>
            <div className="bg-purple-50 rounded-xl p-4 mb-6 text-left text-sm space-y-1 text-gray-600">
              <p>📧 Confirmation email sent to <strong>{form.email || "your email"}</strong></p>
              <p>📐 Our tailors will start working on your garment</p>
              <p>🚚 Estimated delivery: 7-10 working days</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate("/women")}
                className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
        <Footer />
        <style>{`
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
      errors[field] ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-pink-300 focus:border-pink-400"
    }`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 w-full flex-grow">
        <div className="py-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Checkout</h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-8">
          {/* Shipping Details */}
          <div className="flex-grow space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputClass("name")} placeholder="Enter full name" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass("email")} placeholder="your@email.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputClass("phone")} placeholder="+91 XXXXX XXXXX" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                  <input type="text" value={form.pincode} onChange={(e) => handleChange("pincode", e.target.value)} className={inputClass("pincode")} placeholder="530001" />
                  {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea value={form.address} onChange={(e) => handleChange("address", e.target.value)} className={inputClass("address")} rows="2" placeholder="House/Flat No., Street, Locality" />
                  {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" value={form.city} onChange={(e) => handleChange("city", e.target.value)} className={inputClass("city")} placeholder="City" />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input type="text" value={form.state} onChange={(e) => handleChange("state", e.target.value)} className={inputClass("state")} placeholder="State" />
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { key: "cod", icon: <FaMoneyBillWave className="text-green-600" />, label: "Cash on Delivery", desc: "Pay when your order arrives" },
                  { key: "upi", icon: <FaMobileAlt className="text-blue-600" />, label: "UPI Payment", desc: "GPay, PhonePe, Paytm" },
                  { key: "card", icon: <FaCreditCard className="text-purple-600" />, label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                ].map((pm) => (
                  <label
                    key={pm.key}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                      paymentMethod === pm.key
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === pm.key}
                      onChange={() => setPaymentMethod(pm.key)}
                      className="accent-pink-600"
                    />
                    <div className="text-xl">{pm.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{pm.label}</p>
                      <p className="text-xs text-gray-500">{pm.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">Qty: {quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-800 flex-shrink-0">
                      ₹{(product.price * quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="my-3" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tailoring</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-700 hover:to-pink-600 hover:shadow-xl transition-all"
              >
                Place Order — ₹{total.toLocaleString()}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                🔒 Your payment information is secure
              </p>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import { useCart } from "../context/CartContext";
import { FaTrashAlt, FaMinus, FaPlus, FaShoppingBag, FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 w-full flex-grow">
        {/* Header */}
        <div className="py-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 rounded-full bg-pink-50 flex items-center justify-center mb-6">
              <FaShoppingBag className="text-3xl text-pink-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 max-w-sm mb-6 text-sm">
              Looks like you haven't added any items yet. Browse our beautiful collection and find something you love!
            </p>
            <Link
              to="/women"
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-grow space-y-4">
              {cartItems.map(({ product, measurements, quantity }) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                >
                  {/* Image */}
                  <div className="w-full sm:w-28 h-36 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {product.fabric} • {product.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-gray-400 hover:text-red-500 transition p-1"
                      >
                        <FaTrashAlt className="text-sm" />
                      </button>
                    </div>

                    {/* Measurements */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {Object.entries(measurements).map(([key, val]) => (
                        <span key={key} className="text-xs bg-purple-50 text-[#3D1255] px-2 py-0.5 rounded-full">
                          {key}: {val}"
                        </span>
                      ))}
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="px-4 py-1.5 text-sm font-semibold border-x border-gray-200">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-bold text-[#3D1255] text-lg">
                        ₹{(product.price * quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/women"
                className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 font-medium mt-4"
              >
                <FaArrowLeft className="text-xs" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tailoring Charges</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={cartTotal >= 2999 ? "text-green-600 font-medium" : ""}>
                      {cartTotal >= 2999 ? "Free" : "₹99"}
                    </span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{(cartTotal + (cartTotal >= 2999 ? 0 : 99)).toLocaleString()}</span>
                  </div>
                </div>

                {cartTotal < 2999 && (
                  <p className="text-xs text-gray-500 mt-3 bg-yellow-50 p-2 rounded-lg">
                    💡 Add ₹{(2999 - cartTotal).toLocaleString()} more for free shipping!
                  </p>
                )}

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-700 hover:to-pink-600 hover:shadow-xl transition-all"
                >
                  Proceed to Checkout
                </button>

                <div className="mt-4 text-center text-xs text-gray-400 space-y-1">
                  <p>🔒 Secure checkout</p>
                  <p>📐 Custom tailored to your measurements</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

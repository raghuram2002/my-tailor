import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import MeasurementModal from "../components/MeasurementModal";
import ProductCard from "./ProductCard";
import { getProductById, getProductsByCategory, categoryInfo } from "../data/productsData";
import { useCart } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaCheckCircle } from "react-icons/fa";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(productId);
  const info = categoryInfo[category];

  const [modalOpen, setModalOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  if (!product || !info) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <Link to="/women" className="text-pink-600 hover:underline font-semibold">
              ← Back to Women's Collection
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.3;
    for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
    if (hasHalf) stars.push(<FaStarHalfAlt key="h" className="text-yellow-400" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`e${stars.length}`} className="text-yellow-400" />);
    return stars;
  };

  const handleMeasurementSubmit = (measurements) => {
    addToCart(product, measurements);
    setModalOpen(false);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Success Toast */}
      {addedToast && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
          style={{ animation: "slideUp 0.4s ease" }}
        >
          <FaCheckCircle />
          <span className="font-medium text-sm">Added to cart!</span>
        </div>
      )}

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 py-4 flex-wrap">
          <Link to="/" className="hover:text-[#3D1255] transition">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/women" className="hover:text-[#3D1255] transition">Women</Link>
          <span className="mx-2">›</span>
          <Link to={`/women/${category}`} className="hover:text-[#3D1255] transition">{info.title}</Link>
          <span className="mx-2">›</span>
          <span className="text-[#3D1255] font-semibold">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] sm:aspect-auto sm:h-[500px] lg:h-auto">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-semibold">
              {info.title}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-5">
              <span className="text-3xl font-bold text-[#3D1255]">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>

            {/* Description */}
            <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: "Fabric", value: product.fabric },
                { label: "Color", value: product.color },
                { label: "Occasion", value: product.occasion },
                { label: "Category", value: info.title },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-700 hover:to-pink-600 hover:shadow-xl transition-all text-sm sm:text-base"
              >
                <FaShoppingBag />
                Add to Cart
              </button>
              <button
                onClick={() => { setModalOpen(true); }}
                className="flex-1 py-3 border-2 border-[#3D1255] text-[#3D1255] font-semibold rounded-xl hover:bg-[#3D1255] hover:text-white transition-all text-sm sm:text-base"
              >
                Buy Now
              </button>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>🚚</span> <span>Free shipping on orders above ₹2,999</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📐</span> <span>Custom tailored to your measurements</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>↩️</span> <span>Easy 7-day returns & exchanges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[#3D1255] mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} categorySlug={category} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Measurement Modal */}
      <MeasurementModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleMeasurementSubmit}
        productName={product.name}
      />

      <Footer />

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;

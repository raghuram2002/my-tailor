import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product, categorySlug }) => {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.3;
    for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} className="text-yellow-400" />);
    if (hasHalf) stars.push(<FaStarHalfAlt key="h" className="text-yellow-400" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`e${stars.length}`} className="text-yellow-400" />);
    return stars;
  };

  return (
    <div
      onClick={() => navigate(`/women/${categorySlug}/${product.id}`)}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.discount}% OFF
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white/90 backdrop-blur-sm text-[#3D1255] font-semibold py-2 rounded-lg text-sm hover:bg-white transition">
            View Details
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-[#3D1255] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-bold text-[#3D1255]">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.fabric}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{product.occasion}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

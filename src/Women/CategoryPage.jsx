import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import ProductCard from "./ProductCard";
import { getProductsByCategory, categoryInfo } from "../data/productsData";
import { FaFilter, FaTimes } from "react-icons/fa";

const CategoryPage = () => {
  const { category } = useParams();
  const products = getProductsByCategory(category);
  const info = categoryInfo[category];

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState("All");
  const [selectedOccasion, setSelectedOccasion] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  if (!info) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <TopNav />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
            <Link to="/women" className="text-pink-600 hover:underline font-semibold">
              ← Back to Women's Collection
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const fabrics = ["All", ...new Set(products.map((p) => p.fabric))];
  const occasions = ["All", ...new Set(products.map((p) => p.occasion))];

  let filtered = products.filter((p) => {
    if (selectedFabric !== "All" && p.fabric !== selectedFabric) return false;
    if (selectedOccasion !== "All" && p.occasion !== selectedOccasion) return false;
    return true;
  });

  if (sortBy === "priceLow") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[45vh] mt-20 overflow-hidden">
        <img
          src={info.heroImage}
          alt={info.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#C5A46D] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-2">
            Women's Collection
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {info.title}
          </h1>
          <p className="mt-3 text-gray-200 text-sm sm:text-base max-w-lg">
            {info.tagline}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-[#3D1255] transition">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/women" className="hover:text-[#3D1255] transition">Women</Link>
          <span className="mx-2">›</span>
          <span className="text-[#3D1255] font-semibold">{info.title}</span>
        </nav>
      </div>

      {/* Category Description (special for sarees) */}
      {category === "sarees" && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
            "{info.description}"
          </p>
          <div className="w-16 h-0.5 bg-[#C5A46D] mx-auto mt-4" />
        </div>
      )}

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-[#3D1255] hover:text-[#3D1255] transition md:hidden"
            >
              <FaFilter className="text-xs" />
              Filters
            </button>
            <p className="text-sm text-gray-500">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#3D1255]"
          >
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 flex gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl shadow-md p-5 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-[#3D1255] uppercase tracking-wide mb-3">Fabric</h4>
              <div className="space-y-2">
                {fabrics.map((f) => (
                  <label key={f} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#3D1255] transition">
                    <input
                      type="radio"
                      name="fabric"
                      checked={selectedFabric === f}
                      onChange={() => setSelectedFabric(f)}
                      className="accent-pink-600"
                    />
                    {f}
                  </label>
                ))}
              </div>
            </div>
            <hr />
            <div>
              <h4 className="text-sm font-bold text-[#3D1255] uppercase tracking-wide mb-3">Occasion</h4>
              <div className="space-y-2">
                {occasions.map((o) => (
                  <label key={o} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#3D1255] transition">
                    <input
                      type="radio"
                      name="occasion"
                      checked={selectedOccasion === o}
                      onChange={() => setSelectedOccasion(o)}
                      className="accent-pink-600"
                    />
                    {o}
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={() => { setSelectedFabric("All"); setSelectedOccasion("All"); }}
              className="w-full text-sm text-pink-600 hover:text-pink-700 font-medium transition"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#3D1255]">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <FaTimes className="text-gray-500 text-lg" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#3D1255] uppercase tracking-wide mb-3">Fabric</h4>
                  <div className="space-y-2">
                    {fabrics.map((f) => (
                      <label key={f} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="fabric-m" checked={selectedFabric === f} onChange={() => setSelectedFabric(f)} className="accent-pink-600" />
                        {f}
                      </label>
                    ))}
                  </div>
                </div>
                <hr />
                <div>
                  <h4 className="text-sm font-bold text-[#3D1255] uppercase tracking-wide mb-3">Occasion</h4>
                  <div className="space-y-2">
                    {occasions.map((o) => (
                      <label key={o} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="occasion-m" checked={selectedOccasion === o} onChange={() => setSelectedOccasion(o)} className="accent-pink-600" />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => { setSelectedFabric("All"); setSelectedOccasion("All"); }}
                  className="w-full text-sm text-pink-600 hover:text-pink-700 font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-grow">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products match your filters.</p>
              <button
                onClick={() => { setSelectedFabric("All"); setSelectedOccasion("All"); }}
                className="mt-4 text-pink-600 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} categorySlug={category} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;

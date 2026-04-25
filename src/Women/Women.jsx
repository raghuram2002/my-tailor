import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";
import { categoryInfo } from "../data/productsData";

import blouseImg from "../assets/blouseImg.jpg";
import kurtaImg from "../assets/kurtaImg.jpg";
import salwarImg from "../assets/salwarImg.jpg";
import lehengaImg from "../assets/lehengaImg.jpg";
import topsImg from "../assets/topsImg.jpg";
import skirtImg from "../assets/skirtImg.jpg";
import heroCouple from "../assets/hero_couple.jpg";

const categoryCards = [
  { key: "sarees", label: "Sarees", image: "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { key: "kurtis", label: "Kurtis", image: kurtaImg },
  { key: "blouse", label: "Blouse", image: blouseImg },
  { key: "salwar", label: "Salwar Kameez", image: salwarImg },
  { key: "lehenga", label: "Lehenga", image: lehengaImg },
  { key: "tops", label: "Tops", image: topsImg },
  { key: "skirt", label: "Skirts", image: skirtImg },
];

const Women = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] mt-20 overflow-hidden">
        <img
          src={heroCouple}
          alt="Women's Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#C5A46D] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-3 animate-fade-in">
            Exclusive Collection
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Discover Timeless <br /> Elegance
          </h1>
          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl">
            Explore our handpicked collection of women's ethnic wear — crafted with love, tailored to perfection.
          </p>
          <button
            onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-600 to-[#C5A46D] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <p className="text-[#C5A46D] uppercase tracking-widest text-xs font-semibold mb-2">
            Browse by Category
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D1255]">
            Our Collections
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-[#C5A46D] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryCards.map((cat) => (
            <div
              key={cat.key}
              onClick={() => navigate(`/women/${cat.key}`)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {cat.label}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {categoryInfo[cat.key]?.tagline}
                </p>
                <div className="mt-2 flex items-center text-[#C5A46D] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-[#3D1255] to-[#2E1F47] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Custom Tailored, Just for You
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Every outfit is stitched to your exact measurements. Share your sizing, and our expert tailors will craft a garment that fits like a dream.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 px-8 py-3 border-2 border-[#C5A46D] text-[#C5A46D] font-semibold rounded-full hover:bg-[#C5A46D] hover:text-white transition-all duration-300"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Women;

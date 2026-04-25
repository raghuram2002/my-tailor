import React, { useRef } from "react";
import { 
  FaUserTie, FaTshirt, FaHome, FaGlobe, FaSmile, 
  FaCertificate, FaBox, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Replace with your actual images
import blouseImg from "../../assets/blouseImg.jpg";
import kurtiImg from "../../assets/kurtaImg.jpg";
import salwarImg from "../../assets/salwarImg.jpg";
import lehengaImg from "../../assets/lehengaImg.jpg";
import topsImg from "../../assets/topsImg.jpg";
import skirtImg from "../../assets/skirtImg.jpg";
import HeroImage from "../../assets/heroImg.jpg";

const HeroSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Category data
  const categories = [
    { name: "BLOUSE", image: blouseImg, route: "/blouse" },
    { name: "KURTI", image: kurtiImg, route: "/kurti" },
    { name: "SALWAR KAMEEZ", image: salwarImg, route: "/salwar" },
    { name: "LEHENGA", image: lehengaImg, route: "/lehenga" },
    { name: "TOPS", image: topsImg, route: "/tops" },
    { name: "SKIRT", image: skirtImg, route: "/skirt" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-300 to-white py-12">
      {/* --------- Hero --------- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Custom Tailoring <br /> Made Easy
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
            Personalised tailoring and doorstep delivery <br className="hidden sm:block" />
            for your perfect fit
          </p>

          {/* How it works */}
          <div className="mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <FaUserTie className="mx-auto text-2xl sm:text-3xl md:text-4xl text-[#091057]" />
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">Speak to a Designer</p>
              </div>
              <div>
                <FaTshirt className="mx-auto text-2xl sm:text-3xl md:text-4xl text-[#091057]" />
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">Get Your Garment Custom-Made</p>
              </div>
              <div>
                <FaHome className="mx-auto text-2xl sm:text-3xl md:text-4xl text-[#091057]" />
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">Home Delivery</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm sm:text-lg rounded-lg shadow-md transition">
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:flex-1 flex justify-center mt-6 lg:mt-0">
          <img
            src={HeroImage}
            alt="Fashion Image"
            className="w-full max-w-[300px] hidden md:block sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover"
          />
        </div>
      </div>

      {/* --------- Marquee Section --------- */}
      <div className="bg-[#D6C68E] py-4 mt-10 overflow-hidden relative">
        <div className="flex space-x-60 animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-2xl text-[#3D1255]" />
            <p><span className="font-bold text-[#3D1255]">Shipping</span><br/>Across Globe</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSmile className="text-2xl text-[#3D1255]" />
            <p><span className="font-bold text-[#3D1255]">2 Lac+</span><br/>Happy Customers</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCertificate className="text-2xl text-[#3D1255]" />
            <p><span className="font-bold text-[#3D1255]">Standardised</span><br/>Quality Process</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBox className="text-2xl text-[#3D1255]" />
            <p><span className="font-bold text-[#3D1255]">Order Tracking</span><br/>For all orders*</p>
          </div>
        </div>
      </div>

      {/* --------- Must Have Categories (Carousel) --------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 relative">
        <h2 className="text-center text-2xl font-bold text-[#3D1255] mb-8">
          MUST HAVE CATEGORIES
        </h2>

        {/* Arrows */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight />
        </button>

        {/* Scrollable Categories */}
        <div ref={scrollRef} className="flex space-x-6 overflow-hidden scroll-smooth">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.route)}
              className="flex-shrink-0 w-40 sm:w-48 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-lg shadow-md" 
              />
              <p className="mt-3 text-sm sm:text-base font-bold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

        {/* --------- Featured Styles Section --------- */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
            <h2 className="text-center text-2xl font-bold text-[#3D1255] mb-10">
                TRENDING STYLES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {["Lehenga", "Saree", "Designer Blouse"].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                    <img 
                    src={HeroImage} 
                    alt={item} 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <p className="mt-4 text-lg font-bold text-gray-800">{item}</p>
                    <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
                    Explore Now
                    </button>
                </div>
                ))}
            </div>
        </div>

        {/* --------- Testimonials Section --------- */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
            <h2 className="text-center text-2xl font-bold text-[#3D1255] mb-10">
                WHAT OUR CUSTOMERS SAY
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                { name: "Priya Sharma", review: "The blouse fitting was perfect and the delivery was super quick!" },
                { name: "Ananya Verma", review: "Loved my custom lehenga, the detailing is amazing. Highly recommended!" },
                { name: "Ritika Singh", review: "Best tailoring service, very professional designers and great experience overall." },
                ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                    <p className="text-gray-600 italic">"{t.review}"</p>
                    <h3 className="mt-4 font-bold text-[#3D1255]">{t.name}</h3>
                </div>
                ))}
            </div>
        </div>

        {/* --------- Why Choose Us Section --------- */}
        <div className="bg-[#F9F6F1] py-16 mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-2xl font-bold text-[#3D1255] mb-8">
                WHY CHOOSE US?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                    <FaUserTie className="mx-auto text-4xl text-pink-600" />
                    <h3 className="mt-4 font-semibold text-lg">Expert Designers</h3>
                    <p className="mt-2 text-gray-600 text-sm">Work with professionals who understand your style.</p>
                </div>
                <div>
                    <FaTshirt className="mx-auto text-4xl text-pink-600" />
                    <h3 className="mt-4 font-semibold text-lg">Perfect Fit</h3>
                    <p className="mt-2 text-gray-600 text-sm">Custom tailoring ensures flawless fitting every time.</p>
                </div>
                <div>
                    <FaHome className="mx-auto text-4xl text-pink-600" />
                    <h3 className="mt-4 font-semibold text-lg">Doorstep Delivery</h3>
                    <p className="mt-2 text-gray-600 text-sm">Get your dream outfits delivered straight to your home.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;

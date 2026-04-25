import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import TopNav from "../Home/topNav/TopNav";
import Footer from "../Home/footer/Footer";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[38vh] mt-20 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1487834/pexels-photo-1487834.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#C5A46D] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-2">
            We'd Love to Hear From You
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        <nav className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-[#3D1255] transition">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#3D1255] font-semibold">Contact</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <FaPhoneAlt />, title: "Call Us", detail: "+91 12345 67899", sub: "Mon - Sat, 9am - 7pm", color: "from-pink-500 to-pink-600" },
            { icon: <FaEnvelope />, title: "Email Us", detail: "support@sowmyastailor.com", sub: "Replies within 24 hrs", color: "from-purple-500 to-[#3D1255]" },
            { icon: <FaMapMarkerAlt />, title: "Visit Studio", detail: "Visakhapatnam, India", sub: "Book an appointment", color: "from-[#C5A46D] to-amber-600" },
            { icon: <FaClock />, title: "Working Hours", detail: "9:00 AM - 7:00 PM", sub: "Monday to Saturday", color: "from-teal-500 to-teal-600" },
          ].map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center text-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">
                {card.title}
              </h3>
              <p className="text-gray-700 font-medium text-sm">{card.detail}</p>
              <p className="text-gray-400 text-xs mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Form + Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#3D1255] mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Have questions about our tailoring services or want a custom design? Fill out the form below — we'd love to bring your fashion ideas to life.
            </p>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3" style={{ animation: "slideDown 0.3s ease" }}>
                <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                <p className="text-sm text-green-700 font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition">
                  <option>Select a service</option>
                  <option>Custom Blouse Stitching</option>
                  <option>Saree Draping Consultation</option>
                  <option>Bridal Lehenga Design</option>
                  <option>Alterations & Repairs</option>
                  <option>Bulk / Wholesale Orders</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-700 hover:to-pink-600 hover:shadow-xl transition-all text-sm"
                >
                  Send Message
                </button>
                <a
                  href="https://wa.me/911234567899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Info Sidebar (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-[#3D1255] to-[#2E1F47] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Why Choose Sowmya's Tailoring?</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Expert designers with 15+ years experience",
                  "Custom measurements for the perfect fit",
                  "Premium fabrics handpicked for quality",
                  "Doorstep delivery across India",
                  "Free alterations within 7 days",
                  "2 Lac+ happy customers worldwide",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C5A46D] mt-0.5">✦</span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Hours */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-800 mb-4">Studio Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{item.day}</span>
                    <span className={`font-semibold ${item.time === "Closed" ? "text-red-400" : "text-[#3D1255]"}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-600">
                💡 <strong>Quick response guaranteed!</strong> We typically reply within 2-4 hours during business hours. For urgent queries, reach us via WhatsApp or Call.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import TopNav from "../Home/TopNav/TopNav";
import Footer from "../Home/footer/Footer";

const ContactForm = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNav />

      {/* Contact Form Section */}
      <div className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center bg-pink-50 rounded-xl p-6 order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-pink-600 mb-6 text-center">
              Reach Us Directly
            </h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-pink-600 text-2xl" />
                <div>
                  <p className="text-gray-700 font-medium">+91 12345 67899</p>
                  <p className="text-gray-500 text-sm">
                    Mon - Sat (9am - 7pm)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-pink-600 text-2xl" />
                <div>
                  <p className="text-gray-700 font-medium">
                    support@tailorher.com
                  </p>
                  <p className="text-gray-500 text-sm">
                    Replies within 24 hrs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-pink-600 text-2xl" />
                <div>
                  <p className="text-gray-700 font-medium">Visakhapatnam, India</p>
                  <p className="text-gray-500 text-sm">Visit Our Studio</p>
                </div>
              </div>
            </div>

            {/* Extra Note */}
            <div className="mt-10 text-center text-gray-600 text-sm">
              <p>
                We’ll get back to you as soon as possible. For urgent queries,
                reach us directly via WhatsApp or Call.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-pink-600 mb-3">
              Get in Touch with Us
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions about our tailoring services or want a custom
              design? Fill out the form below — we’d love to bring your fashion
              ideas to life.
            </p>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-md"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;

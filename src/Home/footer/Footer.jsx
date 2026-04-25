import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Sowmya's Tailoring</h2>
            <p className="text-gray-400 text-sm">
              Custom tailoring services designed to make you look and feel your
              best. We deliver modern styles with a traditional touch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-400 text-sm">📍 Visakhapatnam, India</p>
            <p className="text-gray-400 text-sm">📞 +91 1234567899</p>
            <p className="text-gray-400 text-sm">✉️ support@sowmyastailor.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} sowmya'sTailor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

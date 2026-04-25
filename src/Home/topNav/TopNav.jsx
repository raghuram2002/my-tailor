import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/tailoring_logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const linkClass =
    "text-[#2E1F47] font-semibold uppercase hover:text-[#C5A46D] transition-colors duration-200";
  const activeLinkClass =
    "text-[#C5A46D] font-semibold uppercase";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={()=> navigate('/')}
          >
            <img
              className="h-15 w-auto"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Hamburger (mobile only) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#091057] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links (hidden on mobile, visible on md+) */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink
              to="/women"
              className={({ isActive }) => isActive ? activeLinkClass : linkClass}
            >
              Women
            </NavLink>
            <NavLink
              to="/women/sarees"
              className={({ isActive }) => isActive ? activeLinkClass : linkClass}
            >
              Sarees
            </NavLink>
            <NavLink to={'/blog'} className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
              Blog
            </NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-2xl text-[#2E1F47]">
            <IoSearchOutline className="cursor-pointer hover:text-[#C5A46D] transition" />
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingBag className="hover:text-[#C5A46D] transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shows when hamburger is open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg text-center">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLink to="/women" className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Women</NavLink>
            <NavLink to="/women/sarees" className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Sarees</NavLink>
            <NavLink to="/women/kurtis" className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Kurtis</NavLink>
            <NavLink to="/women/lehenga" className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Lehenga</NavLink>
            <NavLink to={'/blog'} className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to={'/contact'} className="block text-[#091057] hover:text-[#C5A46D] py-1" onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink
              to="/cart"
              className="block text-[#091057] hover:text-[#C5A46D] py-1"
              onClick={() => setIsOpen(false)}
            >
              Cart {cartCount > 0 && `(${cartCount})`}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;

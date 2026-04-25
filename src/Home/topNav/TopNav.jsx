import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/tailoring_logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

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
            <a href="#women" className="text-[#2E1F47] font-semibold uppercase hover:text-[#C5A46D]">
              Women
            </a>
            <a href="#sarees" className="text-[#2E1F47] font-semibold uppercase hover:text-[#C5A46D]">
              Sarees
            </a>
            <NavLink to={'/blog'} className="text-[#2E1F47] font-semibold uppercase hover:text-[#C5A46D]">
              Blog
            </NavLink>
            <NavLink to={'/contact'} className="text-[#2E1F47] font-semibold uppercase hover:text-[#C5A46D]">
              Contact
            </NavLink>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-2xl text-[#2E1F47]">
            <IoSearchOutline className="cursor-pointer hover:text-[#C5A46D]" />
            {/* <FaUser className="cursor-pointer hover:text-[#C5A46D]" /> */}
            <FaShoppingBag className="cursor-pointer hover:text-[#C5A46D]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (shows when hamburger is open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg text-center">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#women" className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Women</a>
            <a href="#mens" className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Mens</a>
            <a href="#sarees" className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Sarees</a>
            <a href="#fabrics" className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Fabrics</a>
            <NavLink to={'/blog'} className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to={'/contact'} className="block text-[#091057] hover:text-[#C5A46D]" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;

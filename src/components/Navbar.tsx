
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-playfair font-medium tracking-tight">
          K.KUMAR
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-inter uppercase text-xs tracking-widest transition-all hover:text-gray-500",
                location.pathname === item.path ? "font-medium" : "font-normal"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white pt-24 px-4 z-40 animate-fade-in">
          <div className="flex flex-col space-y-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-inter uppercase text-sm tracking-widest transition-all",
                  location.pathname === item.path ? "font-medium" : "font-normal"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

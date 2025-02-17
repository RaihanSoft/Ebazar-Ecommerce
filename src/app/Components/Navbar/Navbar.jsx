'use client'
import { useState } from "react";
import { ShoppingCart, Heart, Phone } from "lucide-react";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [cartItems, setCartItems] = useState(2);
  const [cartTotal, setCartTotal] = useState(57.0);

  return (
    <div className="bg-white">
      <nav className=" shadow-md p-4 flex justify-between items-center   px-16 ">
        {/* Logo */}
        <div className="text-green-600 font-bold text-xl flex items-center">
          <span className="mr-2">🌱</span> Ecobazar
        </div>


        {/* Search Bar */}
        <div className="flex border rounded-lg overflow-hidden">
          <input type="text" placeholder="Search" className="px-4 py-2" />
          <button className="bg-green-600 text-white px-4">Search</button>
        </div>

        {/* Icons and Contact */}
        <div className="flex items-center gap-6 text-black">
          <Heart className="w-6 h-6 cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
              {cartItems}
            </span>
            <p className="text-sm">Shopping cart: <strong>${cartTotal.toFixed(2)}</strong></p>
          </div>

          <div>
            <button>login</button> / <button>sign up</button>
          </div>

        </div>

      </nav>

      <div className="flex justify-between py-2   px-16 ">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-green-600 font-semibold text-lg">
            Home
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Shop ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Pages ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Blog ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog 2</a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-green-600">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Contact Us
          </a>
        </div>

        {/* Right Side - Phone Icon and Number */}
        <div className="flex items-center space-x-2 text-gray-700">
          <FaPhone className="text-xl" />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
}

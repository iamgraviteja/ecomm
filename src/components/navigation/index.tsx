import React from "react";
import { HeartIcon, ShoppingCart } from "lucide-react";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a
          href="/"
          className="text-gray-800 hover:text-gray-600 font-bold text-xl"
        >
          E-Comm
        </a>
        <a href="/" className="text-gray-800 hover:text-gray-600">
          Home
        </a>
        <a href="/shop" className="text-gray-800 hover:text-gray-600">
          Shop
        </a>
        <a href="/about" className="text-gray-800 hover:text-gray-600">
          About
        </a>
        <a href="/contact" className="text-gray-800 hover:text-gray-600">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2"
        />
        <a href="/wishlist" className="text-gray-800 hover:text-gray-600">
          <HeartIcon size={24} />
        </a>
        <a href="/cart" className="text-gray-800 hover:text-gray-600">
          <ShoppingCart size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

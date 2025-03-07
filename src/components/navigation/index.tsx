import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon, ShoppingCart } from "lucide-react";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-gray-800 hover:text-gray-600 font-bold text-xl"
        >
          E-Comm
        </Link>
        <Link to="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link to="/shop" className="text-gray-800 hover:text-gray-600">
          Shop
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-gray-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-gray-600">
          Contact
        </Link>
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

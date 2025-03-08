import { HeartIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { RootState } from "../../store";

const Navigation: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element && !event.target.closest(".relative")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 p-4 flex justify-between items-center border-b-2 ${
        isDarkMode
          ? "bg-gray-800 shadow-lg border-gray-700"
          : "bg-white shadow-md border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-8">
        <div className="w-48">
          <NavLink
            to="/"
            className={`font-bold text-2xl ${
              isDarkMode
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
            style={{
              textShadow: "2px 2px 0 #000, 4px 4px 0 #555, 6px 6px 0 #aaa",
            }}
          >
            Volt Buy
          </NavLink>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${
                  isDarkMode
                    ? "text-white hover:text-gray-400 border-b-2 border-blue-300"
                    : "text-gray-800 hover:text-gray-600 border-b-2 border-blue-500"
                }`
              : `${
                  isDarkMode
                    ? "text-white hover:text-gray-400"
                    : "text-gray-800 hover:text-gray-600"
                }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? `${
                  isDarkMode
                    ? "text-white hover:text-gray-400 border-b-2 border-blue-300"
                    : "text-gray-800 hover:text-gray-600 border-b-2 border-blue-500"
                }`
              : `${
                  isDarkMode
                    ? "text-white hover:text-gray-400"
                    : "text-gray-800 hover:text-gray-600"
                }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${
                  isDarkMode
                    ? "text-white hover:text-gray-400 border-b-2 border-blue-300"
                    : "text-gray-800 hover:text-gray-600 border-b-2 border-blue-500"
                }`
              : `${
                  isDarkMode
                    ? "text-white hover:text-gray-400"
                    : "text-gray-800 hover:text-gray-600"
                }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${
                  isDarkMode
                    ? "text-white hover:text-gray-400 border-b-2 border-blue-300"
                    : "text-gray-800 hover:text-gray-600 border-b-2 border-blue-500"
                }`
              : `${
                  isDarkMode
                    ? "text-white hover:text-gray-400"
                    : "text-gray-800 hover:text-gray-600"
                }`
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className={`border rounded-md p-2 ${
            isDarkMode
              ? "border-gray-600 bg-gray-700 text-white"
              : "border-gray-300"
          }`}
        />
        <a
          href="/wishlist"
          className={`${
            isDarkMode
              ? "text-white hover:text-gray-400"
              : "text-gray-800 hover:text-gray-600"
          }`}
        >
          <HeartIcon size={24} />
        </a>
        <NavLink
          to="/cart"
          className={`${
            isDarkMode
              ? "text-white hover:text-gray-400"
              : "text-gray-800 hover:text-gray-600"
          }`}
        >
          <ShoppingBagIcon size={24} />
        </NavLink>
        <div className="relative">
          <button
            onClick={handleMenuToggle}
            className={`cursor-pointer ${
              isDarkMode
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            <UserIcon size={24} />
          </button>
          {isMenuOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <a
                href="/profile"
                className={`block px-4 py-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Profile
              </a>
              <a
                href="/orders"
                className={`block px-4 py-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Orders
              </a>
              <NavLink
                to="/settings"
                className={`block px-4 py-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Settings
              </NavLink>
              <a
                href="/help"
                className={`block px-4 py-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Help
              </a>
              <a
                href="/logout"
                className={`block px-4 py-2 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

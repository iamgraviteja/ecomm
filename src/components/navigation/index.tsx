import { NavLink } from "react-router-dom";
import { HeartIcon, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navigation: React.FC = () => {
  const { isDarkMode } = useSelector((state: any) => state.theme);

  return (
    <nav
      className={`p-4 flex justify-between items-center border-b-2 ${
        isDarkMode
          ? "bg-gray-800 shadow-lg border-gray-700"
          : "bg-white shadow-md border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-16">
        <div className="w-48">
          <NavLink
            to="/"
            className={`font-bold text-xl ${
              isDarkMode
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            E-Comm
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
      <div className="flex items-center space-x-4">
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
        <a
          href="/cart"
          className={`${
            isDarkMode
              ? "text-white hover:text-gray-400"
              : "text-gray-800 hover:text-gray-600"
          }`}
        >
          <ShoppingCart size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

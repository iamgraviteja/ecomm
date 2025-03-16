import { LogOut, Package, Settings, Star, User } from "lucide-react";
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  return (
    <div className="absolute right-0 w-fit bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-lg p-4 dark:bg-black/20 dark:border-white/20">
      <ul className="space-y-4 text-white">
        <li className="flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:text-gray-300">
          <Link to="/orders" className="flex items-center space-x-3 w-full">
            <Package size={20} />
            <span>Orders</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:text-gray-300">
          <Link to="/settings" className="flex items-center space-x-3 w-full">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:text-gray-300">
          <Link to="/reviews" className="flex items-center space-x-3 w-full">
            <Star size={20} />
            <span>Reviews</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:text-gray-300">
          <Link
            to="/manage-account"
            className="flex items-center space-x-3 w-full"
          >
            <User size={20} />
            <span>Manage Account</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3 whitespace-nowrap cursor-pointer hover:text-gray-300">
          <Link to="/logout" className="flex items-center space-x-3 w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;

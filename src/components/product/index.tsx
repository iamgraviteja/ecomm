import { useSelector } from "react-redux";
import { ProductProps } from "../../types/app.types";

export const Product: React.FC<ProductProps> = ({ product }) => {
  const { isDarkMode } = useSelector((state: any) => state.theme);

  return (
    <div
      key={product.id}
      className={`p-4 rounded-lg shadow-lg flex flex-col justify-between h-full ${
        isDarkMode ? "dark:shadow-2xl dark:bg-gray-800" : ""
      }`}
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2
          className={`text-xl font-semibold mb-2 ${
            isDarkMode ? "dark:text-white" : ""
          }`}
        >
          {product.name}
        </h2>
        <p
          className={`text-gray-700 mb-4 ${
            isDarkMode ? "dark:text-gray-300" : ""
          }`}
        >
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span
          className={`text-lg font-bold ${isDarkMode ? "dark:text-white" : ""}`}
        >
          ${product.price}
        </span>
        <div className="flex space-x-2">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 ${
              isDarkMode ? "dark:bg-blue-700 dark:hover:bg-blue-800" : ""
            }`}
          >
            Add to Cart
          </button>
          <button
            className={`bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600 ${
              isDarkMode ? "dark:bg-gray-700 dark:hover:bg-gray-800" : ""
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

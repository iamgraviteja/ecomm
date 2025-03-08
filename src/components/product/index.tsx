import { useSelector } from "react-redux";
import { ProductProps } from "../../types/app.types";
import { RootState } from "../../store";

export const Product: React.FC<ProductProps> = ({ product }) => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      key={product.id}
      className={`p-4 rounded-lg shadow-lg flex flex-col justify-between ${
        isDarkMode ? "dark:shadow-2xl dark:bg-gray-800" : ""
      }`}
    >
      <div>
        <img
          loading="lazy"
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4 rounded"
        />
        <h4
          className={`text-md font-semibold mb-2 capitalize ${
            isDarkMode ? "dark:text-gray-300" : ""
          }`}
        >
          {product.brand}
        </h4>
        <h2
          className={`text-sm font-semibold mb-2 line-clamp-2 ${
            isDarkMode ? "dark:text-white" : ""
          }`}
          title={product.title}
        >
          {product.title}
        </h2>
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

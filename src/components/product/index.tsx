import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "../../store";
import { addToCart } from "../../store/reducers/cartSlice";
import { toggleItem } from "../../store/reducers/wishlistSlice";
import { Product, ProductProps } from "../../types/app.types";

export const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { items } = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch(toggleItem(product));
  };

  const isInWishlist = items.some((item) => item.id === product.id);

  return (
    <div
      key={product.id}
      className={`p-4 rounded-xl shadow-lg flex flex-col justify-between ${
        isDarkMode ? "dark:shadow-2xl dark:bg-gray-800" : ""
      }`}
    >
      <div>
        <div className="relative">
          <img
            loading="lazy"
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-4 rounded"
          />
          {isInWishlist ? (
            <HeartIcon
              onClick={() => handleAddToWishlist(product)}
              size={20}
              fill="#ff0000"
              className="cursor-pointer absolute top-2 right-2 text-red-500"
            />
          ) : (
            <HeartIcon
              onClick={() => handleAddToWishlist(product)}
              size={20}
              className={`cursor-pointer absolute top-2 right-2 ${
                isDarkMode ? "dark:text-gray-300" : "text-gray-700"
              } hover:fill-red-500 hover:text-red-500`}
            />
          )}
        </div>
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
        <div className="flex space-x-2 items-center mb-4">
          <ShoppingCartIcon
            onClick={() => handleAddToCart(product)}
            size={20}
            className={`cursor-pointer ${
              isDarkMode ? "dark:text-gray-300" : "text-gray-700"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

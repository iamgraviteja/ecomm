import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { toggleItem } from "../../store/reducers/wishlistSlice";
import { Product } from "../../types/app.types";

const WishList = () => {
  const { items } = useSelector((state: RootState) => state.wishlist);
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleRemove = (product: Product) => {
    dispatch(toggleItem(product));
  };

  return (
    <>
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <div
            key={product.id}
            className={`p-4 rounded-xl shadow-lg flex flex-col justify-between ${
              isDarkMode ? "shadow-2xl bg-gray-800" : "bg-white"
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
                <Trash
                  size={20}
                  onClick={() => handleRemove(product)}
                  className={`cursor-pointer absolute top-2 right-2 ${
                    isDarkMode ? "dark:text-gray-300" : "text-gray-700"
                  }`}
                />
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
                className={`text-lg font-bold ${
                  isDarkMode ? "dark:text-white" : ""
                }`}
              >
                ${product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;

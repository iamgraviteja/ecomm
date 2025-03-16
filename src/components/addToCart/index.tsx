import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { addToCart, removeFromCart } from "../../store/reducers/cartSlice";
import { Product } from "../../types/app.types";

interface AddToCartButtonProps {
  product: Product;
}
export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
}) => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = items.find((item) => item.id === product.id);
    setQuantity(item ? item.quantity : 0);
  }, [items, product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="flex items-center gap-2">
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className={`bg-blue-500 border border-blue-500 text-white px-4 py-2 rounded w-32 hover:bg-blue-600 transition ${
            isDarkMode ? "dark:bg-blue-700 dark:hover:bg-blue-800" : ""
          } cursor-pointer`}
        >
          Add
        </button>
      ) : (
        <div
          className={`flex items-center border rounded w-32 ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <button
            onClick={handleRemoveFromCart}
            className={`px-4 py-2 w-1/3 transition cursor-pointer ${
              isDarkMode
                ? "text-white bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            -
          </button>
          <span
            className={`flex-1 text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {quantity}
          </span>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 w-1/3 transition cursor-pointer ${
              isDarkMode
                ? "text-white bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "../../store";
import { clearCart } from "../../store/reducers/cartSlice";

const Cart = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { items } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Clear the cart
    dispatch(clearCart());
  };

  return (
    <div
      className={`p-4 min-h-screen ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Your Cart
        </h1>
        {items.length ? (
          <button
            onClick={handleClearCart}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              isDarkMode ? "dark:bg-blue-600" : ""
            }`}
          >
            Clear Cart
          </button>
        ) : null}
      </div>

      <div>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingBag
              name="shopping-cart"
              className={`w-16 h-16 mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            />
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Your bag is empty.
            </p>
          </div>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`flex gap-2 items-center p-2 border-b ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + "..."
                      : item.title}{" "}
                    (x{item.quantity})
                  </span>
                  <div
                    className={`ml-auto ${
                      isDarkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    ${item.price * item.quantity}
                  </div>
                </li>
              ))}
            </ul>
            {/* Calculate total here */}
            <div
              className={`flex justify-between items-center p-2 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <span
                className={`${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                } font-semibold`}
              >
                Total
              </span>
              <span
                className={`${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                } font-semibold`}
              >
                $
                {items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

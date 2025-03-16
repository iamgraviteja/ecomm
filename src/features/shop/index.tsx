import { useSelector } from "react-redux";

import { RootState } from "../../store";

const Shop = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Shop
      </h1>
    </>
  );
};

export default Shop;

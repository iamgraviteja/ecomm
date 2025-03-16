import { LoaderPinwheel } from "lucide-react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

const Loader = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  return (
    <div
      className={`flex justify-center items-center animate-spin py-20 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <LoaderPinwheel size={40} />
    </div>
  );
};

export default Loader;

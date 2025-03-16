import { Ghost } from "lucide-react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

const NotFound: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`flex flex-col items-center justify-center h-svh text-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Ghost size={64} />
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;

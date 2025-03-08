import { MoonIcon, SunIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/reducers/themeSlice";

const Settings = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`p-4 min-h-screen ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Settings
      </h1>
      <div className="flex items-center space-x-2">
        <span className={`${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
          Theme:
        </span>
        <button
          onClick={handleThemeToggle}
          className={`cursor-pointer p-2 rounded-full transition-colors duration-300 ${
            isDarkMode
              ? "text-white bg-gray-700 hover:bg-gray-600"
              : "text-gray-800 bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </div>
  );
};

export default Settings;

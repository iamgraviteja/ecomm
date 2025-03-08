import { useSelector } from "react-redux";

import { RootState } from "../../store";

const About = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

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
        About
      </h1>
    </div>
  );
};

export default About;

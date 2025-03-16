import { useSelector } from "react-redux";

import { RootState } from "../../store";

const About = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <h1
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        About
      </h1>
    </>
  );
};

export default About;

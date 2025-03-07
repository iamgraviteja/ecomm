import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import Home from "./features/home";
import Contact from "./features/contact";
import About from "./features/about";
import SignUp from "./features/signup";
import Shop from "./features/shop";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

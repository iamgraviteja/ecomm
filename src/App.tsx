import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation";
import About from "./features/about";
import Cart from "./features/cart";
import Contact from "./features/contact";
import Home from "./features/home";
import Settings from "./features/settings";
import Shop from "./features/shop";
import SignUp from "./features/signup";

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
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

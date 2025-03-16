import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation";
import NotFound from "./components/notFound";
import About from "./features/about";
import Cart from "./features/cart";
import Contact from "./features/contact";
import Home from "./features/home";
import Settings from "./features/settings";
import Shop from "./features/shop";
import SignUp from "./features/signup";
import WishList from "./features/wishlist";
import { RootState } from "./store";

function App() {
  const { isDarkMode } = useSelector((state: RootState) => state.theme); // Add state for isDarkMode
  return (
    <>
      <Navigation />
      <div
        className={`p-4 min-h-screen ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

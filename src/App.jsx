import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemDetails from "./pages/ItemDetails";

const App = () => {
  // Sample items array to share with `Collection` and `ItemDetails`
  const items = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: [
      "All",
      "Crops",
      "Seed",
      "Plant",
      "Tree",
      "Soil",
      "Fertilizer",
    ][Math.floor(Math.random() * 7)],
    description: `This is a brief description for Item ${i + 1}.`,
    discountPrice: `$${(Math.random() * 50 + 10).toFixed(2)}`,
  }));

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />

      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Orders />} />

        {/* Routes requiring items */}
        <Route path="/collection" element={<Collection items={items} />} />
        <Route path="/item/:id" element={<ItemDetails items={items} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

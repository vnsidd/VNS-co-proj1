// src/App.js
import React from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import DiscountBanner from "./components/DiscountBanner";
import BannerScroller from "./components/BannerScroller";

import "./index.css"; // TailwindCSS styles

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-br from-indigo-50 to-white">
      <CustomCursor />
      <BannerScroller /> {/* <-- Add scrolling banner here */}
      <DiscountBanner />
      <Hero />
      <ServicesPreview />
    </div>
  );
}

export default App;

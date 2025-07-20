// client/src/App.js

import React from "react";
import CustomCursor from "../../frontend/src/components/CustomCursor";
import DiscountBanner from "../../frontend/src/components/DiscountBanner";
import Hero from "../../frontend/src/components/Hero";
import ServicesPreview from "../../frontend/src/components/ServicesPreview";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-br from-indigo-50 to-white">
      {/* Custom Cursor overlays entire app */}
      <CustomCursor />

      {/* Top discount banner */}
      <DiscountBanner />

      {/* Hero section */}
      <Hero />

      {/* Services preview cards with hoverable cursor-parlour buttons */}
      <ServicesPreview />
    </div>
  );
}

export default App;

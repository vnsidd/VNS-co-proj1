import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/hero-bg.jpg')",
      }}
    >
      <div className="p-6 text-center bg-black/60 rounded-2xl">
        <h1 className="mb-4 text-5xl font-extrabold tracking-wide">
          Welcome to Bhavana Services
        </h1>
        <p className="text-xl font-medium">Luxury Care, Unmatched Experience</p>
      </div>
    </div>
  );
};

export default Hero;

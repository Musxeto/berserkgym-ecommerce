import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-white text-black">
      {/* Hero section */}
      <div className="container mx-auto lg:flex lg:items-center lg:justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:mr-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">
              Welcome to Berserk Fit
            </h1>
            <p className="text-lg mb-6 lg:mb-10">
              Elevate your fitness journey with Berserk Fit. Shop now for the
              best in performance gymwear and supplements!
            </p>
            <button className="bg-gray-950 hover:bg-gray-800 text-white py-2 px-4 rounded-lg lg:text-lg">
              Shop Now
            </button>
          </div>
        </div>
        {/* Right side image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="hero.jpg"
            alt="Hero"
            style={{
              width: "100%",
              height: "70vh",
              objectFit: "contain",
            }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
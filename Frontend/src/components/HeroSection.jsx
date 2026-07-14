import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-600 rounded-full p-4 md:p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaLeaf className="text-white text-4xl md:text-5xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          AgriSathi AI
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-green-700 font-semibold mb-4">
          AI-Powered Sustainable Farming Advisor
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get personalized farming recommendations based on your crop, season, and farming challenges to improve productivity while protecting the environment.
        </p>

        {/* Decorative line */}
        <div className="flex justify-center mt-8">
          <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

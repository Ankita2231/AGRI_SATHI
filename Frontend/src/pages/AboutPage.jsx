import React from 'react';
import { FaLeaf, FaBullseye, FaUsers, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: <FaBullseye className="text-4xl text-green-600" />,
      title: "Sustainability",
      description: "Promoting sustainable farming practices that protect the environment for future generations"
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Farmer Empowerment",
      description: "Providing farmers with AI-driven insights to optimize yields and reduce costs"
    },
    {
      icon: <FaGlobe className="text-4xl text-green-600" />,
      title: "Global Impact",
      description: "Contributing to food security through technology-driven agricultural innovation"
    }
  ];

  const achievements = [
    { number: "10K+", label: "Farmers Helped" },
    { number: "50+", label: "Crops Covered" },
    { number: "28", label: "Indian States" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Agricultural expert with 15+ years of experience in sustainable farming"
    },
    {
      name: "Priya Singh",
      role: "CTO",
      bio: "AI/ML specialist focused on agricultural technology solutions"
    },
    {
      name: "Vikram Patel",
      role: "Head of Product",
      bio: "Product innovator dedicated to farmer-centric solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AgriSathi AI</h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl">
            Empowering Indian farmers with cutting-edge AI technology to achieve sustainable growth, 
            maximize productivity, and secure their future through intelligent farming solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <FaLeaf className="text-green-600 mr-3" />
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To revolutionize Indian agriculture by providing farmers with accessible, 
              intelligent AI-powered tools that enhance crop productivity, reduce resource wastage, 
              and promote environmentally sustainable farming practices. We believe that every farmer, 
              regardless of their location or farm size, deserves access to advanced agricultural insights.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <FaBullseye className="text-blue-600 mr-3" />
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create a thriving agricultural ecosystem where AI and human expertise work hand-in-hand, 
              enabling farmers to make data-driven decisions. Our vision is to transform Indian agriculture 
              into a model of sustainability and profitability, ensuring food security while preserving our 
              natural resources for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 md:p-8 rounded-xl text-center hover:from-green-100 hover:to-green-200 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {achievement.number}
                </p>
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose AgriSathi AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "AI-powered recommendations tailored to your specific crops and conditions",
              "Real-time pest and disease identification and management strategies",
              "Water conservation techniques to maximize irrigation efficiency",
              "Soil health optimization through data-driven fertilizer recommendations",
              "Weather forecasting integrated with farming advice",
              "Cost-effective solutions designed for Indian farmers",
              "Easy-to-use interface accessible to all farmers",
              "Comprehensive support across 28 Indian states and 50+ crop varieties"
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-600 text-2xl mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Thousands of Farmers Transforming Agriculture
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Start your journey towards sustainable and profitable farming with AgriSathi AI today.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

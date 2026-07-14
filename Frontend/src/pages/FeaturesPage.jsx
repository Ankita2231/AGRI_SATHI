import React, { useState } from 'react';
import { 
  FaBug, 
  FaTint, 
  FaLeaf, 
  FaChartLine, 
  FaShieldAlt, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const FeaturesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const features = [
    {
      icon: <FaBug className="text-4xl" />,
      title: "Pest & Disease Management",
      description: "AI-powered identification and real-time management strategies for common agricultural pests and diseases. Get instant solutions to protect your crops.",
      details: [
        "Identify pests and diseases from symptoms",
        "Real-time treatment recommendations",
        "Preventive measures and early warning systems",
        "Organic and chemical solutions"
      ]
    },
    {
      icon: <FaTint className="text-4xl" />,
      title: "Water Conservation",
      description: "Optimize irrigation schedules and techniques to reduce water usage by up to 40% while maintaining crop productivity.",
      details: [
        "Smart irrigation scheduling",
        "Drip irrigation optimization",
        "Rainwater harvesting tips",
        "Soil moisture monitoring"
      ]
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Soil Health Monitoring",
      description: "Continuous analysis and recommendations to improve soil fertility, structure, and health for sustainable farming.",
      details: [
        "Nutrient deficiency detection",
        "Soil pH and texture analysis",
        "Organic matter enrichment tips",
        "Crop rotation recommendations"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Yield Optimization",
      description: "Data-driven insights to maximize your crop yield through precision farming techniques and best practices.",
      details: [
        "Yield prediction models",
        "Fertilizer optimization",
        "Harvest timing recommendations",
        "Productivity analysis"
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Sustainable Practices",
      description: "Implement eco-friendly farming methods that reduce chemical usage and protect the environment.",
      details: [
        "Organic farming guidance",
        "Chemical reduction strategies",
        "Biodiversity preservation",
        "Carbon footprint tracking"
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Region-Specific Advice",
      description: "Get recommendations tailored to your specific location, climate, and local farming conditions.",
      details: [
        "Weather pattern analysis",
        "Local crop suitability",
        "State-specific policies",
        "Regional best practices"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does AgriSathi AI work?",
      answer: "AgriSathi AI uses advanced machine learning algorithms to analyze your crop data, local conditions, and farming challenges. Simply input your crop type, season, and specific problems, and our AI provides personalized recommendations tailored to your farm."
    },
    {
      question: "Is AgriSathi AI free to use?",
      answer: "Yes! AgriSathi AI is completely free to use. We believe every farmer should have access to quality agricultural guidance regardless of their financial situation."
    },
    {
      question: "What crops does AgriSathi AI support?",
      answer: "We support 50+ crop varieties including major crops like Rice, Wheat, Maize, Vegetables, Spices, Fruits, and Cash crops. We're continuously adding more crops based on farmer feedback."
    },
    {
      question: "Can I use AgriSathi AI on my mobile phone?",
      answer: "Yes! AgriSathi AI is fully responsive and works perfectly on mobile phones, tablets, and desktop computers. You can access it anytime, anywhere."
    },
    {
      question: "How accurate are the recommendations?",
      answer: "Our recommendations are based on agricultural research, farmer experiences, and AI analysis of farming data. Accuracy continuously improves as we gather more data and feedback from farmers."
    },
    {
      question: "Do I need internet connection to use the app?",
      answer: "Yes, you need an active internet connection to access AgriSathi AI and get real-time recommendations. We're working on offline functionality for future versions."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Modern Farming</h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl">
            Comprehensive AI-powered tools designed to address every aspect of your farming challenges 
            and maximize your agricultural success.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 p-8 rounded-xl hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-green-600 mb-4 group-hover:text-green-700 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Select Your Crop", description: "Choose the crop you're growing" },
              { step: 2, title: "Specify Conditions", description: "Tell us about season and soil type" },
              { step: 3, title: "Describe Problem", description: "Share your farming challenges" },
              { step: 4, title: "Get AI Advice", description: "Receive personalized recommendations" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-green-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Increase Yield", description: "Up to 40% improvement in crop productivity" },
              { title: "Save Water", description: "Reduce irrigation water usage by 40%" },
              { title: "Lower Costs", description: "Optimize fertilizer and pesticide usage" },
              { title: "Early Detection", description: "Identify pests and diseases before major damage" },
              { title: "Eco-Friendly", description: "Implement sustainable farming practices" },
              { title: "Better Soil", description: "Improve soil health and fertility over time" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <span className="text-green-600">
                    {expandedFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Experience the power of AI-driven farming with AgriSathi AI's comprehensive feature set.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg">
            Generate Your First AI Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;

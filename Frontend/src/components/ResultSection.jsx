import React from 'react';
import {
  FaCheckCircle,
  FaLeaf,
  FaTint,
  FaBug,
  FaGlobe,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';
import { dummyRecommendations, expectedBenefits } from '../data/formOptions';

const ResultSection = ({ formData, isVisible }) => {
  if (!isVisible) return null;

  const getFormattedValue = (value) => {
    return value
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const icons = {
    'Organic Fertilizer': <FaLeaf className="text-green-600" />,
    'Water Saving Tips': <FaTint className="text-blue-500" />,
    'Pest Management': <FaBug className="text-yellow-600" />,
    'Sustainable Practices': <FaGlobe className="text-emerald-600" />,
    'Preventive Measures': <FaShieldAlt className="text-purple-600" />,
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            AI Farming Recommendation
          </h2>
          <p className="text-gray-600">
            Customized for <span className="font-semibold text-green-600">
              {getFormattedValue(formData.crop === 'other' ? formData.customCrop : formData.crop)}
            </span>{' '}
            in {getFormattedValue(formData.state || 'your region')}
          </p>
        </div>

        {/* Form Summary */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-green-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Season:</span>
              <p className="font-semibold text-gray-900">
                {getFormattedValue(formData.season)}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Problem:</span>
              <p className="font-semibold text-gray-900">
                {getFormattedValue(
                  formData.problem === 'other' ? formData.customProblem : formData.problem
                )}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Soil Type:</span>
              <p className="font-semibold text-gray-900">
                {getFormattedValue(formData.soilType || 'Not specified')}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Irrigation:</span>
              <p className="font-semibold text-gray-900">
                {getFormattedValue(formData.irrigationMethod || 'Not specified')}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {Object.entries(dummyRecommendations).map((entry, index) => {
            const [section, tips] = entry;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-500 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{icons[section]}</div>
                  <h3 className="text-xl font-bold text-gray-900">{section}</h3>
                </div>
                <ul className="space-y-2">
                  {tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-700 text-sm">
                      <FaCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Expected Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-md border-2 border-green-200">
          <div className="flex items-center mb-6">
            <FaTrophy className="text-yellow-600 text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Expected Benefits</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expectedBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-green-600 text-xl" />
                </div>
                <span className="ml-3 text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm">
            These recommendations are AI-generated based on best farming practices.
            <br />
            Consult with local agricultural experts for field-specific implementation.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ResultSection;

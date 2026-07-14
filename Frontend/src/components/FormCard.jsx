import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  crops,
  seasons,
  farmingProblems,
  indianStates,
  soilTypes,
  irrigationMethods,
} from '../data/formOptions';
import {
  FaSeedling,
  FaCloud,
  FaBug,
  FaMapMarkerAlt,
  FaLeaf,
  FaTint,
} from 'react-icons/fa';

const FormCard = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crop: '',
    season: '',
    problem: '',
    state: '',
    soilType: '',
    irrigationMethod: '',
    customCrop: '',
    customProblem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the HomePage onSubmit first for any local state management
    if (onSubmit) {
      onSubmit(formData);
    }
    // Then navigate to the report page with form data
    navigate('/generate-report', { state: { formData } });
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Crop Field */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaSeedling className="text-green-600 mr-2 text-lg" />
              Crop <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select a crop</option>
              {crops.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {formData.crop === 'other' && (
              <input
                type="text"
                name="customCrop"
                placeholder="Please specify your crop"
                value={formData.customCrop}
                onChange={handleChange}
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
              />
            )}
          </div>

          {/* Season Field */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaCloud className="text-blue-500 mr-2 text-lg" />
              Season <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="season"
              value={formData.season}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select a season</option>
              {seasons.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Farming Problem Field */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaBug className="text-yellow-600 mr-2 text-lg" />
              Farming Problem <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select a farming problem</option>
              {farmingProblems.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            {formData.problem === 'other' && (
              <input
                type="text"
                name="customProblem"
                placeholder="Please describe your farming problem"
                value={formData.customProblem}
                onChange={handleChange}
                className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50"
              />
            )}
          </div>

          {/* State Field */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaMapMarkerAlt className="text-red-600 mr-2 text-lg" />
              State / Region
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select a state</option>
              {indianStates.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Soil Type Field */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaLeaf className="text-amber-700 mr-2 text-lg" />
              Soil Type
            </label>
            <select
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select soil type</option>
              {soilTypes.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Irrigation Method Field */}
          <div className="mb-8">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <FaTint className="text-cyan-500 mr-2 text-lg" />
              Irrigation Method
            </label>
            <select
              name="irrigationMethod"
              value={formData.irrigationMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
            >
              <option value="">Select irrigation method</option>
              {irrigationMethods.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg"
          >
            Get AI Farming Advice
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormCard;

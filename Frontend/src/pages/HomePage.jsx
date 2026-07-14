import React from 'react';
import { useNavigate } from 'react-router';
import {
  FaLeaf,
  FaSeedling,
  FaCloud,
  FaBug,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaTint,
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
} from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaSeedling className="text-3xl text-green-500" />,
      title: 'Smart Crop Guidance',
      desc: 'Get AI-driven, crop-specific advice tailored to your variety, growth stage, and local conditions for maximum yield.',
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
    },
    {
      icon: <FaTint className="text-3xl text-blue-500" />,
      title: 'Water Management',
      desc: 'Optimize irrigation schedules and reduce water waste by up to 40% using smart soil moisture insights.',
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
    },
    {
      icon: <FaBug className="text-3xl text-red-500" />,
      title: 'Pest & Disease Control',
      desc: 'Identify threats early and receive targeted, eco-friendly treatment plans before they damage your harvest.',
      bg: 'from-red-50 to-orange-50',
      border: 'border-red-200',
    },
    {
      icon: <FaLeaf className="text-3xl text-emerald-600" />,
      title: 'Sustainable Practices',
      desc: 'Adopt soil health techniques, organic inputs, and crop rotations that protect the land for future generations.',
      bg: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
    },
    {
      icon: <FaCloud className="text-3xl text-indigo-500" />,
      title: 'Season-Aware Planning',
      desc: 'Season-specific plans that align your sowing, fertilizing, and harvesting schedule with climate patterns.',
      bg: 'from-indigo-50 to-blue-50',
      border: 'border-indigo-200',
    },
    {
      icon: <FaChartLine className="text-3xl text-amber-500" />,
      title: 'Yield Optimization',
      desc: 'Data-backed recommendations that have helped farmers achieve 20–30% yield increases in a single season.',
      bg: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Farmers Helped', icon: <FaStar className="text-yellow-400" /> },
    { value: '30+', label: 'Crop Varieties', icon: <FaSeedling className="text-green-500" /> },
    { value: '28', label: 'Indian States', icon: <FaMapMarkerAlt className="text-red-500" /> },
    { value: '40%', label: 'Water Savings', icon: <FaTint className="text-blue-500" /> },
  ];

  const steps = [
    { step: '01', title: 'Enter Crop Details', desc: 'Choose your crop, season, region, soil type, and the farming challenge you face.' },
    { step: '02', title: 'AI Analyzes Data', desc: 'Our AI model processes your inputs against thousands of agricultural data points.' },
    { step: '03', title: 'Get Your Report', desc: 'Receive a comprehensive, actionable farming report in seconds — ready to download.' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white border-opacity-30">
                <FaLeaf className="text-white text-5xl" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
              AgriSathi AI
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-green-100 mb-4">
              Your AI-Powered Sustainable Farming Advisor
            </p>
            <p className="text-base md:text-lg text-green-50 max-w-2xl mx-auto leading-relaxed mb-10">
              Get personalized, region-specific farming recommendations powered by artificial intelligence.
              Boost your yield, cut costs, and farm sustainably — all from a single report.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                id="hero-generate-btn"
                onClick={() => navigate('/generate-report')}
                className="flex items-center justify-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
              >
                <FaSeedling /> Generate My Report <FaArrowRight />
              </button>
              <button
                onClick={() => navigate('/features')}
                className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-green-700 transition-all duration-300 text-lg"
              >
                <FaLightbulb /> Explore Features
              </button>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                About AgriSathi
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Bringing AI to India's Farms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
                AgriSathi AI is designed for Indian farmers who need reliable, science-backed guidance
                without the complexity. Whether you grow rice in Punjab or cotton in Vidarbha, our AI
                understands your unique soil, climate, and challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                By combining cutting-edge machine learning with agricultural expertise, we translate
                complex data into simple, actionable steps — available in seconds, right on your phone.
              </p>
              <ul className="space-y-3">
                {['No technical knowledge required', 'Covers 30+ crops across all Indian seasons', 'Free to use — anytime, anywhere'].map((pt, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {[
                { icon: <FaShieldAlt className="text-green-600 text-2xl" />, title: 'Trusted Science', desc: 'Recommendations grounded in ICAR guidelines and modern agronomy research.' },
                { icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />, title: 'Region-Specific', desc: 'Advice tailored to your state, soil type, and local weather patterns.' },
                { icon: <FaChartLine className="text-indigo-500 text-2xl" />, title: 'Result-Driven', desc: 'Farmers report 20–30% yield gains and up to 50% input cost reduction.' },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 p-3 rounded-lg">{c.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{c.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Everything a Smart Farmer Needs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Six pillars of AI-driven guidance designed to address every farming challenge you face.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${f.bg} border ${f.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              3 Simple Steps to Smarter Farming
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-400 text-white rounded-2xl flex items-center justify-center text-2xl font-extrabold shadow-lg">
                    {s.step}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-green-200" />
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Fill in a quick form and get your personalised AI Farming Report in under 30 seconds.
            It's free — start now.
          </p>
          <button
            id="cta-generate-btn"
            onClick={() => navigate('/generate-report')}
            className="inline-flex items-center gap-3 bg-white text-green-700 font-bold px-10 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
          >
            <FaSeedling /> Generate My Report <FaArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

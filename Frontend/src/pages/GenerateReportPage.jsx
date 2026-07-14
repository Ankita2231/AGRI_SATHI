import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  FaArrowLeft,
  FaDownload,
  FaPrint,
  FaShareAlt,
  FaSeedling,
  FaCloud,
  FaBug,
  FaMapMarkerAlt,
  FaLeaf,
  FaTint,
  FaCheckCircle,
  FaLightbulb,
  FaShieldAlt,
  FaTrophy,
  FaChartLine,
  FaFileAlt,
} from 'react-icons/fa';
import {
  crops,
  seasons,
  farmingProblems,
  indianStates,
  soilTypes,
  irrigationMethods,
} from '../data/formOptions';

/* ────────────────────────────────────────────
   INPUT FORM
──────────────────────────────────────────── */
const ReportForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    crop: '',
    season: '',
    problem: '',
    state: '',
    soilType: '',
    irrigationMethod: '',
  });
  // track whether the dropdown choice was "other" so we can show the free-text box
  const [cropIsOther, setCropIsOther] = useState(false);
  const [problemIsOther, setProblemIsOther] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'crop') {
      if (value === 'other') {
        setCropIsOther(true);
        // clear the crop value until the user types a custom one
        setFormData((prev) => ({ ...prev, crop: '' }));
      } else {
        setCropIsOther(false);
        setFormData((prev) => ({ ...prev, crop: value }));
      }
      return;
    }
    if (name === 'problem') {
      if (value === 'other') {
        setProblemIsOther(true);
        setFormData((prev) => ({ ...prev, problem: '' }));
      } else {
        setProblemIsOther(false);
        setFormData((prev) => ({ ...prev, problem: value }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData)
  };

  const fieldClass =
    'w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-green-600 to-emerald-500 p-4 rounded-2xl shadow-lg">
              <FaFileAlt className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Generate AI Farming Report
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Fill in your farm details below and our AI will create a personalized report
            with actionable recommendations in seconds.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mx-auto" />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
        >
          {/* Crop */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaSeedling className="text-green-600 mr-2 text-lg" />
              Crop <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="crop"
              value={cropIsOther ? 'other' : formData.crop}
              onChange={handleChange}
              required={!cropIsOther}
              className={fieldClass}
            >
              <option value="">Select a crop</option>
              {crops.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
            {cropIsOther && (
              <input
                type="text"
                name="crop"
                placeholder="Type your crop name"
                value={formData.crop}
                onChange={handleChange}
                required
                className={`${fieldClass} mt-3`}
              />
            )}
          </div>

          {/* Season */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaCloud className="text-blue-500 mr-2 text-lg" />
              Season <span className="text-red-500 ml-1">*</span>
            </label>
            <select name="season" value={formData.season} onChange={handleChange} required className={fieldClass}>
              <option value="">Select a season</option>
              {seasons.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          {/* Farming Problem */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaBug className="text-yellow-600 mr-2 text-lg" />
              Farming Problem <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="problem"
              value={problemIsOther ? 'other' : formData.problem}
              onChange={handleChange}
              required={!problemIsOther}
              className={fieldClass}
            >
              <option value="">Select a farming problem</option>
              {farmingProblems.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
            {problemIsOther && (
              <input
                type="text"
                name="problem"
                placeholder="Describe your farming problem"
                value={formData.problem}
                onChange={handleChange}
                required
                className={`${fieldClass} mt-3`}
              />
            )}
          </div>

          {/* State */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaMapMarkerAlt className="text-red-600 mr-2 text-lg" />
              State / Region
            </label>
            <select name="state" value={formData.state} onChange={handleChange} className={fieldClass}>
              <option value="">Select a state</option>
              {indianStates.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          {/* Soil Type */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaLeaf className="text-amber-700 mr-2 text-lg" />
              Soil Type
            </label>
            <select name="soilType" value={formData.soilType} onChange={handleChange} className={fieldClass}>
              <option value="">Select soil type</option>
              {soilTypes.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          {/* Irrigation Method */}
          <div className="mb-8">
            <label className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <FaTint className="text-cyan-500 mr-2 text-lg" />
              Irrigation Method
            </label>
            <select name="irrigationMethod" value={formData.irrigationMethod} onChange={handleChange} className={fieldClass}>
              <option value="">Select irrigation method</option>
              {irrigationMethods.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="submit-report-btn"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-3"
          >
            <FaChartLine /> Get My AI Farming Report
          </button>
        </form>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────
   REPORT VIEW
──────────────────────────────────────────── */
const ReportView = ({ formData, onBack }) => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setIsGenerating(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const recommendations = {
    'Organic Fertilizer': [
      'Apply 5-10 tons of well-composted farmyard manure per hectare before planting',
      'Use vermicompost to enhance nutrient absorption and soil microbial activity',
      'Implement crop residue composting for sustainable nutrient cycling',
      'Apply bio-fertilizers containing nitrogen-fixing bacteria and phosphate-solubilizing microbes',
      'Consider green manuring by growing legumes during off-season',
    ],
    'Water Saving Tips': [
      'Implement mulching with 5-7 cm organic material to retain soil moisture',
      'Use drip irrigation to reduce water wastage by 40-50%',
      'Schedule watering during early morning (4-7 AM) or late evening (6-9 PM)',
      'Maintain soil moisture between 60-80% field capacity for optimal growth',
      'Install rainwater harvesting systems to supplement irrigation needs',
    ],
    'Pest Management': [
      'Monitor fields regularly for early pest detection and disease symptoms',
      'Use pheromone traps and yellow sticky traps for pest monitoring',
      'Apply neem oil spray for common pests like aphids and mites',
      'Encourage natural predators by planting companion crops',
      'Practice intercropping with trap crops to reduce pest damage',
    ],
    'Sustainable Practices': [
      'Implement crop rotation with legumes to reduce soil degradation',
      'Avoid continuous monoculture to maintain soil health and biodiversity',
      'Use organic mulches to prevent soil erosion and weed growth',
      'Maintain field boundaries with hedgerows to support beneficial insects',
      'Reduce chemical inputs by 30-40% through integrated pest management',
    ],
    'Preventive Measures': [
      'Use disease-resistant varieties suited to your region',
      'Ensure proper field sanitation by removing crop residues',
      'Provide adequate spacing between plants for better air circulation',
      'Avoid over-irrigation to prevent fungal and root diseases',
      'Practice timely weeding to reduce pest and disease incidence',
    ],
    'Expected Benefits': [
      '20-30% increase in crop yield within first season',
      '40% reduction in water usage and irrigation costs',
      '50% reduction in pesticide and chemical fertilizer expenses',
      'Improved soil fertility and structure for long-term sustainability',
      'Better market value for sustainably grown produce',
    ],
  };

  const cropDetails = {
    rice:   { name: 'Rice',   optimalTemp: '20-30°C', waterNeeded: '1000-1500 mm', growthPeriod: '120-150 days', yield: '4-6 tons/hectare' },
    wheat:  { name: 'Wheat',  optimalTemp: '15-25°C', waterNeeded: '450-650 mm',   growthPeriod: '120-140 days', yield: '3-5 tons/hectare' },
    maize:  { name: 'Maize',  optimalTemp: '21-27°C', waterNeeded: '500-800 mm',   growthPeriod: '100-130 days', yield: '4-8 tons/hectare' },
  };

  const crop = cropDetails[formData.crop] || {
    name: formData.crop.charAt(0).toUpperCase() + formData.crop.slice(1),
    optimalTemp: '15-30°C', waterNeeded: '600-1000 mm', growthPeriod: '90-180 days', yield: '2-8 tons/hectare',
  };

  const catIcons = {
    'Organic Fertilizer':  <FaLeaf className="text-green-600 mr-3" />,
    'Water Saving Tips':   <FaTint className="text-blue-600 mr-3" />,
    'Pest Management':     <FaBug className="text-red-600 mr-3" />,
    'Sustainable Practices': <FaShieldAlt className="text-purple-600 mr-3" />,
    'Preventive Measures': <FaLightbulb className="text-yellow-600 mr-3" />,
    'Expected Benefits':   <FaTrophy className="text-orange-600 mr-3" />,
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-16 text-center max-w-md w-full">
          <div className="animate-spin mb-6 flex justify-center">
            <FaSeedling className="text-6xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your AI Report</h2>
          <p className="text-gray-500">Analyzing your farming data and creating personalized recommendations…</p>
          <div className="mt-6 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-pulse w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      {/* Sticky sub-header */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Form
            </button>
            <h2 className="text-xl font-bold text-gray-900">AI Farming Report</h2>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <FaPrint /> Print
              </button>
              <button
                onClick={() => alert('Share functionality coming soon!')}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                <FaShareAlt /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Executive Summary */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaTrophy className="text-green-600 mr-3" /> Executive Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-semibold">Crop</span>
                <FaSeedling className="text-green-600 text-2xl" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{crop.name}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-semibold">Season</span>
                <FaCloud className="text-blue-600 text-2xl" />
              </div>
              <p className="text-2xl font-bold text-gray-900 capitalize">{formData.season}</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-semibold">Challenge</span>
                <FaBug className="text-red-600 text-2xl" />
              </div>
              <p className="text-2xl font-bold text-gray-900 capitalize">{formData.problem}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Based on your input for growing <strong>{crop.name}</strong> during <strong>{formData.season}</strong>
            {formData.state && <> in <strong>{formData.state}</strong></>}, AgriSathi AI has generated personalized recommendations to help
            you overcome <strong>{formData.problem}</strong> and maximize your crop yield sustainably.
          </p>
        </section>

        {/* Crop Info */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaLeaf className="text-green-600 mr-3" /> Crop Information &amp; Guidelines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['Optimal Temperature', crop.optimalTemp],
              ['Water Required', crop.waterNeeded],
              ['Growth Period', crop.growthPeriod],
              ['Expected Yield', crop.yield],
            ].map(([label, val]) => (
              <div key={label} className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-xl font-bold text-gray-900">{val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Recommendations */}
        <section className="space-y-6 mb-8">
          {Object.entries(recommendations).map(([category, items], index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {catIcons[category]} {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 text-sm" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
          <div className="space-y-4">
            {[
              { week: 'Week 1-2', action: 'Soil testing and preparation', details: 'Get soil tested, apply initial fertilizer' },
              { week: 'Week 3-4', action: 'Field preparation', details: 'Clear weeds, level field, create irrigation channels' },
              { week: 'Week 5-8', action: 'Planting phase', details: 'Use certified seeds, maintain proper spacing' },
              { week: 'Week 9-16', action: 'Growth & monitoring', details: 'Regular watering, pest monitoring, weed management' },
              { week: 'Week 17-20', action: 'Maintenance & care', details: 'Nutrient application, disease prevention' },
              { week: 'Week 21+', action: 'Harvest preparation', details: 'Monitor maturity, prepare harvesting equipment' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="bg-gradient-to-br from-green-500 to-emerald-400 text-white rounded-lg px-3 py-2 flex-shrink-0 font-bold text-sm text-center w-24">
                  {item.week}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.action}</h4>
                  <p className="text-gray-500 text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Tips */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 mb-8 border-l-4 border-green-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-3" /> Expert Tips for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Start small – Test recommendations on a portion of your field first',
              'Keep records – Track your practices and results for future reference',
              'Monitor weather – Adjust your schedule based on local weather patterns',
              'Community support – Connect with other farmers for shared experiences',
              'Regular inspection – Visit your fields daily to catch issues early',
              'Invest wisely – Use your budget on the highest-impact practices first',
            ].map((tip, index) => (
              <div key={index} className="flex gap-3 items-start">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Farming?</h2>
          <p className="text-green-100 mb-6 text-lg">
            Save this report and follow the recommendations to see visible improvements in your crop yield and farm health.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
          >
            Generate Another Report
          </button>
        </section>

      </div>
    </div>
  );
};

/* ────────────────────────────────────────────
   PAGE WRAPPER (form → report)
──────────────────────────────────────────── */
const GenerateReportPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSubmittedData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submittedData) {
    return <ReportView formData={submittedData} onBack={handleBack} />;
  }

  return <ReportForm onSubmit={handleFormSubmit} />;
};

export default GenerateReportPage;

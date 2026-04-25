import React, { useState } from "react";
import { FaTimes, FaRulerCombined } from "react-icons/fa";

const measurementFields = [
  { key: "bust", label: "Bust", placeholder: "e.g. 36", unit: "inches" },
  { key: "waist", label: "Waist", placeholder: "e.g. 30", unit: "inches" },
  { key: "hip", label: "Hip", placeholder: "e.g. 38", unit: "inches" },
  { key: "shoulder", label: "Shoulder Width", placeholder: "e.g. 15", unit: "inches" },
  { key: "length", label: "Garment Length", placeholder: "e.g. 42", unit: "inches" },
  { key: "sleeve", label: "Sleeve Length", placeholder: "e.g. 14", unit: "inches" },
];

const MeasurementModal = ({ isOpen, onClose, onSubmit, productName }) => {
  const [measurements, setMeasurements] = useState({
    bust: "", waist: "", hip: "", shoulder: "", length: "", sleeve: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (key, value) => {
    setMeasurements((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    measurementFields.forEach(({ key }) => {
      const val = measurements[key].trim();
      if (!val) newErrors[key] = "Required";
      else if (isNaN(val) || Number(val) <= 0) newErrors[key] = "Enter a valid number";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(measurements);
      setMeasurements({ bust: "", waist: "", hip: "", shoulder: "", length: "", sleeve: "" });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fadeIn 0.3s ease" }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ animation: "slideUp 0.4s ease" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3D1255] to-[#2E1F47] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaRulerCombined className="text-[#C5A46D] text-lg" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Your Measurements</h2>
                <p className="text-gray-300 text-xs">For a perfect custom fit</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition p-1"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-6 pt-4">
          <p className="text-sm text-gray-500">
            Adding measurements for: <span className="font-semibold text-[#3D1255]">{productName}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {measurementFields.map(({ key, label, placeholder, unit }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label} <span className="text-gray-400">({unit})</span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={measurements[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
                    errors[key]
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-pink-300 focus:border-pink-400"
                  }`}
                />
                {errors[key] && (
                  <p className="text-xs text-red-500 mt-1">{errors[key]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 mt-2">
            <p className="text-xs text-gray-600">
              💡 <strong>Tip:</strong> For the best fit, measure yourself while wearing well-fitted undergarments. Keep the tape snug but not tight.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-pink-600 transition text-sm shadow-md"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MeasurementModal;

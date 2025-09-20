import React from "react";

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      placeholder={placeholder}
      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
);

export default TextAreaField;

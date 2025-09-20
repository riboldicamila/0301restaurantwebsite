import React from "react";

const SelectField = ({ label, name, value, onChange, maxGuests }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="">Select</option>
      {[...Array(maxGuests).keys()].map((i) => (
        <option key={i + 1} value={i + 1}>{`${i + 1} ${i === 0 ? "Person" : "People"}`}</option>
      ))}
      <option value="9+">9+ People (Please call)</option>
    </select>
  </div>
);

export default SelectField;

import { GUESTS } from "../../constants/reservations";

const SelectField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="">Select</option>
      {GUESTS.map((guest) => (
        <option key={guest} value={guest}>
          {`${guest} Person(s)`}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;

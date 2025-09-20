import React from "react";
import DatePickerLib from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">Date</label>
      <DatePickerLib
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select a date"
        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        minDate={new Date()} 
      />
    </div>
  );
};

export default DatePicker;

import { timeSlots } from "../../constants/reservations";

const TimePicker = ({ selectedTime, handleTimeSelect }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">Time</label>
    <div className="grid grid-cols-3 gap-2">
      {timeSlots.map((slot) => (
        <button
          key={slot.id}
          type="button"
          onClick={() => handleTimeSelect(slot.id)}
          className={`px-2 py-1 rounded border ${
            selectedTime === slot.id
              ? "bg-red-500 text-white border-red-500"
              : "bg-white hover:bg-gray-100 border-gray-300"
          }`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  </div>
);

export default TimePicker;

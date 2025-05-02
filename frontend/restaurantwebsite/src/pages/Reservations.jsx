import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    notes: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    const endDate = new Date();
    endDate.setMonth(today.getMonth() + 1);

    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      // Randomly mark some dates as unavailable
      if (Math.random() > 0.2) {
        dates.push(new Date(d));
      }
    }

    setAvailableDates(dates);
  }, []);

  const timeSlots = [
    { id: "17:00", label: "5:00 PM" },
    { id: "17:30", label: "5:30 PM" },
    { id: "18:00", label: "6:00 PM" },
    { id: "18:30", label: "6:30 PM" },
    { id: "19:00", label: "7:00 PM" },
    { id: "19:30", label: "7:30 PM" },
    { id: "20:00", label: "8:00 PM" },
    { id: "20:30", label: "8:30 PM" },
    { id: "21:00", label: "9:00 PM" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData((prev) => ({
      ...prev,
      date: date.toISOString().split("T")[0],
    }));
    setCalendarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "phone", "guests", "date", "time"];
    const isValid = requiredFields.every((field) => formData[field]);

    if (!isValid) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    try {
      console.log("Reservation data:", formData);

      // to remove when app api call.
      setTimeout(() => {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "",
          date: "",
          time: "",
          notes: "",
        });
        setSelectedDate(null);
        setSelectedTime(null);

        setTimeout(() => setShowSuccess(false), 5000);
      }, 1000);
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };


  return (
    <div className="min-h-[160vh] bg-blue-500 relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0"
        src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746175692/3296571-uhd_2732_1440_25fps_v8uegw.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-20 max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            MAKE A RESERVATION
          </motion.h1>
          <motion.p
            className="text-lg text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }} 
          >
            Reserve your table at our authentic Thai street food restaurant and
            experience the vibrant flavors of Bangkok in a memorable dining
            experience.
          </motion.p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Contact Information
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Reservation Details
                </h2>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                    <option value="9+">9+ People (Please call)</option>
                  </select>
                </div>

                <div className="relative">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Reservation Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={formatDate(selectedDate)}
                      onClick={() => setCalendarOpen(!calendarOpen)}
                      readOnly
                      placeholder="Select a date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                    />
                    <Calendar
                      className="absolute right-3 top-2.5 text-gray-500"
                      size={20}
                    />
                  </div>

                  {calendarOpen && (
                    <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md border border-gray-200 p-4">
                      <div className="grid grid-cols-7 gap-1">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div
                            key={i}
                            className="text-center text-sm font-medium text-gray-500"
                          >
                            {day}
                          </div>
                        ))}

                        {Array.from({ length: 35 }, (_, i) => {
                          const today = new Date();
                          const day = new Date(
                            today.getFullYear(),
                            today.getMonth(),
                            today.getDate() + i - today.getDay()
                          );
                          const isAvailable = availableDates.some(
                            (d) => d.toDateString() === day.toDateString()
                          );
                          const isPast = day < today;
                          const isSelected =
                            selectedDate &&
                            day.toDateString() === selectedDate.toDateString();

                          // Only show dates up to one month ahead
                          const endDate = new Date();
                          endDate.setMonth(today.getMonth() + 1);
                          const isFuture = day > endDate;

                          return (
                            <div
                              key={i}
                              onClick={() =>
                                isAvailable &&
                                !isPast &&
                                !isFuture &&
                                handleDateSelect(day)
                              }
                              className={`
                              text-center py-1 rounded-md text-sm
                              ${isSelected ? "bg-red-500 text-white" : ""}
                              ${
                                isAvailable && !isPast && !isFuture
                                  ? "hover:bg-red-100 cursor-pointer"
                                  : ""
                              }
                              ${
                                !isAvailable || isPast || isFuture
                                  ? "text-gray-300 cursor-not-allowed"
                                  : ""
                              }
                            `}
                            >
                              {day.getDate()}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Reservation Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.id}
                        onClick={() => handleTimeSelect(slot.id)}
                        className={`
                        px-3 py-2 border-2 rounded-md text-center cursor-pointer
                        ${
                          selectedTime === slot.id
                            ? "bg-red-500 text-white border-red-500"
                            : "border-red-500 text-red-500 hover:bg-red-50"
                        }
                      `}
                      >
                        {slot.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-gray-700 font-medium mb-1"
              >
                Special Requests / Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Any dietary requirements or special requests?"
              ></textarea>
            </div>

            <div
              onClick={handleSubmit}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center cursor-pointer"
            >
              Confirm Reservation
            </div>
          </div>

          {showSuccess && (
            <div className="mt-6 p-4 bg-green-50 border border-green-500 text-green-700 rounded-md">
              Your reservation has been successfully submitted! You will receive
              a confirmation email shortly.
            </div>
          )}

          {showError && (
            <div className="mt-6 p-4 bg-red-50 border border-red-500 text-red-700 rounded-md">
              There was an error processing your reservation. Please ensure all
              required fields are filled.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

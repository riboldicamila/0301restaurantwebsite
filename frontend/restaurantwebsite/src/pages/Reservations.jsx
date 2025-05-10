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
  const [shadowClass, setShadowClass] = useState("bg-black/10");

  useEffect(() => {
    const dates = [];
    const today = new Date();
    const endDate = new Date();
    endDate.setMonth(today.getMonth() + 1);

    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      if (Math.random() > 0.2) {
        dates.push(new Date(d));
      }
    }

    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShadowClass("bg-black/50");
    }, 2000);

    return () => clearTimeout(timer);
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
    <div className="min-h-[160vh] bg-blue-500 relative font-trirong">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0"
        src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746175692/3296571-uhd_2732_1440_25fps_v8uegw.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={`absolute top-0 left-0 w-full h-full ${shadowClass} z-10 transition-all duration-1000`} />
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            MAKE A RESERVATION
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Reserve your table at our authentic Thai street food restaurant and experience the vibrant flavors of Bangkok in a memorable dining experience.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Contact Information</h2>

                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Reservation Details</h2>

                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-medium mb-1">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select</option>
                    {[...Array(8).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>{`${i + 1} ${i === 0 ? "Person" : "People"}`}</option>
                    ))}
                    <option value="9+">9+ People (Please call)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={formatDate(selectedDate)}
                      readOnly
                      onClick={() => setCalendarOpen(!calendarOpen)}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  {calendarOpen && (
                    <div className="mt-2 grid grid-cols-7 gap-2 bg-white p-4 rounded-lg shadow border border-gray-200">
                      {availableDates.map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => handleDateSelect(date)}
                          className={`px-2 py-1 rounded ${selectedDate?.toDateString() === date.toDateString() ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                        >
                          {date.getDate()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-1">Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleTimeSelect(slot.id)}
                        className={`px-2 py-1 rounded border ${selectedTime === slot.id ? "bg-red-500 text-white border-red-500" : "bg-white hover:bg-gray-100 border-gray-300"}`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-gray-700 font-medium mb-1">Special Requests</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Any special requests or dietary restrictions?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition"
            >
              Confirm Reservation
            </button>
          </div>
        </form>

        {showSuccess && (
          <motion.div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Reservation submitted successfully!
          </motion.div>
        )}

        {showError && (
          <motion.div
            className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Please fill in all required fields.
          </motion.div>
        )}
      </div>
    </div>
  );
}

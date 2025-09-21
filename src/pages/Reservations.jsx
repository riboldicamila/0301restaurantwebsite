import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextAreaField from "../components/TextAreaField";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";
import Button from "../components/Button";
import AlertBanner from "../components/AlertBanner";

import { createReservation } from "../api/reservationService";

import { VIDEO_SRC, MAX_GUESTS } from "../constants/reservations";

const Reservations = () => {
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

    // refactor, api to check available dates
    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      if (Math.random() > 0.2) dates.push(new Date(d));
    }

    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShadowClass("bg-black/50"), 2000);
    return () => clearTimeout(timer);
  }, []);

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
      // refactor: improve - needs to check all fields
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    try {
      const result = await createReservation(formData);
      console.log("Reservation created:", result);

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
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  return (
    <div className="min-h-[160vh] bg-blue-500 relative font-trirong">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top z-0"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${shadowClass} z-10 transition-all duration-1000`}
      />
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
            Reserve your table at our authentic Thai street food restaurant and
            experience the vibrant flavors of Bangkok in a memorable dining
            experience.
          </motion.p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Contact Information
              </h2>
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Reservation Details
              </h2>
              <SelectField
                label="Number of Guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                maxGuests={MAX_GUESTS}
              />
              <DatePicker
                selectedDate={selectedDate}
                availableDates={availableDates}
                calendarOpen={calendarOpen}
                setCalendarOpen={setCalendarOpen}
                handleDateSelect={handleDateSelect}
              />
              <TimePicker
                selectedTime={selectedTime}
                handleTimeSelect={handleTimeSelect}
              />
            </div>
          </div>

          <TextAreaField
            label="Special Requests"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Any special requests or dietary restrictions?"
          />

          <Button type="submit" fullWidth variant="primary">
            Confirm Reservation
          </Button>
        </form>

        <AlertBanner
          type="success"
          message="Reservation submitted successfully!"
          isVisible={showSuccess}
        />
        <AlertBanner
          type="error"
          message="Please fill in all required fields."
          isVisible={showError}
        />
      </div>
    </div>
  );
};

export default Reservations;

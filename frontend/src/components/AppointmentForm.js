import React, { useState } from "react";

const AppointmentForm = ({ doctorId, onBook }) => {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && timeSlot) {
      onBook({ doctorId, date, timeSlot });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Book Appointment</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
        required
      />
      <input
        type="time"
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
        required
      />
      <button className="w-full bg-blue-500 text-white p-2 rounded">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;

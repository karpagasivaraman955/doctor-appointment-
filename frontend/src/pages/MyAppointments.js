import React, { useEffect, useState } from "react";
import { getAppointments } from "../api";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await getAppointments();
        setAppointments(data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to fetch appointments");
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="p-4 bg-gray-100 rounded mb-4 shadow"
          >
            <p><strong>Doctor:</strong> {appointment.doctor.name}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time Slot:</strong> {appointment.timeSlot}</p>
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default MyAppointments;

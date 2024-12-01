import React, { useEffect, useState } from "react";
import { getDoctors, bookAppointment } from "../api";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await getDoctors();
        setDoctors(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchDoctors();
  }, []);

  const handleBook = async () => {
    try {
      const date = prompt("Enter date (YYYY-MM-DD):");
      const timeSlot = prompt("Enter time slot:");
      await bookAppointment({ doctorId: selectedDoctor, date, timeSlot });
      alert("Appointment booked!");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
      {doctors.map((doctor) => (
        <div
          key={doctor._id}
          className="p-4 bg-gray-100 rounded mb-4 shadow cursor-pointer hover:bg-gray-200"
          onClick={() => setSelectedDoctor(doctor._id)}
        >
          <h3>{doctor.name}</h3>
          <p>Specialty: {doctor.specialty}</p>
        </div>
      ))}
      {selectedDoctor && (
        <button onClick={handleBook} className="bg-blue-500 text-white p-2 rounded">
          Book Appointment
        </button>
      )}
    </div>
  );
};

export default DoctorList;

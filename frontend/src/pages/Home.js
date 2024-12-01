import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Doctor Appointment System</h1>
      <p className="text-lg mb-6">Book appointments with your preferred doctors anytime, anywhere.</p>
      <div>
        <Link to="/doctors" className="bg-blue-500 text-white px-6 py-2 rounded mr-4">
          View Doctors
        </Link>
        <Link to="/register" className="bg-green-500 text-white px-6 py-2 rounded">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Home;

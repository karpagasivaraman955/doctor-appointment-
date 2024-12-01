import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Doctor Appointment
      </Link>
      <div>
        {localStorage.getItem("token") ? (
          <>
            <Link to="/doctors" className="px-4">
              Doctors
            </Link>
            <Link to="/appointments" className="px-4">
              My Appointments
            </Link>
            <button
              onClick={logout}
              className="px-4 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4">
              Login
            </Link>
            <Link to="/register" className="px-4">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

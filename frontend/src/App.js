import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorList from "./pages/DoctorList";
import MyAppointments from "./pages/MyAppointments";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/appointments" element={<MyAppointments />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

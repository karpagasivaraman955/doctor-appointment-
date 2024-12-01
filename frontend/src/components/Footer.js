import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      © {new Date().getFullYear()} Doctor Appointment System. All rights reserved.
    </footer>
  );
};

export default Footer;

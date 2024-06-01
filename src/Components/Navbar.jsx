// navbar.jsx
import React from "react";

const Navbar = ({ setActiveComponent }) => {
  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-lg font-bold"
          onClick={() => handleNavItemClick("Home")}
        >
          MyApp
        </div>
        <div className="flex space-x-4">
          <div
            className="text-white hover:text-gray-300"
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </div>
          <div
            className="text-white hover:text-gray-300"
            onClick={() => handleNavItemClick("About")}
          >
            About
          </div>
          <div
            className="text-white hover:text-gray-300"
            onClick={() => handleNavItemClick("Contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

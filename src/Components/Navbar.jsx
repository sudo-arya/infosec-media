import React, { useState } from "react";

const Navbar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
    setIsOpen(false); // Close the navbar on item click for smaller screens
  };

  return (
    <nav className="bg-gray-800 p-4 pt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-lg font-bold cursor-pointer nav-item"
          onClick={() => handleNavItemClick("Home")}
        >
          MyApp
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-4 ">
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </div>
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("About")}
          >
            About Us
          </div>
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Products")}
          >
            Products
          </div>
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Services")}
          >
            Upgrade
          </div>
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Rental")}
          >
            Rental Equipments
          </div>
          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Repair")}
          >
            Repair
          </div>

          <div
            className="text-white hover:text-gray-300 cursor-pointer nav-item"
            onClick={() => handleNavItemClick("Contact")}
          >
            Contact
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 pt-3">
          <hr className="pb-2" />
          <div
            className="text-white hover:text-gray-300 px-2 cursor-pointer"
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </div>
          <div
            className="text-white hover:text-gray-300  px-2 cursor-pointer"
            onClick={() => handleNavItemClick("About")}
          >
            About Us
          </div>
          <div
            className="text-white hover:text-gray-300  px-2 cursor-pointer"
            onClick={() => handleNavItemClick("Services")}
          >
            Service
          </div>
          <div
            className="text-white hover:text-gray-300  px-2 cursor-pointer"
            onClick={() => handleNavItemClick("Rental")}
          >
            Rental Equipments
          </div>
          <div
            className="text-white hover:text-gray-300  px-2 cursor-pointer"
            onClick={() => handleNavItemClick("Products")}
          >
            Products
          </div>
          <div
            className="text-white hover:text-gray-300  px-2 cursor-pointer"
            onClick={() => handleNavItemClick("Contact")}
          >
            Contact
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

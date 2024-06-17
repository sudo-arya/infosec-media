import React, { useState } from "react";

const Navbar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponentState] = useState("Home");

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
    setActiveComponentState(componentName);
    setIsOpen(false); // Close the navbar on item click for smaller screens
  };

  const getNavItemClass = (componentName) =>
    activeComponent === componentName
      ? "text-white bg-gray-900 py-2 px-4 rounded-lg cursor-pointer"
      : "text-white bg-gray-800 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700";

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
            className={`nav-item ${getNavItemClass("Home")}`}
            onClick={() => handleNavItemClick("Home")}
          >
            Home
          </div>

          <div
            className={`nav-item ${getNavItemClass("About")}`}
            onClick={() => handleNavItemClick("About")}
          >
            About Us
          </div>
          <div
            className={`nav-item ${getNavItemClass("Products")}`}
            onClick={() => handleNavItemClick("Products")}
          >
            Products
          </div>
          <div
            className={`nav-item ${getNavItemClass("Services")}`}
            onClick={() => handleNavItemClick("Services")}
          >
            Upgrade
          </div>
          <div
            className={`nav-item ${getNavItemClass("Rental")}`}
            onClick={() => handleNavItemClick("Rental")}
          >
            Rental Equipments
          </div>
          <div
            className={`nav-item ${getNavItemClass("Repair")}`}
            onClick={() => handleNavItemClick("Repair")}
          >
            Repair
          </div>
          <div
            className={`nav-item ${getNavItemClass("Contact")}`}
            onClick={() => handleNavItemClick("Contact")}
          >
            Contact
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed right-0 top-0 w-2/4 max-w-sm bg-gray-800 h-5/12 rounded-lg mt-8 z-20">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <div
                className={getNavItemClass("Home")}
                onClick={() => handleNavItemClick("Home")}
              >
                Home
              </div>
              <div
                className={getNavItemClass("About")}
                onClick={() => handleNavItemClick("About")}
              >
                About Us
              </div>
              <div
                className={getNavItemClass("Products")}
                onClick={() => handleNavItemClick("Products")}
              >
                Products
              </div>
              <div
                className={getNavItemClass("Services")}
                onClick={() => handleNavItemClick("Services")}
              >
                Upgrade
              </div>
              <div
                className={getNavItemClass("Rental")}
                onClick={() => handleNavItemClick("Rental")}
              >
                Rental Equipments
              </div>
              <div
                className={getNavItemClass("Repair")}
                onClick={() => handleNavItemClick("Repair")}
              >
                Repair
              </div>
              <div
                className={getNavItemClass("Contact")}
                onClick={() => handleNavItemClick("Contact")}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

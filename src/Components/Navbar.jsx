// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sidewayLogos from "../Assets/Infosec media solutions logo final files/Infosec media solutions logo  AI liner.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNavItemClass = (path) =>
    location.pathname === path
      ? "text-white cs-1 font-semibold bg-gray-90 py-2 px-3 rounded-lg cursor-pointer"
      : "text-white font-semibold cs-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-cs4 hover:text-black ";

  return (
    <nav
      className={
        isSmallScreen ? "cs-2 p-2 pt-2 shadow-md" : "cs-2 p-4 pt-3 shadow-md"
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold cursor-pointer nav-item">
          <Link to="/">
            <img
              src={sidewayLogos}
              alt="logo"
              className={isSmallScreen ? "w-40 ml-2" : "w-48"}
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white rounded-xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="menu"
              className="mr-3"
              style={{ fill: "#778DA9", stroke: "#415A77" }}
            >
              <path d="M8 3H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 3zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 3zM8 13H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 13zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 13z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-2">
          <Link className={getNavItemClass("/")} to="/">
            Home
          </Link>
          <Link className={getNavItemClass("/about")} to="/about">
            About Us
          </Link>
          <Link className={getNavItemClass("/amc")} to="/amc">
            AMC
          </Link>
          <Link className={getNavItemClass("/products")} to="/products">
            Products
          </Link>
          <Link className={getNavItemClass("/services")} to="/services">
            Upgrade
          </Link>
          <Link className={getNavItemClass("/rental")} to="/rental">
            Rent Equipments
          </Link>
          <Link className={getNavItemClass("/repair")} to="/repair">
            Repair
          </Link>
          <Link className={getNavItemClass("/contact")} to="/contact">
            Contact
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transform transition duration-1000 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed right-0 top-0 w-2/4 max-w-sm cs-2 h-5/12 rounded-lg mt-3 z-30">
            <div className="flex justify-end pl-4 pr-4 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8 cs-1 rounded-lg p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ fill: "#415A77", stroke: "#778DA9" }}
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
            <div className="flex flex-col space-y-2 pl-4 pr-4 mt-4 mb-4">
              <Link className={getNavItemClass("/")} to="/">
                Home
              </Link>
              <Link className={getNavItemClass("/about")} to="/about">
                About Us
              </Link>
              <Link className={getNavItemClass("/amc")} to="/amc">
                AMC
              </Link>
              <Link className={getNavItemClass("/products")} to="/products">
                Products
              </Link>
              <Link className={getNavItemClass("/services")} to="/services">
                Upgrade
              </Link>
              <Link className={getNavItemClass("/rental")} to="/rental">
                Rent Equipments
              </Link>
              <Link className={getNavItemClass("/repair")} to="/repair">
                Repair
              </Link>
              <Link className={getNavItemClass("/contact")} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

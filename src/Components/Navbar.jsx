import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="flex space-x-4">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setPage("home")}
          >
            Home
          </button>
          {/* Add other links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

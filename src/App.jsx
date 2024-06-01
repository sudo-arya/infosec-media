import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="container mx-auto p-4">
        {page === "home" && <Home />}
        {/* Add other pages here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

// app.jsx
import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      // Add cases for other components if needed
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="container mx-auto p-4">{renderComponent()}</div>
      <Footer />
    </div>
  );
}

export default App;

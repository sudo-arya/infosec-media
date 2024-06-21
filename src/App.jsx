// app.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Repair from "./Components/Repair";
import Select from "./Components/Select";
import Rental from "./Components/Rental";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");
  // Scroll to top whenever activeComponent changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeComponent]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home setActiveComponent={setActiveComponent} />;
      case "About":
        return <About setActiveComponent={setActiveComponent} />;
      case "Services":
        return <Services setActiveComponent={setActiveComponent} />;
      case "Repair":
        return <Repair setActiveComponent={setActiveComponent} />;
      case "Select":
        return <Select setActiveComponent={setActiveComponent} />;
      case "Rental":
        return <Rental setActiveComponent={setActiveComponent} />;
      case "Products":
        return <Products setActiveComponent={setActiveComponent} />;
      case "Contact":
        return <Contact setActiveComponent={setActiveComponent} />;
      // Add cases for other components if needed
      default:
        return null;
    }
  };

  return (
    <div className="cs-5">
      <Navbar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="container mx-auto p-4 mt-0">{renderComponent()}</div>
      {/* {removed mx-auto p-4} */}
      <Footer
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
}

export default App;

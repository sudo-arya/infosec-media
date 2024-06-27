// App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import Amc from "./Components/Amc";
import Seo from "./Components/Seo";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="cs-5">
        <ScrollToTop />
        <Navbar />
        <Seo
          title="Home Page - Infosec Media"
          description="Infosec Media is a leading provider of computer sales, service, and corporate rentals. We cater to a range of customer requirements, from desktops to workstations, and provide premier services to consumers and large corporations alike."
          keywords="Infosec Media, computer sales, computer service, corporate rentals, Apple, Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel, AMD"
        />
        <div className="container mx-auto p-4 mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/select" element={<Select />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/products" element={<Products />} />
            <Route path="/amc" element={<Amc />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

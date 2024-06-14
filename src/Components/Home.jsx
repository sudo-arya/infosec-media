import React, { useState, useEffect, useRef } from "react";
import imgpurchase from "../Assets/purchase.jpg";
import imgnewmacbook from "../Assets/new-macbook.jpg";
import imgrent from "../Assets/rent.jpg";
import imgrepair from "../Assets/repair.jpg";
import imgupgrade from "../Assets/upgrade.jpg";


const images = [
  `${imgnewmacbook}`,
  `${imgupgrade}`,
  `${imgrent}`,
  `${imgrepair}`,
  // Add more image URLs here
];

const StatItem = ({ target, label }) => {
  const numberRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const target = +element.getAttribute("data-target");
            const duration = 2000; // Duration of animation in milliseconds
            const start = 0;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const currentNumber = Math.floor(
                progress * (target - start) + start
              );
              element.textContent = currentNumber;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              }
            };

            requestAnimationFrame(updateCounter);

            observer.unobserve(element); // Stop observing the element once animation starts
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is visible
      }
    );

    observer.observe(numberRef.current);
  }, [target]);

  return (
    <div className="stat-item text-center p-4">
      <div
        ref={numberRef}
        data-target={target}
        className="number text-4xl font-bold text-gray-600"
      >
        0
      </div>
      <p className="text-gray-500 mt-2">{label}</p>
    </div>
  );
};

const Home = ({ setActiveComponent }) => {
  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
    
  };

  const [currentIndex, setCurrentIndex] = useState(0);


  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600); // Adjust the threshold as per your requirement
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize initially to set the initial state
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="min-h-screen flex-col justify-center items-center">
      {/* <div>home</div> */}
      <div className="relative w-full mx-auto  mt-0" style={{ height: "69vh" }}>
        {/* {add w-screen for full width} */}
        <div className="overflow-hidden relative h-full">
          <div
            className="whitespace-nowrap transition-transform duration-500 h-full"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="inline-block w-full h-full object-cover object-center"
              />
            ))}
          </div>
        </div>
        <button
          className={
            isSmallScreen
              ? "absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 hover:bg-gray-500"
              : "absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 min-h-full hover:bg-gray-500"
          }
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="20"
            id="arrow"
            style={{
              fill: "white",
            }}
          >
            <path
              fillRule="evenodd"
              d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"
            ></path>
          </svg>
        </button>
        <button
          className={
            isSmallScreen
              ? "absolute right-0  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 hover:bg-gray-500"
              : "absolute right-0  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 min-h-full hover:bg-gray-500"
          }
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="20"
            id="arrow"
            style={{
              transform: "rotate(180deg)",
              fill: "white",
            }}
          >
            <path
              fillRule="evenodd"
              d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"
            ></path>
          </svg>
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-4">
        The Single Source for All Your IT Needs
      </h1>
      <div className="container mx-auto px-4 relative">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-20 mb-4">
          Products
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>
        {/* Left blur */}
        {/* <div className="absolute inset-y-0 left-0 w- bg-gradient-to-r from-white/80 to-transparent pointer-events-none"></div> */}
        {/* Left blur */}
        {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-200/100 to-transparent pointer-events-none"></div> */}

        {/* Products cards starts */}
        {/*can add icon-grid2 */}
        <div className="flex space-x-4 overflow-x-auto pb-4 rounded-lg">
          <div className=" w-52" style={{ backgroundColor: "white" }}>
            {/* Your content goes here */}
            &nbsp; &nbsp;
          </div>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1478610778/photo/hcmc-vietnam-macbook-pro-14-inches-m2.jpg?s=612x612&w=0&k=20&c=Rl05e5NYO0YS9DuvgeE4AUmjJw-FgD37_mpTCKVyeng="
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Macbook</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          {/* Add more cards here */}
          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://imgs.search.brave.com/J0GhjQqcfssHBAIdRzup3Bducz5e2FwbvCa8AIXKkKk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjAxMzE5MTQtMmU0/NjlhMGU4NjA3P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TWpCOGZHbHRZ/V044Wlc1OE1IeDhN/SHg4ZkRBPQ.jpeg"
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">iMac</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://imgs.search.brave.com/m0-LyFUCWuY_HFOVKWSnfPci_fWdnzLq3cvgwGl1OHY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L0stWWhI/LTMybjY2MW5QQ2Nf/WVU4dEVFdjlZQT0v/NDAweDAvYXJ0aWNs/ZS1uZXcvMjAyMy8w/Ni9NYWMtU3R1ZGlv/LURlc2suanBnP2xv/c3N5"
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mac Studio</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://imgs.search.brave.com/-oPqJP5nurt4lK_eKQx2Ia15fGHTVzIyUs7ss4ya_Bw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS8zMzkyMC02/MDM0NS1NYWMtUHJv/LVNJZGUteGwuanBn"
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mac Pro</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">PC & Workstation</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://imgs.search.brave.com/ftc60KrdgBbri3SGYTLIrS7LlX6-jZCVRhRO78H5SWQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmL2E0/Lzk2LzFmYTQ5NjBk/YjVmY2NkMmE4NTEw/N2NmMjI5ZWM2MzQ3/LmpwZw"
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Audio Studio</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <button
            className="transition duration-300 ease-in-out md:contrast-75 hover:contrast-100 allproduct flex-shrink-0"
            onClick={() => handleNavItemClick("Products")}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://imgs.search.brave.com/A1rY5MKad083fQ0sbTbiopzDszLWqoBqw_as48gjk_A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbXMt/YXNzZXRzLnR1dHNw/bHVzLmNvbS9jZG4t/Y2dpL2ltYWdlL3dp/ZHRoPTg1MC91cGxv/YWRzL3VzZXJzLzE4/MDkvcG9zdHMvMzA4/MzUvaW1hZ2UtdXBs/b2FkL21vZGVybl93/b3Jrc3RhdGlvbl93/aXRoX2xhcHRvcF9h/bmRfZmxvd2Vycy5q/cGc"
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Softwares</div>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #tag2
                </span>
              </div>
            </div>
          </button>

          <div className=" w-52" style={{ backgroundColor: "white" }}>
            {/* Your content goes here */}
            &nbsp; &nbsp;
          </div>
          {/* Right blur */}
          {/* <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/70 to-transparent pointer-events-none"></div> */}
        </div>
        {/* Redirect button */}
        <div className="flex items-center justify-center pt-6">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 allproduct"
            onClick={() => handleNavItemClick("Products")}
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Services  */}
      <div className="bg-gray-100">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-20 pt-6 mb-4">
          Services
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>

        {/* Services list */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center">
          <button
            onClick={() => handleNavItemClick("Products")}
            className="flex-grow"
          >
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
              <img
                className="w-full h-48 object-cover"
                src={imgpurchase}
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Purchase With Us</div>
                <p className="text-gray-700 text-base">
                  Apple Macintosh & PC (windows) computers are available with us
                  for high-end Graphics & Editing purposes.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #buy
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #purchase
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleNavItemClick("Services")}
            className="flex-grow"
          >
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
              <img
                className="w-full h-48 object-cover"
                src={imgupgrade}
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Upgradation</div>
                <p className="text-gray-700 text-base">
                  Upgrade of Apple Macintosh Laptop <br />
                  (MacBook Air/Pro) & Desktop (iMac/MacPro/Mac mini) <br />
                  is as easy as windows.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #upgrade
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #make-it-new
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleNavItemClick("Rental")}
            className="flex-grow"
          >
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
              <img
                className="w-full h-48 object-cover"
                src={imgrent}
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Rent Device</div>
                <p className="text-gray-700 text-base">
                  Apple Macintosh & PC (windows) computers are available with us
                  for high-end Graphics & Editing purposes.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #rent
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #low-cost
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
              </div>
            </div>
          </button>

          <button
            onClick={() => handleNavItemClick("Repair")}
            className="flex-grow"
          >
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
              <img
                className="w-full h-48 object-cover"
                src={imgrepair}
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> Repair Services</div>
                <p className="text-gray-700 text-base">
                  Swift, affordable repairs for all your devices. From hardware
                  fixes to software solutions, trust us to keep your devices
                  running smoothly.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #repair
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #quick-fix
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className=" flex item-center justify-center md:pt-6 pt-16 md:mt-20 pb-4">
        <div class="animated-gradient w-full md:rounded-full rounded-3xl flex-col item-center justify-center">
          <div className="text-white  flex item-center justify-center pt-8 md:text-4xl text-base text-center">
            We Provide the Best Service in Industry
          </div>
          <div className="text-white flex items-center justify-center md:pt-5 pt-1">
            <button
              className="md:w-48 pt-3 pb-3 bg-gray-800 flex items-center justify-between px-4 rounded-full allproduct hover:bg-gray-600"
              onClick={() => handleNavItemClick("Contact")}
            >
              <div className="flex items-center justify-between w-full">
                <div className="ml-2">Contact Us Today</div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    style={{ fill: "white" }}
                    viewBox="0 0 32 32"
                    id="arrow"
                  >
                    <path d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Authorized Seller of  */}
      <div className="mt-20 md:mt-28">
        <h1 className="text-2xl font-semibold text-center text-gray-800  mb-4">
          Authorized Seller for Brands
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 " />
        </div>
        <div
          className={
            isSmallScreen
              ? "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center icon-grid"
              : "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-14 p-4 items-center justify-center icon-grid3 pb-12"
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              id="apple"
              width="160"
              height="72"
            >
              <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              viewBox="0 0 192.756 192.756"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M2.834 96.378c0-21.826 41.882-39.52 93.544-39.52 51.663 0 93.543 17.694 93.543 39.52 0 21.825-41.881 39.521-93.543 39.521-51.662-.001-93.544-17.696-93.544-39.521z"
                  fill="#1b3771"
                />
                <path
                  fill="#fff"
                  d="M162.209 115.869h-21.652V77.32h21.652v5.102h-16.014v9.768h15.549v5.101h-15.549v13.475h16.014v5.103zM36.185 110.766h11.586l16.762-35.584L83.7 115.869h-6.082l-4.43-9.463H55.877l-4.429 9.463h-20.9V77.32h5.637v33.446zM129.674 77.32h5.637v38.549h-5.637V77.32zM111.836 69.34c4.469 0 8.736 1.053 12.594 3.354v7.898c-3.795-3.278-8.109-5.089-13.172-5.089-10.617 0-18.729 8.611-18.729 18.822 0 10.086 8.048 18.698 18.601 18.698 5.24 0 9.408-1.963 13.301-5.342v8.031c-3.898 2.223-8.615 3.475-13.107 3.475-14.002 0-25.622-10.834-25.622-24.674-.001-14.152 11.681-25.173 26.134-25.173z"
                />
                <path
                  fill="#1b3771"
                  d="M71.433 101.701l-6.9-15.27-6.901 15.27h13.801z"
                />
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 40 40"
              viewBox="0 0 40 40"
              width="160"
              height="72"
              id="hp"
            >
              <switch>
                <g>
                  <path
                    fill="#00a4d6"
                    fillRule="evenodd"
                    d="M36,20c0,8.8-7.2,16-16,16c-0.5,0-0.9,0-1.4-0.1l3.6-8.9h4.9c0.8,0,1.5-0.5,1.8-1.3l4-10
			c0.5-1.3-0.4-2.7-1.8-2.7h-6.5L19,27l-3.4,8.4C8.9,33.5,4,27.3,4,20C4,12.3,9.4,6,16.5,4.4L12.3,15L7.5,27h3.2l4.8-12h3l-4.8,12
			h3.2l4.5-11.3C22,14.4,21,13,19.6,13h-3.3l3.6-9H20C28.8,4,36,11.2,36,20z M30,15h-3l-4,10h3L30,15z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </switch>
            </svg>
          </div>

          {/* here here */}
          <div>
            <img
              alt="OWC Logo"
              class="image square"
              src="https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX100_.jpg"
              srcset="https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX56_.jpg 56w, https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX86_.jpg 86w, https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX100_.jpg 100w, https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX128_.jpg 128w, https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX200_.jpg 200w, https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/aa5ad236525b57dd39311a3dccf400a0.w400.h400._CR0%2C0%2C400%2C400_SX400_.jpg 400w"
              width="120"
              data-feature="cf"
              data-testid="image"
            ></img>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              width="160"
              height="72"
              id="dell"
            >
              <path d="M17.562,1.373c0.004,0.002,0.007,0.004,0.01,0.006c0.017,0.009,0.036,0.016,0.054,0.025L17.562,1.373z"></path>
              <polygon points="20.764 20.213 20.759 20.218 20.758 20.219"></polygon>
              <path d="M11.668 1.231c-.004 0-.009 0-.013 0 0 0-.001 0-.001 0L11.668 1.231 11.668 1.231zM1.992 5.424l.001-.001C2.002 5.409 2.01 5.395 2.019 5.381L1.992 5.424z"></path>
              <polygon points="7.253 9.882 7.255 9.884 7.258 9.886"></polygon>
              <path
                fill="#0083CA"
                d="M11.628,0.036h0.744c3.619,0.204,6.199,1.578,8.112,3.504c1.913,1.926,3.327,4.466,3.516,8.1v0.72c-0.184,3.692-1.623,6.129-3.516,8.112c-1.989,1.883-4.434,3.31-8.124,3.492h-0.732C8.01,23.76,5.429,22.386,3.516,20.46C1.603,18.534,0.189,15.994,0,12.36v-0.72c0.009-0.003,0.014-0.01,0.012-0.024c0.181-3.62,1.603-6.187,3.504-8.088C5.426,1.618,8.033,0.234,11.628,0.036L11.628,0.036z M9.276,1.752c-0.713,0.191-1.352,0.433-1.932,0.72c-1.764,0.872-3.219,2.12-4.236,3.72c-0.993,1.561-1.852,3.57-1.728,6.204c0.078,1.661,0.457,3.057,1.056,4.248c1.182,2.351,2.982,4.083,5.472,5.136c1.232,0.521,2.758,0.886,4.476,0.804c1.648-0.078,3.077-0.449,4.26-1.044c2.319-1.166,4.147-2.965,5.16-5.448c0.512-1.256,0.9-2.707,0.816-4.464c-0.159-3.329-1.513-5.587-3.3-7.308c-0.884-0.852-1.949-1.576-3.204-2.1c-1.218-0.508-2.803-0.885-4.5-0.804C10.782,1.456,9.994,1.56,9.276,1.752L9.276,1.752z"
              ></path>
              <path
                fill="#0083CA"
                d="M10.896,8.892c0.38,0.252,0.769,0.495,1.128,0.768c-0.811,0.509-1.606,1.034-2.412,1.548c0.122,0.094,0.262,0.17,0.384,0.264c0.813-0.515,1.626-1.03,2.436-1.548c0.363,0.225,0.721,0.455,1.056,0.708c-0.812,0.513-1.596,1.052-2.4,1.572c0.119,0.097,0.265,0.167,0.396,0.252c0.831-0.509,1.642-1.038,2.46-1.56V9.192h1.8v3.396c0.508,0.028,1.068,0.004,1.596,0.012v1.596h-3.396v-1.62c-0.998,0.606-2.02,1.292-3.024,1.932c-1.045-0.679-2.053-1.395-3.096-2.076c-0.302,0.958-1.02,1.679-2.208,1.764c-0.741,0.053-1.583-0.04-2.436,0V9.192c1.067,0.071,2.238-0.143,3.084,0.12c0.748,0.232,1.278,0.829,1.524,1.572C8.832,10.228,9.86,9.556,10.896,8.892L10.896,8.892z M4.896,10.8v1.8c0.429,0.002,0.755,0.027,1.008-0.168c0.377-0.29,0.452-1.009,0.12-1.392c-0.222-0.256-0.596-0.309-1.116-0.276C4.894,10.766,4.895,10.783,4.896,10.8z M17.808,9.192h1.8V12.6h1.584v1.596h-3.396V9.228C17.795,9.211,17.794,9.194,17.808,9.192L17.808,9.192z"
              ></path>
            </svg>
          </div>
          <div>
            {/* <img src={blackmagic} /> */}
            <svg
              viewBox="-20 -20 215 122"
              width="160"
              id="blackmagic"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m-20-20h215v122h-215z" fill="#111" />
              <path
                d="m141.613 61.921a2.91 2.91 0 0 1 -2.91-2.911v-5.589a2.911 2.911 0 0 1 2.91-2.91h5.588a2.912 2.912 0 0 1 2.912 2.91v5.589a2.91 2.91 0 0 1 -2.912 2.911z"
                fill="#a7423b"
              />
              <path
                d="m141.613 49.702a3.723 3.723 0 0 0 -3.718 3.719v5.589a3.723 3.723 0 0 0 3.718 3.72h5.588a3.724 3.724 0 0 0 3.72-3.72v-5.589a3.724 3.724 0 0 0 -3.72-3.719zm-2.101 9.308v-5.589c0-1.159.943-2.102 2.102-2.102h5.588c1.16 0 2.104.943 2.104 2.102v5.589c0 1.16-.943 2.103-2.104 2.103h-5.588a2.105 2.105 0 0 1 -2.102-2.103"
                fill="#faa634"
              />
              <path
                d="m141.613 47.334a2.91 2.91 0 0 1 -2.91-2.91v-5.589a2.91 2.91 0 0 1 2.91-2.91h5.588a2.911 2.911 0 0 1 2.912 2.91v5.589a2.911 2.911 0 0 1 -2.912 2.91z"
                fill="#df6d36"
              />
              <path
                d="m141.613 35.117a3.722 3.722 0 0 0 -3.718 3.718v5.589a3.723 3.723 0 0 0 3.718 3.719h5.588a3.724 3.724 0 0 0 3.72-3.719v-5.589a3.723 3.723 0 0 0 -3.72-3.718zm-2.101 9.307v-5.589c0-1.159.943-2.101 2.102-2.101h5.588c1.16 0 2.104.942 2.104 2.101v5.589a2.105 2.105 0 0 1 -2.104 2.102h-5.588a2.104 2.104 0 0 1 -2.102-2.102"
                fill="#faa634"
              />
              <path
                d="m141.613 32.786a2.911 2.911 0 0 1 -2.91-2.912v-5.588a2.91 2.91 0 0 1 2.91-2.91h5.588a2.911 2.911 0 0 1 2.912 2.91v5.588a2.912 2.912 0 0 1 -2.912 2.912z"
                fill="#ba683d"
              />
              <path
                d="m141.613 20.567a3.723 3.723 0 0 0 -3.718 3.719v5.588a3.723 3.723 0 0 0 3.718 3.72h5.588a3.724 3.724 0 0 0 3.72-3.72v-5.588a3.724 3.724 0 0 0 -3.72-3.719zm-2.101 9.307v-5.588c0-1.159.943-2.102 2.102-2.102h5.588c1.16 0 2.104.943 2.104 2.102v5.588c0 1.16-.943 2.104-2.104 2.104h-5.588a2.106 2.106 0 0 1 -2.102-2.104"
                fill="#faa634"
              />
              <g fill="#fff">
                <path d="m24.267 46.057h3.561c1.253 0 2.246-.29 2.979-.874.734-.582 1.102-1.367 1.102-2.353 0-1.646-.938-2.672-2.811-3.078 1.166-.633 1.749-1.535 1.749-2.707 0-.981-.343-1.75-1.027-2.307s-1.691-.836-3.02-.836h-2.533zm2.206-11.377c2.237 0 3.355.811 3.355 2.431 0 1.615-1.106 2.423-3.32 2.423h-1.306v-4.854zm.838 5.646c2.396 0 3.592.83 3.592 2.49 0 .749-.269 1.346-.811 1.793-.541.448-1.331.671-2.372.671h-2.518v-4.954zm5.797-6.424h.862v12.155h-.862zm8.005 11.489c-.127 0-.191-.136-.191-.409v-4.997c0-.68-.234-1.199-.705-1.557-.469-.357-1.066-.536-1.791-.536-.817 0-1.679.283-2.584.85v.877c.875-.68 1.69-1.02 2.443-1.02 1.182 0 1.773.547 1.773 1.641v1.019c-1.494.077-2.644.366-3.448.869-.805.504-1.207 1.192-1.207 2.064 0 .566.209 1.045.625 1.441.418.396.927.593 1.528.593.828 0 1.663-.331 2.502-.993.035.401.09.667.165.797.076.13.214.196.41.196.342 0 .882-.276 1.618-.831v-.711c-.596.472-.975.707-1.138.707m-1.054-.907c-.753.69-1.494 1.035-2.225 1.035-.452 0-.828-.129-1.13-.385-.301-.256-.451-.572-.451-.944 0-.666.36-1.212 1.081-1.641.721-.428 1.63-.623 2.725-.582zm6.494-6.592c-1.13 0-2.061.4-2.788 1.199-.726.8-1.091 1.829-1.091 3.091 0 1.209.361 2.185 1.083 2.929.72.744 1.666 1.116 2.835 1.116.685 0 1.425-.136 2.225-.411v-.891c-.753.311-1.471.466-2.154.466-.938 0-1.687-.298-2.244-.893-.558-.596-.838-1.4-.838-2.412 0-.995.28-1.803.839-2.425.559-.623 1.285-.934 2.178-.934.619 0 1.312.17 2.078.509v-.947c-.795-.265-1.503-.397-2.123-.397m3.403-3.99h.848v12.155h-.848zm5.391 4.146-4.415 3.807 5.056 4.202h1.17l-5.061-4.206 4.382-3.803z" />
                <path d="m57.142 38.048v8.009h.85v-5.617c.679-1.142 1.483-1.713 2.413-1.713.64 0 1.148.239 1.531.719.381.479.569 1.162.569 2.05v4.561h.863v-5.46c.388-.654.764-1.13 1.129-1.426s.794-.444 1.286-.444c.66 0 1.174.248 1.537.744.365.497.548 1.177.548 2.042v4.544h.849v-4.918c0-.981-.254-1.767-.764-2.359-.508-.593-1.178-.888-2.006-.888-1.101 0-2.025.641-2.778 1.922-.5-1.281-1.363-1.922-2.589-1.922-1.052 0-1.903.522-2.554 1.566h-.035v-1.41zm18.563 7.343c-.129 0-.192-.136-.192-.409v-4.997c0-.68-.235-1.199-.705-1.557-.47-.357-1.065-.536-1.791-.536-.817 0-1.679.283-2.583.85v.877c.874-.68 1.689-1.02 2.442-1.02 1.183 0 1.773.547 1.773 1.641v1.019c-1.493.077-2.643.366-3.447.869-.806.504-1.208 1.192-1.208 2.064 0 .566.209 1.045.626 1.441s.926.593 1.528.593c.828 0 1.661-.331 2.501-.993.035.401.089.667.165.797s.213.196.409.196c.343 0 .882-.276 1.619-.831v-.711c-.595.472-.975.707-1.137.707m-1.056-.907c-.753.69-1.495 1.035-2.225 1.035-.452 0-.829-.129-1.13-.385s-.452-.572-.452-.944c0-.666.361-1.212 1.082-1.641.721-.428 1.63-.623 2.725-.582zm9.295-6.436h-3.209c-1.095 0-1.935.266-2.52.796-.586.531-.879 1.218-.879 2.061 0 .591.181 1.129.545 1.614.362.485.894.832 1.597 1.041v.035c-1.069.308-1.604.744-1.604 1.306 0 .557.434.938 1.3 1.141v.035c-1.555.249-2.332.896-2.332 1.941 0 .646.303 1.163.91 1.555.608.392 1.47.587 2.588.587 1.123 0 2-.206 2.631-.622.63-.415.946-.984.946-1.71 0-.614-.197-1.107-.591-1.479-.393-.37-1.154-.588-2.285-.652s-1.805-.166-2.021-.306c-.218-.14-.326-.325-.326-.559 0-.197.084-.372.253-.523.168-.152.583-.313 1.244-.484.661-.172 1.19-.347 1.588-.524s.74-.46 1.027-.85c.287-.389.43-.917.43-1.585 0-.743-.367-1.452-1.104-2.125h1.812zm-.848 9.852c0 .465-.244.841-.732 1.126s-1.146.427-1.972.427c-1.82 0-2.729-.494-2.729-1.483 0-.99.965-1.484 2.895-1.484 1.692 0 2.538.473 2.538 1.414m-.679-7.017a2.06 2.06 0 0 1 -.632 1.513c-.42.421-.922.633-1.508.633a2.018 2.018 0 0 1 -1.504-.637 2.137 2.137 0 0 1 -.617-1.543c0-.582.204-1.077.609-1.483.405-.407.904-.61 1.496-.61.596 0 1.104.208 1.523.624.423.415.633.916.633 1.503m2.502-6.982h.863v1.458h-.863zm0 4.147h.863v8.009h-.863zm6.287-.156c-1.13 0-2.061.4-2.788 1.199-.728.8-1.091 1.829-1.091 3.091 0 1.209.36 2.185 1.082 2.929.721.744 1.667 1.116 2.835 1.116.685 0 1.426-.136 2.225-.411v-.891c-.752.311-1.47.466-2.153.466-.938 0-1.686-.298-2.245-.893-.559-.596-.837-1.4-.837-2.412 0-.995.279-1.803.839-2.425.559-.623 1.284-.934 2.178-.934.62 0 1.312.17 2.078.509v-.947c-.795-.265-1.503-.397-2.123-.397" />
              </g>
              <path
                d="m100.707 33.901v4.634c-.839-.429-1.625-.644-2.36-.644-1.157 0-2.119.396-2.887 1.187-.766.791-1.148 1.781-1.148 2.973 0 1.174.389 2.163 1.168 2.968.777.806 1.732 1.207 2.867 1.207.845 0 1.632-.26 2.36-.782v.612h.863v-12.155zm0 10.761c-.693.487-1.411.73-2.15.73-.955 0-1.749-.322-2.386-.967-.637-.646-.954-1.455-.954-2.426 0-.954.299-1.738.894-2.35.595-.614 1.353-.921 2.272-.921.786 0 1.562.249 2.324.747zm4.033-.203a3.046 3.046 0 0 1 -.957-2.272c0-.14.01-.28.025-.417h6.314c0-1.195-.342-2.139-1.028-2.835-.684-.695-1.522-1.044-2.515-1.044-1.058 0-1.934.386-2.629 1.156-.697.77-1.045 1.742-1.045 2.916 0 1.238.378 2.259 1.132 3.061s1.708 1.202 2.861 1.202c1.139 0 2.164-.353 3.081-1.059v-.965c-.969.793-1.961 1.189-2.977 1.189-.868.001-1.623-.309-2.262-.932m.137-5.115a2.532 2.532 0 0 1 1.704-.617c1.39 0 2.233.784 2.537 2.35h-5.195c.156-.746.473-1.324.954-1.733m8.773-1.452c-.72 0-1.329.214-1.831.641-.503.428-.756.947-.756 1.557 0 .43.136.821.405 1.172.272.351.86.707 1.769 1.067.908.36 1.467.659 1.677.895.208.235.312.493.312.771 0 .408-.159.743-.475 1.005-.319.261-.724.391-1.219.391-.734 0-1.575-.243-2.523-.735v.835c.796.492 1.597.736 2.406.736.743 0 1.368-.213 1.873-.641.506-.427.76-.952.76-1.573 0-.465-.14-.886-.419-1.265-.279-.377-.872-.744-1.779-1.098-.903-.353-1.459-.645-1.66-.874a1.111 1.111 0 0 1 -.303-.75c0-.383.165-.704.495-.965.331-.26.737-.391 1.218-.391.649 0 1.381.274 2.192.821v-.919c-.772-.452-1.485-.68-2.142-.68m3.744-3.991h.863v1.458h-.863zm0 4.147h.863v8.009h-.863zm9.088 0h-3.21c-1.095 0-1.935.266-2.521.796-.586.531-.878 1.218-.878 2.061 0 .591.181 1.129.544 1.614.362.485.896.832 1.597 1.041v.035c-1.069.308-1.603.744-1.603 1.306 0 .557.433.938 1.3 1.141v.035c-1.557.249-2.333.896-2.333 1.941 0 .646.304 1.163.911 1.555.606.392 1.47.587 2.587.587 1.122 0 1.999-.206 2.631-.622.63-.415.945-.984.945-1.71 0-.614-.196-1.107-.59-1.479-.393-.37-1.155-.588-2.285-.652-1.131-.064-1.804-.166-2.021-.306-.219-.14-.326-.325-.326-.559 0-.197.086-.372.253-.523.168-.152.584-.313 1.244-.484.661-.172 1.191-.347 1.588-.524.398-.177.74-.46 1.027-.85.287-.389.431-.917.431-1.585 0-.743-.368-1.452-1.104-2.125h1.812v-.693zm-.849 9.852c0 .465-.243.841-.732 1.126-.488.285-1.145.427-1.972.427-1.82 0-2.731-.494-2.731-1.483 0-.99.967-1.484 2.896-1.484 1.693 0 2.539.473 2.539 1.414m-.68-7.017a2.07 2.07 0 0 1 -.63 1.513 2.059 2.059 0 0 1 -1.508.633 2.017 2.017 0 0 1 -1.504-.637 2.133 2.133 0 0 1 -.617-1.543c0-.582.202-1.077.608-1.483.405-.407.904-.61 1.496-.61.596 0 1.104.208 1.524.624.42.415.631.916.631 1.503m2.361-2.835v8.009h.849v-5.617c.686-1.142 1.559-1.713 2.62-1.713 1.452 0 2.178.923 2.178 2.769v4.561h.85v-4.883c0-1.027-.27-1.831-.811-2.411-.539-.581-1.262-.871-2.165-.871-1.092 0-1.971.516-2.637 1.549h-.035v-1.393z"
                fill="#9d9fa2"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="72"
              viewBox="35.433 35.353 1062.992 155.711"
              id="lenovo"
            >
              <g fill="#005e9d">
                <path d="M1098.426 166.63v19.137h-3.21v-14.748h-.203l-5.322 14.748h-2.763l-5.282-14.748v14.748h-3.251V166.63h4.836l5.322 14.992 5.037-14.992h4.836M1076.324 166.63v2.762h-6.217v16.373h-3.21v-16.373h-6.214v-2.762h15.641M995.96 138.067c4.833-15.643 4.833-24.865.203-30.879-3.455-4.144-8.493-6.216-16.13-6.216-17.023 0-26.45 9.67-34.049 33.884-4.875 15.886-4.875 25.108-.244 31.083 3.21 3.94 8.531 6.013 16.13 6.013 16.78 0 26.49-9.466 34.09-33.885zm66.55-35.023c6.662 8.33 8.085 18.894 4.144 31.814-11.051 35.713-52.737 56.19-114.495 56.19-36.85 0-61.918-7.15-73.011-20.965-6.663-8.287-7.801-19.096-3.9-32.016 11.05-35.713 52.736-56.19 114.493-56.19 36.608 0 61.961 7.354 72.768 21.167M832.18 85.329h65.413c-3.94 5.283-75.083 100.884-76.26 102.51H720.936c-.487-3.007-12.472-98.812-12.92-102.51h61.515c.445 3.007 8.978 71.875 8.978 71.875s52.736-70.493 53.671-71.875M629.235 138.067c4.835-15.643 5.08-24.865.243-30.879-3.25-4.144-8.53-6.216-15.886-6.216-17.063 0-26.733 9.67-34.089 33.884-5.078 15.886-5.078 25.108-.244 31.083 3.21 3.94 8.533 6.013 15.886 6.013 17.066 0 26.736-9.466 34.09-33.885zm66.795-35.023c6.703 8.33 8.086 18.894 3.941 31.814-11.05 35.713-52.777 56.19-114.25 56.19-36.851 0-61.96-7.15-73.052-20.965-6.663-8.287-8.044-19.096-4.143-32.016 11.295-35.713 52.98-56.19 114.493-56.19 36.85 0 61.96 7.354 73.011 21.167M503.486 98.008c2.519 3.21 3.901 6.418 3.21 11.05l-25.556 78.985h-67.729l23.973-73.701c.893-3.21-.244-5.973-2.073-8.045-3.251-3.941-10.157-6.46-33.884-4.836 0 0-28.074 85.445-28.563 86.582h-67.69c.652-1.829 31.773-96.942 32.22-97.877 23.526-4.144 54.606-8.045 86.866-8.045 43.756.001 70.45 5.283 79.226 15.887M256.337 119.664c1.382-6.46-.69-11.295-3.008-14.058-2.518-3.25-8.085-7.395-19.582-7.395-16.333 0-28.563 7.842-32.708 20.965l-8.045 30.188 63.343-29.7zm56.881-.245c0 4.835-1.137 8.98-2.072 10.808-2.072.488-120.222 26.735-120.222 26.735s-1.18 5.77 3.209 8.775c5.77 4.145 11.986 5.283 22.55 5.73 26.044 1.138 61.308-14.058 71.184-18.406-1.585 5.038-11.743 27.182-12.19 28.319-4.389 1.625-28.807 9.426-76.71 9.67-18.203.244-50.665-2.072-64.032-18.893-6.663-8.287-7.84-20.03-3.25-34.778 10.848-35.227 51.397-55.5 110.797-55.5 33.195 0 54.85 6.216 64.764 18.405 3.9 5.078 5.972 11.538 5.972 19.135M82.645 35.355h67.04c-1.381 4.348-46.52 149.924-47.252 152.484H35.435c1.38-4.388 46.519-149.964 47.21-152.484"></path>
              </g>
            </svg>
          </div>
          <div>
            <img
              src="//image.pitchbook.com/gg4UmDnXSQlcJHeBwny1U32egKX1567122055164_200x200"
              alt="Promise Technology"
            />
            {/* suuuiii */}
            {/* <MyIcon width={100} height={100} /> */}
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="160"
              height="72"
              id="intel"
            >
              <path
                fill="#187DC1"
                d="M19.547 7.737h-1.243v5.596c0 .658.314 1.226 1.243 1.317V7.737zm.384 7.926c-2.116 1.275-5.617 2.327-8.533 2.599-4.742.443-9.686-.254-10.377-4.001-.337-1.847.497-3.807 1.598-5.022v-.65C.632 10.351-.446 12.583.175 15.218c.792 3.382 5.035 5.297 11.509 4.66 2.563-.252 5.916-1.086 8.247-2.38v-1.835z"
              ></path>
              <path
                fill="#187DC1"
                d="M3.497 7.906h1.242v1.193H3.497zM9.833 14.706v-3.453c0-.7-.369-1.472-1.449-1.472l-2.547-.002v4.927H7.07v-3.92h1.02c.364 0 .513.18.513.474v3.446h1.23zm14.061-6.16C22.769 2.992 12.102 2.641 5.23 6.871v.467c6.865-3.567 16.604-3.547 17.491 1.567.296 1.694-.646 3.456-2.329 4.471v1.325c2.025-.75 4.105-3.182 3.502-6.155zM3.496 9.781v3.655c0 .661.316 1.229 1.244 1.319V9.781H3.496z"
              ></path>
              <path
                fill="#187DC1"
                d="M10.756 8.439v4.853c0 .7.428 1.406 1.432 1.406v-.001h.728v-1.038h-.5c-.294 0-.429-.158-.429-.445v-2.426h.929V9.78h-.928V8.439h-1.232zM4.742 14.756l-.002-.001v.005zM17.587 12.178c0-1.407-.76-2.482-2.075-2.482-1.296 0-2.281.917-2.281 2.54 0 1.898 1.13 2.548 2.31 2.548.901 0 1.415-.295 1.902-.782l-.762-.737c-.316.32-.587.471-1.131.471-.701 0-1.094-.471-1.094-1.107l3.131-.003v-.448zm-3.131-.399c.001-.185.041-.367.118-.536.137-.297.463-.516.885-.516.632 0 .872.516.895 1.051h-1.898z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="160"
              height="72"
              id="amd"
            >
              <path d="M6 3 3 4.565V10h5.565L10 7H6z"></path>
              <path d="m3 0 3 3h4v4l3 3V0zM13.5 11h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2c1.379 0 2.5-1.121 2.5-2.5S14.879 11 13.5 11zm0 4H12v-3h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zM9.691 11.038a.502.502 0 0 0-.545.108L7.5 12.793l-1.646-1.646A.5.5 0 0 0 5 11.5v4a.5.5 0 0 0 1 0v-2.793l1.146 1.146a.5.5 0 0 0 .707 0L9 12.707V15.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.309-.462zM2.468 11.324c-.146-.391-.79-.391-.937 0l-1.5 4a.5.5 0 0 0 .936.352L1.222 15h1.557l.253.676a.5.5 0 0 0 .936-.352l-1.5-4zM1.597 14 2 12.924 2.403 14h-.806z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-28 md:mt-2">
        <h1 className="text-2xl font-semibold text-center text-gray-800 md:mt-3 mb-4">
          Our Clients
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>
        <div className="stats-section grid grid-cols-1 sm:grid-cols-4 gap-6 p-8">
          <StatItem target={25} label="ALLIANCES WITH BRANDS" />
          <StatItem target={400} label="PRODUCTS" />
          <StatItem target={180} label="CLIENTS" />
          <StatItem target={200} label="PROJECTS" />
        </div>
      </div>
    </div>
  );
};

export default Home;

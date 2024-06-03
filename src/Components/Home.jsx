import React, { useState, useEffect } from "react";

const images = [
  "https://media.istockphoto.com/id/1049216804/photo/the-disassembled-apple-imac-computer-body-cover.jpg?s=2048x2048&w=is&k=20&c=tCAvVORwZV1qIZ3iHh6AmIC9bU6wjzshUG8bJQZfY-E=",
  "https://media.istockphoto.com/id/458471063/photo/the-new-macbook-air-on-apple-com-website.jpg?s=2048x2048&w=is&k=20&c=2tWdzt0RttjFBm2rt2bVSvM7B0q_21FH_wQpLAV8Zo8=",
  "https://media.istockphoto.com/id/1183957058/photo/disassembled-phone-screwdriver-tool-and-laptop.jpg?s=2048x2048&w=is&k=20&c=xGYEUmBzmRMAERp7YRIE0tsuQ_fbTKUtFF8QsFajRdk=",
  "https://media.istockphoto.com/id/1331391361/photo/imac-computer-and-glasses-on-the-table.jpg?s=2048x2048&w=is&k=20&c=alskFa6WLwUmEyPczV2KYetsb3XRMMs1qFs1qar94Qg=",
  // Add more image URLs here
];



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
      <div className="relative w-full mx-auto mt-4" style={{ height: "56vh" }}>
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
              : "absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-64 hover:bg-gray-500"
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
              : "absolute right-0  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-64 hover:bg-gray-500"
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
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-16 mb-4">
          Products
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>

        {/* Products cards starts */}
        {/*can add icon-grid2 */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center ">
          <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/1478610778/photo/hcmc-vietnam-macbook-pro-14-inches-m2.jpg?s=612x612&w=0&k=20&c=Rl05e5NYO0YS9DuvgeE4AUmjJw-FgD37_mpTCKVyeng="
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Macbook</div>
              {/* <p className="text-gray-700 text-base">
                Product description goes here. It provides brief details about
                the product.
              </p> */}
            </div>
            <div className="px-6 pt-1 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
            </div>
          </div>

          {/* Add more cards here if needed */}

          <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="https://imgs.search.brave.com/J0GhjQqcfssHBAIdRzup3Bducz5e2FwbvCa8AIXKkKk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjAxMzE5MTQtMmU0/NjlhMGU4NjA3P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TWpCOGZHbHRZ/V044Wlc1OE1IeDhN/SHg4ZkRBPQ.jpeg"
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">i Mac</div>
              {/* <p className="text-gray-700 text-base">
                Product description goes here. It provides brief details about
                the product.
              </p> */}
            </div>
            <div className="px-6 pt-1 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
            </div>
          </div>

          <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="https://imgs.search.brave.com/m0-LyFUCWuY_HFOVKWSnfPci_fWdnzLq3cvgwGl1OHY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L0stWWhI/LTMybjY2MW5QQ2Nf/WVU4dEVFdjlZQT0v/NDAweDAvYXJ0aWNs/ZS1uZXcvMjAyMy8w/Ni9NYWMtU3R1ZGlv/LURlc2suanBnP2xv/c3N5"
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mac Studio</div>
              {/* <p className="text-gray-700 text-base">
                Product description goes here. It provides brief details about
                the product.
              </p> */}
            </div>
            <div className="px-6 pt-1 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
            </div>
          </div>

          <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="https://imgs.search.brave.com/-oPqJP5nurt4lK_eKQx2Ia15fGHTVzIyUs7ss4ya_Bw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS8zMzkyMC02/MDM0NS1NYWMtUHJv/LVNJZGUteGwuanBn"
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mac Pro</div>
              {/* <p className="text-gray-700 text-base">
                Product description goes here. It provides brief details about
                the product.
              </p> */}
            </div>
            <div className="px-6 pt-1 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
            </div>
          </div>

          <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Windows PC</div>
              {/* <p className="text-gray-700 text-base">
                Product description goes here. It provides brief details about
                the product.
              </p> */}
            </div>
            <div className="px-6 pt-1 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag2
              </span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
            </div>
          </div>
        </div>
        {/* Redirect button */}
        <div className="flex items-center justify-center pt-6">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={() => handleNavItemClick("Products")}
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Services  */}
      <div className="bg-gray-100">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-12 pt-6 mb-4">
          Services
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>

        {/* Services list */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center">
          <button onClick={() => handleNavItemClick("Services")}>
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1183957058/photo/disassembled-phone-screwdriver-tool-and-laptop.jpg?s=2048x2048&w=is&k=20&c=xGYEUmBzmRMAERp7YRIE0tsuQ_fbTKUtFF8QsFajRdk="
                alt="Product"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Service & Upgradation
                </div>
                <p className="text-gray-700 text-base">
                  Repair of Apple Macintosh Laptop <br />
                  (MacBook Air/Pro) & Desktop (iMac/MacPro/Mac mini) <br />
                  is as easy as windows.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #service
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #upgrade
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
              </div>
            </div>
          </button>

          <button onClick={() => handleNavItemClick("Rental")}>
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1331391361/photo/imac-computer-and-glasses-on-the-table.jpg?s=2048x2048&w=is&k=20&c=alskFa6WLwUmEyPczV2KYetsb3XRMMs1qFs1qar94Qg="
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

          <button onClick={() => handleNavItemClick("Services")}>
            <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://media.istockphoto.com/id/1049216804/photo/the-disassembled-apple-imac-computer-body-cover.jpg?s=2048x2048&w=is&k=20&c=tCAvVORwZV1qIZ3iHh6AmIC9bU6wjzshUG8bJQZfY-E="
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

      {/* Authorized Seller of  */}
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mt-16 mb-4">
          Authorized Seller for Brands
        </h1>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-2/4 border-gray-400 pb-4" />
        </div>
        <div
          className={
            isSmallScreen
              ? "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center icon-grid"
              : "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-14 p-4 items-center justify-center pb-12"
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              id="apple"
              width="72"
              height="72"
            >
              <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 40 40"
              viewBox="0 0 40 40"
              width="72"
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

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              width="72"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="72"
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
              width="72"
              height="72"
              id="amd"
            >
              <path d="M6 3 3 4.565V10h5.565L10 7H6z"></path>
              <path d="m3 0 3 3h4v4l3 3V0zM13.5 11h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2c1.379 0 2.5-1.121 2.5-2.5S14.879 11 13.5 11zm0 4H12v-3h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zM9.691 11.038a.502.502 0 0 0-.545.108L7.5 12.793l-1.646-1.646A.5.5 0 0 0 5 11.5v4a.5.5 0 0 0 1 0v-2.793l1.146 1.146a.5.5 0 0 0 .707 0L9 12.707V15.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.309-.462zM2.468 11.324c-.146-.391-.79-.391-.937 0l-1.5 4a.5.5 0 0 0 .936.352L1.222 15h1.557l.253.676a.5.5 0 0 0 .936-.352l-1.5-4zM1.597 14 2 12.924 2.403 14h-.806z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

const images = [
  "https://media.istockphoto.com/id/1049216804/photo/the-disassembled-apple-imac-computer-body-cover.jpg?s=2048x2048&w=is&k=20&c=tCAvVORwZV1qIZ3iHh6AmIC9bU6wjzshUG8bJQZfY-E=",
  "https://media.istockphoto.com/id/458471063/photo/the-new-macbook-air-on-apple-com-website.jpg?s=2048x2048&w=is&k=20&c=2tWdzt0RttjFBm2rt2bVSvM7B0q_21FH_wQpLAV8Zo8=",
  "https://media.istockphoto.com/id/1183957058/photo/disassembled-phone-screwdriver-tool-and-laptop.jpg?s=2048x2048&w=is&k=20&c=xGYEUmBzmRMAERp7YRIE0tsuQ_fbTKUtFF8QsFajRdk=",
  "https://media.istockphoto.com/id/1331391361/photo/imac-computer-and-glasses-on-the-table.jpg?s=2048x2048&w=is&k=20&c=alskFa6WLwUmEyPczV2KYetsb3XRMMs1qFs1qar94Qg=",
  // Add more image URLs here
];

const Home = () => {



  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div>home</div>
      <div className="relative w-full mx-auto">
        <div className="overflow-hidden relative">
          <div
            className="whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="inline-block w-full"
              />
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-60 hover:bg-gray-500"
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
              fill-rule="evenodd"
              d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"
            ></path>
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-60 hover:bg-gray-500"
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




      
    </div>
  );
};

export default Home;

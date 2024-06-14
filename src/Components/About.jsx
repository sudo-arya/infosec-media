import React, { useState, useEffect } from "react";
import imgpurchase from "../Assets/purchase.jpg";
import imgrent from "../Assets/rent.jpg";
import imgrepair from "../Assets/repair.jpg";
import imgupgrade from "../Assets/upgrade.jpg";

const About = ({ setActiveComponent }) => {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 600); // Adjust the threshold as per your requirement
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Call the handleResize initially to set the initial state
  //   handleResize();

  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="min-h-screen flex-col justify-center items-center">
      {/* <div>About</div> */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-16 mb-4">
        About Us
      </h1>
      <div className="flex items-center justify-center">
        <hr className="h-2 w-2/4 border-gray-400 pb-1" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="h-4/6 mt-10">
            <img src="https://imgs.search.brave.com/anenpkivdXgdaU3WA1TEsPqEMErEo9azBu0SogtpvWo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pc29y/ZXB1YmxpYy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvc2hvdHN0YXNo/XzAxMDEtMS0xMTAw/eDczNC5qcGc" />
          </div>
          <div className="pl-14 p-6 md:w-3/4  ">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mt-16 mb-2">
              Our Story
            </h1>

            <div className="flex items-center justify-center">
              <hr className="h-2 w-3/4 border-gray-400 pb-8" />
            </div>
            <div className=" justify-center">
              <p className="text-gray-700 text-base">
                We, Infosec Media are already in Sale & service business for
                more than 15 years.
              </p>
              <p className="text-gray-700 text-base">
                <br />A Infosec Media service is one of the leading computer
                Sales, Service, and Corporate Rentals Company. We design, build
                and customize products and services to satisfy a range of
                customer requirements.
              </p>
              <p className="text-gray-700 text-base">
                <br /> From Desktops, Workstations and premier service needs of
                the largest global corporations to those of consumers at home.
                We are glad to introduce ourselves as one of the leading Service
                Providers, Authorized Business Partners in Branded Systems,
                Accessories, Consumables and Rentals.
              </p>
              <p className="text-gray-700 text-base">
                <br /> Infosec Media Solutions services are one of the leading
                Suppliers of Computers and Computer Peripherals like Apple,
                Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel,
                AMD. Our Happy Customers are Education Institutions, Research
                Organizations, and Telecom Departments.
              </p>
              <p className="text-gray-700 text-base">
                <br /> Branded / Assembled Computer Sales and Service,
                MacBook/iMac/Mac Studio/Mac Pro, Desktop / Laptop / Palm Top /
                Tablet PC, Audio Studio, Printers, Monitors, UPS, Speakers,
                Consumable products, Motherboard/ Printer/ Ups Service,
                Secondhand system resale, Upgradation products.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Services  */}
        <div className="bg-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mt-12 pt-6 mb-4">
            What we offer ??
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
                    Apple Macintosh & PC (windows) computers are available with
                    us for high-end Graphics & Editing purposes.
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
                    Apple Macintosh & PC (windows) computers are available with
                    us for high-end Graphics & Editing purposes.
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
                    Swift, affordable repairs for all your devices. From
                    hardware fixes to software solutions, trust us to keep your
                    devices running smoothly.
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
      </div>

      <div className=" flex item-center justify-center pt-12 pb-4">
        <div class="animated-gradient w-full md:rounded-full rounded-3xl flex-col item-center justify-center">
          <div className="text-white  flex item-center justify-center pt-8 md:text-4xl text-base text-center">
            We Provide the Best Service in Industry
          </div>
          <div className="text-white flex items-center justify-center md:pt-5 pt-1">
            <button
              className="md:w-1/6 pt-3 pb-3 bg-gray-800 flex items-center justify-between px-4 rounded-full allproduct hover:bg-gray-600"
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
    </div>
  );
};

export default About;



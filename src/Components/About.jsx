import React, { useState} from "react";
import imgpurchase from "../Assets/purchase.jpg";
import imgrent from "../Assets/rent.jpg";
import imgrepair from "../Assets/repair.jpg";
import imgupgrade from "../Assets/upgrade.jpg";
import { useNavigate } from "react-router-dom";
import amcImage from "../Assets/amc4.jpg";
import Seo from "./Seo";




const About = ({ setActiveComponent }) => {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavItemClick = (path) => {
    navigate(`/${path}`);
    setIsOpen(false); // Close the navbar on item click for smaller screens
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
      <Seo
        title="About Us - Infosec Media"
        description="Learn more about Infosec Media, a leading provider of computer sales, service, and corporate rentals."
        keywords="Infosec Media, about us, computer sales, computer service"
      />
      <h1 className="text-4xl font-bold text-center text-cs3 mt-8 mb-2">
        Our Story
      </h1>
      <div className="flex items-center justify-center">
        <hr className="h-2 w-2/4 border-cs4 pb-1" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="h-4/6 mt-6">
            <img
              src="https://imgs.search.brave.com/anenpkivdXgdaU3WA1TEsPqEMErEo9azBu0SogtpvWo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pc29y/ZXB1YmxpYy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvc2hvdHN0YXNo/XzAxMDEtMS0xMTAw/eDczNC5qcGc"
              alt="Our Story"
              className="rounded-3xl"
            />
          </div>
          <div className="md:pl-14 p-4 md:w-3/4  ">
            <h1 className="text-3xl font-semibold text-center text-cs3 mt-12 mb-2">
              {/* Our Story */}
            </h1>

            <div className="flex items-center justify-center">
              {/* <hr className="h-2 w-3/4 border-cs4 mb-4" /> */}
            </div>
            <div className=" justify-center">
              <p className="text-cs1 text-base ">
                We, Infosec Media are already in Sale & service business for
                more than 15 years.
              </p>
              <p className="text-cs1 text-base">
                <br />A Infosec Media service is one of the leading computer
                Sales, Service, and Corporate Rentals Company. We design, build
                and customize products and services to satisfy a range of
                customer requirements.
              </p>
              <p className="text-cs1 text-base">
                <br /> From Desktops, Workstations and premier service needs of
                the largest global corporations to those of consumers at home.
                We are glad to introduce ourselves as one of the leading Service
                Providers, Authorized Business Partners in Branded Systems,
                Accessories, Consumables and Rentals.
              </p>
              <p className="text-cs1 text-base">
                <br /> Infosec Media Solutions services are one of the leading
                Suppliers of Computers and Computer Peripherals like Apple,
                Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel,
                AMD. Our Happy Customers are Education Institutions, Research
                Organizations, and Telecom Departments.
              </p>
              <p className="text-cs1 text-base">
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

      <div className=" flex item-center justify-center md:pt-6 pt-8 md:mt-8 pb-4">
        <div className="animated-gradient w-5/6 md:rounded-full rounded-3xl flex-col item-center justify-center md:h-28 h-20">
          <div className="text-white  flex items-center justify-center pt-6 md:text-4xl text-base text-center">
            We Provide the Best Service in Industry
          </div>
          <div className="text-white flex items-center justify-center md:pt-5 h-18">
            <button
              className="md:w-48 pt-3 pb-3 bg-cs1 flex font-semibold items-center justify-between px-4 rounded-full allproduct hover:bg-cs4"
              onClick={() => handleNavItemClick("contact")}
            >
              <div className="flex items-center justify-between w-full">
                <div className="ml-2 flex-nowrap">Contact Us Today</div>
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

      <div>
        {/* Services  */}
        <div className="bg-cs1 rounded-xl pl-4 pr-4 pb-4">
          <h1 className="text-2xl font-semibold text-center text-cs4 mt-20 pt-6 mb-4">
            Services
          </h1>
          <div className="flex items-center justify-center">
            <hr className="h-2 w-2/4 border-cs5 pb-4" />
          </div>

          {/* Services list */}
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center">
            <button
              onClick={() => handleNavItemClick("products")}
              className="flex-grow"
            >
              <div className="max-w-full sm:max-w-sm rounded-xl overflow-hidden shadow-lg bg-cs5 service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                <img
                  className="w-full h-48 object-cover"
                  src={imgpurchase}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-cs3 mb-2">
                    Purchase With Us
                  </div>
                  <p className="text-cs1 text-base">
                    Apple Macintosh & PC (windows) computers are available with
                    us for high-end Graphics & Editing purposes.
                  </p>
                </div>
                <div className="px-6 pt-1 pb-2">
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #buy
                  </span>
                  <span className="inline-block  bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #purchase
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleNavItemClick("services")}
              className="flex-grow"
            >
              <div className="max-w-full sm:max-w-sm rounded-xl overflow-hidden shadow-lg bg-cs5 service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                <img
                  className="w-full h-48 object-cover"
                  src={imgupgrade}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl  text-cs3 mb-2">
                    Upgradation
                  </div>
                  <p className="text-cs1 text-base">
                    Upgrade of Apple Macintosh Laptop <br />
                    (MacBook Air/Pro) & Desktop (iMac/MacPro/Mac mini) <br />
                    is as easy as windows.
                  </p>
                </div>
                <div className="px-6 pt-1 pb-2">
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #upgrade
                  </span>
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #make-it-new
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleNavItemClick("rental")}
              className="flex-grow"
            >
              <div className="max-w-full sm:max-w-sm rounded-xl overflow-hidden shadow-lg bg-cs5 service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                <img
                  className="w-full h-48 object-cover"
                  src={imgrent}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-cs3 text-xl mb-2">
                    Rent Device
                  </div>
                  <p className="text-cs1 text-base">
                    Apple Macintosh & PC (windows) computers are available with
                    us for high-end Graphics & Editing purposes.
                  </p>
                </div>
                <div className="px-6 pt-1 pb-2">
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #rent
                  </span>
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #low-cost
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleNavItemClick("repair")}
              className="flex-grow"
            >
              <div className="max-w-full sm:max-w-sm rounded-xl overflow-hidden shadow-lg bg-cs5 service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                <img
                  className="w-full h-48 object-cover"
                  src={imgrepair}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-cs3 text-xl mb-2">
                    {" "}
                    Repair Services
                  </div>
                  <p className="text-cs1 text-base">
                    Swift, affordable repairs for all your devices. From
                    hardware fixes to software solutions, trust us to keep your
                    devices running smoothly.
                  </p>
                </div>
                <div className="px-6 pt-1 pb-2">
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #repair
                  </span>
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #quick-fix
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tag3
              </span> */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleNavItemClick("amc")}
              className="flex-grow"
            >
              <div className="max-w-full sm:max-w-sm rounded-xl overflow-hidden shadow-lg bg-cs5 service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                <img
                  className="w-full h-48 object-cover"
                  src={amcImage}
                  alt="Product"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-cs3 text-xl mb-2">
                    Annual Maintenance Contracts
                  </div>
                  <p className="text-cs1 text-base">
                    Ensure the longevity & reliability of your equipment with
                    our AMC.
                  </p>
                </div>
                <div className="px-6 pt-1 pb-2">
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #support
                  </span>
                  <span className="inline-block bg-cs1 rounded-full px-3 py-1 text-sm font-semibold text-cs5 mr-2 mb-2">
                    #maintenance
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

      {/* <div className=" flex item-center justify-center pt-12 pb-4">
        <div className="animated-gradient w-full md:rounded-full rounded-3xl flex-col item-center justify-center">
          <div className="text-white  flex items-center justify-center pt-8  md:text-4xl text-base text-center">
            We Provide the Best Service in Industry
          </div>
          <div className="text-white flex items-center justify-center md:pt-5 pt-1">
            <button
              className="md:w-48 pt-3 pb-3 bg-cs1 flex font-semibold items-center justify-between px-4 rounded-full allproduct hover:bg-cs4 "
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
      </div> */}

      <div className=" h-6 bg-cs5">
        {/* Your content goes here */}
        &nbsp; &nbsp;
      </div>
    </div>
  );
};

export default About;



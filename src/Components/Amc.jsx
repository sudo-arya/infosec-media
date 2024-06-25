import React, { useState, useEffect } from "react";
import "react-whatsapp-widget/dist/index.css"; // If using WhatsApp widget styles
import amc1 from "../Assets/amc1.png";
import amc2 from "../Assets/amc2.png";
import amc3 from "../Assets/amc3.png";
import amc4 from "../Assets/amc4.jpg";
import amc5 from "../Assets/amc5.png";
import amc6 from "../Assets/amc6.png";
import amc7 from "../Assets/amc7.jpg";
import amc8 from "../Assets/amc8.png";
import amc9 from "../Assets/amc9.jpg";


const imageData = [
  { id: 1, src: amc1, alt: "Image 1" },
  { id: 2, src: amc2, alt: "Image 2" },
  { id: 3, src: amc3, alt: "Image 3" },
  { id: 4, src: amc4, alt: "Image 4" },
  { id: 5, src: amc7, alt: "Image 5" },
  { id: 6, src: amc9, alt: "Image 6" },
  { id: 7, src: amc3, alt: "Image 6" },
];
const Amc = ({ setActiveComponent }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
   let mobileno = 9718627660;
   let emailas = "sales@infosecmediasolutions.com";

  const arg = "AMC";
  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the threshold as per your requirement
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize initially to set the initial state
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    frequency: "",
    contactMethod: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form Data: ", formData);
  // };

  const handleWhatsAppClick = () => {
    const phoneNumber = `${mobileno}`; // Your WhatsApp number
    let specifications = `Hello,\nI want to request a quote for AMC.\n\nFull Name: ${formData.fullName}\nCompany Name: ${formData.companyName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMaintenance Frequency: ${formData.frequency}\nPreferred Contact Method: ${formData.contactMethod}\nAdditional Information: ${formData.additionalInfo}`;

    const message = encodeURIComponent(specifications);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleEmailClick = () => {
    const recipient = `${emailas}`;
    const subject = encodeURIComponent("Request for AMC Quote");
    let body = encodeURIComponent(
      `Hello,\nI want to request a quote for AMC.\n\nFull Name: ${formData.fullName}\nCompany Name: ${formData.companyName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMaintenance Frequency: ${formData.frequency}\nPreferred Contact Method: ${formData.contactMethod}\nAdditional Information: ${formData.additionalInfo}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };


  return (
    <div className="min-h-screen flex-col justify-center items-center text-cs3">
      <h1 className="text-4xl font-bold text-center text-cs3 mt-8 mb-2">
        Annual Maintenance Contracts ({arg})
      </h1>
      <div className="flex items-center justify-center">
        <hr className="h-2 w-2/4 border-cs4 pb-1" />
      </div>

      <div className="flex items-center justify-center  ">
        <div className="m-4 md:w-full flex flex-wrap justify-center">
          {imageData.slice(0, isSmallScreen ? 1 : 6).map((image) => (
            <div
              key={image.id}
              className={`w-${isSmallScreen ? "full" : "1/3"}`}
            >
              <img
                id="amcimage"
                src={image.src}
                alt={image.alt}
                className={` w-full h-72 md:contrast-50 transition ease-in-out duration-500 hover:contrast-100 ${
                  isSmallScreen ? "rounded-3xl" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ensure the longevity and reliability of your equipment with our Annual
          Maintenance Contracts (AMC).
        </h2>
        <p className="text-lg mb-4 text-cs2 font-semibold">
          Designed to keep your systems running smoothly year-round, our AMCs
          provide comprehensive support and regular maintenance to prevent
          unexpected downtime and costly repairs.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 mt-20 md:mt-0">
          Benefits of Our AMC
        </h2>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-1/4 border-cs4 pb-1" />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center p-4">
          <div className="md:pl-14 p-4 md:w-3/4 text-left text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="text-cs2 font-semibold">Peace of Mind:</span>{" "}
                Our proactive maintenance approach ensures your equipment
                operates smoothly.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">Cost Savings:</span>{" "}
                Predictable maintenance costs help you manage your budget
                effectively.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Priority Support:
                </span>{" "}
                Access to priority response times and dedicated support.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Increased Efficiency:
                </span>{" "}
                Regular servicing optimizes system performance and reduces
                energy consumption.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">Longer Lifespan:</span>
                Proper care extends the lifespan of your equipment.
              </li>
            </ul>
          </div>
          <img
            src={amc5}
            className="md:w-2/4 w-full h-auto rounded-3xl"
            alt=""
          />
        </div>
      </div>

      {/* Our AMC Services Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 mt-12">Our AMC Services</h2>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-1/4 border-cs4 pb-1" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-4">
          <img
            src={amc6}
            className="md:w-2/4 w-full h-auto rounded-3xl"
            alt=""
          />
          <div className="md:pl-14 p-4 md:w-3/4 text-left text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Scheduled Maintenance Visits:
                </span>{" "}
                Regular inspections and maintenance by our certified
                technicians.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">24/7 Support:</span>
                Round-the-clock access to our support team for emergencies.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Replacement Parts:
                </span>
                Genuine parts available to maintain optimal performance.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Performance Reports:
                </span>
                Detailed reports after each visit, outlining system health and
                recommendations.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-1/4 border-cs4 pb-1" />
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center justify-center">
          <div className="md:pl-14 p-4 md:w-3/4 text-left text-lg">
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="text-cs2 font-semibold">Expertise:</span> Our
                technicians are certified and experienced in handling diverse
                systems.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Customizable Contracts:
                </span>{" "}
                Tailored to meet your specific requirements and budget.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Proven Track Record:
                </span>
                Trusted by numerous businesses for reliable maintenance
                services.
              </li>
              <li className="mb-2">
                <span className="text-cs2 font-semibold">
                  Client Satisfaction:
                </span>
                Testimonials from satisfied clients highlighting the benefits of
                our AMC services.
              </li>
            </ul>
          </div>
          <img src={amc8} className="md:w-2/4 h-auto rounded-3xl" alt="" />
        </div>
      </div>

      {/* Contact Us Section */}
      <div className=" flex item-center justify-center mb-20 md:mb-20 md:mt-16 ">
        <div className="animated-gradient w-5/6 md:rounded-full rounded-3xl flex-col item-center justify-center md:h-28 h-20">
          <div className="text-white  flex items-center justify-center pt-6 md:text-4xl text-base text-center">
            We Provide the Best Service in Industry
          </div>
          <div className="text-white flex items-center justify-center md:pt-5 h-18">
            <button
              className="md:w-48 pt-3 pb-3 bg-cs1 flex font-semibold items-center justify-between px-4 rounded-full allproduct hover:bg-cs4"
              onClick={() => handleNavItemClick("Contact")}
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

      {/* Request a Quote Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Request a Quote</h2>
        <div className="flex items-center justify-center">
          <hr className="h-2 w-1/4 border-cs4 pb-1" />
        </div>
        <p className="mb-4 md:text-xl text-base font-bold text-cs2">
          Interested in learning more about our AMC options?
          <br /> Fill out our online form to request a quote, and our team will
          respond promptly to discuss your maintenance needs.
        </p>

        {/* Add your request a quote form here if applicable */}
        <form className=" md:w-2/5 mx-auto p-4 m-12 mt-14 border rounded-3xl bg-white">
          <h2 className="text-2xl font-bold mb-2 text-cs3">Request a Quote</h2>
          <div className="flex items-center justify-center">
            <hr className="h-2 w-2/4 mb-6 border-cs4 pb-1" />
          </div>
          <div className="mb-4 flex-row">
            {/* <label className="block mb-2 font-medium">Full Name</label> */}
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
              // required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 font-medium hidden">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
              // required
            />
          </div>

          <div className="mb-4">
            <label className="hidden mb-2 font-medium">Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
              // required
            />
          </div>

          <div className="mb-4">
            <label className="hidden mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
              // required
            />
          </div>

          {/* <div className="mb-4">
            <label className="block mb-2 font-medium">
              Equipment/Systems Covered
            </label>
            <textarea
              name="equipment"
              placeholder="List the equipment or systems to be covered under AMC"
              value={formData.equipment}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div> */}

          <div className="mb-4">
            <label className="hidden mb-2 font-medium">
              Maintenance Frequency
            </label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
              // required
            >
              <option value="">Select Maintenance Frequency</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Bi-Annually">Bi-Annually</option>
              <option value="Annually">Annually</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="hidden mb-2 font-medium">
              Preferred Contact Method
            </label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
            >
              <option value="">Select Preferred Contact Method</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="hidden mb-2 font-medium">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              placeholder="Any additional details or specific requirements"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="md:w-3/4 w-10/12 p-2 border border-cs2 rounded-xl text-cs3 font-medium"
            ></textarea>
          </div>

          <div className=" flex flex-row items-center justify-center mb-5 mt-7">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center">
                <div className=" font-semibold pl-3">Send Quote via </div>
                <div className="px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
            <div className="md:w-6 w-3">&nbsp;</div>
            <button
              onClick={handleEmailClick}
              className="p-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center py-1 px-1">
                <div className=" font-semibold pl-3">Send Quote via </div>
                <div className="px-3">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                  >
                    <path
                      d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Amc;

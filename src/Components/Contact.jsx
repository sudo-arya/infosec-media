import React, { useState, useEffect } from "react";
import Map from "./Map";

const Contact = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let mobileno = 9718627660;
  let emailas = "sales@infosecmediasolutions.com";

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

  const handlePhoneNumberClick = () => {
    const phoneNumber = "9718627660"; // Replace this with your actual phone number
    if (isSmallScreen) {
      // Redirect to dialer on small screens
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Copy to clipboard on large screens
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert("Phone number copied to clipboard");
        })
        .catch(() => {
          alert("Failed to copy phone number");
        });
    }
  };

  const handleEmailClick1 = () => {
    const email = " bhupendra@infosecmediasolutions.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };
  const handleEmailClick2 = () => {
    const email = "sales@infosecmediasolutions.com"; // Replace this with your email address
    window.location.href = `mailto:${email}`;
  };

  const handleAddressClick = () => {
    const address =
      "C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New Delhi - 110092"; // Replace this with your actual address
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };



   const handleFacebook = () => {
     window.location.href =
       "https://www.facebook.com/profile.php?id=61561061845957";
   };
   const handleInsta = () => {
     window.location.href = "https://www.instagram.com/_infosecmedia/";
   };
   const handleX = () => {
     window.location.href = "https://x.com/_infosecmedia";
   };
   const handleYoutube = () => {
     window.location.href = "https://www.youtube.com/";
   };

    const [inputValue, setInputValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmailValue(event.target.value);
    };

    const handleSubjectChange = (event) => {
      setSubjectValue(event.target.value);
    };

    const handleMessageChange = (event) => {
      setMessageValue(event.target.value);
    };

    const handleEmailClick = () => {
      const recipient = `${emailas}`;
      const subject = encodeURIComponent(subjectValue);
      const body = encodeURIComponent(
        `Hii Bhupendra,\n\nName: ${inputValue}\nEmail: ${emailValue}\n\n${messageValue}\n`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    const handleWhatsAppClick = () => {
      const phoneNumber = `${mobileno}`; 
      const message = encodeURIComponent(
        `Hii Bhupendra,\nName: ${inputValue}\nEmail: ${emailValue}\nSubject : ${subjectValue}\n \n${messageValue}\n\n`
      );
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.location.href = whatsappUrl;
    };


  return (
    <div className="h-auto flex-col justify-center items-center">
      {/* <div>Contact</div> */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-16 mb-4">
        Contact Details
      </h1>
      <div className="flex items-center justify-center">
        <hr className="h-2 w-2/4 border-gray-400 pb-1" />
      </div>
      <p className="flex items-center justify-satrt md:ml-60 ml-4 text-gray-500 font-semibold mt-6">
        Feel free to reach out with your query or suggestion. <br />
        We are here to answer any questions you might have for us.
      </p>
      <div className="w-full justify-center flex md:flex-row flex-col  mt-4">
        <div className="md:w-6/12 md:p-3 ">
          <p className="text-gray-700 text-center font-semibold text-xl ">
            Contact Info
          </p>
          <div className="flex items-center justify-center">
            <hr className="h-2 w-2/4 border-gray-400 pb-1" />
          </div>
          <div className="flex md:flex-col flex-col items-center justify-center mt-2">
            <div className="mb-3 md:flex-row flex-col flex items-center justify-center ">
              <button
                onClick={handlePhoneNumberClick}
                className="flex-grow m-2"
              >
                <div className="max-w-full p-4 sm:max-w-sm rounded overflow-hidden shadow-md bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                  <p className="text-gray-700 text-center font-semibold text-xl ">
                    Call Us
                  </p>
                  <div className="flex items-center justify-center">
                    <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                  </div>
                  <p
                    className="text-black text-sm cursor-pointer nav-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      // style={{ fill: "white" }}
                      className="pr-2"
                      viewBox="0 0 24 24"
                      id="call"
                    >
                      <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
                    </svg>
                    +91 9718627660
                  </p>
                </div>
              </button>
              <button onClick={handleEmailClick1} className="flex-grow m-2">
                <div className="max-w-full p-4 sm:max-w-sm rounded overflow-hidden shadow-md bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                  <p className="text-gray-700 text-center font-semibold text-xl ">
                    Mail Us
                  </p>
                  <div className="flex items-center justify-center">
                    <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                  </div>
                  <p
                    className="text-black text-sm cursor-pointer nav-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 96"
                      width="36"
                      height="36"
                      // style={{ fill: "white" }}
                      className="pr-2"
                      id="email"
                    >
                      <g>
                        <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                      </g>
                    </svg>
                    <span>&nbsp;bhupendra@infosecmediasolutions.com</span>
                    <br />
                  </p>
                </div>
              </button>
            </div>
            <div className="mb-3 md:flex-row flex flex-col items-center justify-center">
              <button onClick={handleEmailClick2} className="flex-grow m-2">
                <div className="max-w-full p-4 pb-5 sm:max-w-sm rounded overflow-hidden shadow-md bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                  <p className="text-gray-700 text-center font-semibold text-xl mb-2">
                    For Sales related query
                  </p>
                  <div className="flex items-center justify-center">
                    <hr className="h-2 w-2/4 border-gray-400 pb-1 " />
                  </div>
                  <p
                    className="text-black text-sm cursor-pointer nav-item pt-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 96"
                      width="36"
                      height="36"
                      // style={{ fill: "white" }}
                      className="pr-2"
                      id="email"
                    >
                      <g>
                        <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                      </g>
                    </svg>
                    <span>&nbsp;sales@infosecmediasolutions.com</span>
                    <br />
                  </p>
                </div>
              </button>

              <button onClick={handleAddressClick} className="flex-grow m-2">
                <div className="max-w-full p-4 sm:max-w-sm rounded overflow-hidden shadow-md bg-white service transition duration-300 ease-in-out md:contrast-75 hover:contrast-100">
                  <p className="text-gray-700 text-center font-semibold text-xl ">
                    Office
                  </p>
                  <div className="flex items-center justify-center">
                    <hr className="h-2 w-2/4 border-gray-400 pb-1" />
                  </div>
                  <p
                    className="text-black text-sm cursor-pointer nav-item"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      id="address"
                      width="60"
                      height="60"
                      // style={{ fill: "white" }}
                      className="pr-2"
                    >
                      <path d="M49.00001,34h-3.59998c-4.88,6.70996-11.27002,11.16998-11.70001,11.46997-.5,.35004-1.09003,.53003-1.70001,.53003s-1.20001-.17999-1.70001-.53003c-.42999-.29999-6.81995-4.76001-11.69995-11.46997h-3.60004c-2.14581-.04651-4.03583,1.88818-3.99994,4-.00006,0-.00006,20-.00006,20,0,2.20996,1.79004,4,4,4H49.00001c2.21002,0,4-1.79004,4-4v-20c.03302-2.14868-1.87878-4.03577-4-4Zm2,24c0,1.09998-.89996,2-2,2H15.00001c-1.09998,0-2-.90002-2-2v-20c0-.27002,.06-.54004,.16003-.78003l15.70996,12.56c.91003,.73004,2.02002,1.09003,3.13,1.09003s2.22003-.35999,3.12-1.09003l15.72003-12.56c.09998,.23999,.15997,.51001,.15997,.78003v20Z"></path>
                      <path d="M46.00001 52h-5c-1.64996 0-3 1.34998-3 3s1.35004 3 3 3h5c3.95312-.10883 3.95502-5.89099 0-6zM31.4336 43.82324c.34106.23438.79175.23438 1.13281 0 .6709-.46191 16.43359-11.45117 16.43359-24.82324 0-9.37402-7.62598-17-17-17S15.00001 9.62598 15.00001 19c0 13.37207 15.7627 24.36133 16.43359 24.82324zm.56641-39.82324c8.271 0 15 6.72852 15 15 0 10.95898-12.20068 20.67871-15 22.76367-2.79932-2.08496-15-11.80469-15-22.76367 0-8.27148 6.729-15 15-15z"></path>
                      <path d="M42.00001,19c0-5.51416-4.48584-10-10-10-13.26636,.54907-13.26251,19.45288,.00006,20,5.5141,0,9.99994-4.48584,9.99994-10Z"></path>
                    </svg>
                    <span className="text-left">
                      <u>
                        C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New
                        Delhi - 110092
                      </u>
                    </span>
                  </p>
                </div>
              </button>
            </div>
          </div>
          <p className="text-gray-700 text-center font-semibold text-xl mt-8">
            Follow Us
          </p>
          <div className="flex items-center justify-center">
            <hr className="h-2 w-2/4 border-gray-400 pb-1" />
          </div>

          <div className="flex flex-col items-center justify-center mt-2">
            <div>
              <button
                onClick={handleYoutube}
                className="pt-3 pl-3 pr-2 pb-3 transform transition duration-300 hover:scale-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  viewBox="5.368 13.434 53.9 37.855"
                  id="youtube"
                >
                  <path
                    fill="#FFF"
                    d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
                  ></path>
                  <path
                    fill="#E8E0E0"
                    d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
                  ></path>
                  <path
                    fill="#CD201F"
                    d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleFacebook}
                className="p-3 transform transition duration-300 hover:scale-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="32"
                  id="facebook"
                >
                  <path
                    fill="#1976D2"
                    d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    fill-rule="evenodd"
                    d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleInsta}
                className="p-3 transform transition duration-300 hover:scale-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 102 102"
                  id="instagram"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="6.601"
                      cy="99.766"
                      r="129.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".09" stop-color="#fa8f21"></stop>
                      <stop offset=".78" stop-color="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="70.652"
                      cy="96.49"
                      r="113.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".64"
                        stop-color="#8c3aaa"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="1" stop-color="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="#fff"
                    d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                    transform="translate(-422.637 -426.196)"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleX}
                className="p-3 transform transition duration-300 hover:scale-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 512 512"
                  id="twitter"
                >
                  <g clip-path="url(#clip0_84_15697)">
                    <rect width="512" height="512" fill="#000" rx="60"></rect>
                    <path
                      fill="#fff"
                      d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_84_15697">
                      <rect width="512" height="512" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 bg-gray-100 rounded-3xl md:p-3">
          <p className="text-gray-700 text-center font-semibold text-xl ">
            Send Us a Message
          </p>
          <div className="flex items-center justify-center">
            <hr className="h-2 w-2/4 border-gray-400 pb-1" />
          </div>
          <div className="mx-8 mt-4">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  value={subjectValue}
                  onChange={handleSubjectChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows="4"
                  value={messageValue}
                  onChange={handleMessageChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="message ..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="mb-4 flex md:flex-row flex-col items-stretch mt-2 justify-center">
            <button
              onClick={handleEmailClick}
              className="mx-4 p-2 mt-6 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white "
            >
              <div className="flex flex-row items-center justify-center px-1 h-full">
                <div className="font-semibold pl-3">Contact via </div>
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
            <button
              onClick={handleWhatsAppClick}
              className=" mx-4 p-2 mt-6 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center justify-center px-1 h-full">
                <div className="font-semibold pl-3">Contact via </div>
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
          </div>
        </div>
      </div>
      <div className="list h-12">
        {/* Your content goes here */}
        &nbsp;
      </div>

      <Map />
      <div className="list h-20">
        {/* Your content goes here */}
        &nbsp;
      </div>
    </div>
  );
};

export default Contact;

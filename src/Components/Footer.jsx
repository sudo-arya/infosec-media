import React, { useState, useEffect } from "react";

const Footer = () => {
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

  const handleEmailClick = () => {
    const email = "test@gmail.com"; // Replace this with your email address
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

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4 items-center justify-center">
        <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg ">
          <div className=" py-4">
            <div className="font-bold text-2xl mb-2">About Us</div>
            <div className="flex ">
              <hr className="h-2 w-2/4 border-gray-400 pb-4" />
            </div>

            <img
              src="https://imgs.search.brave.com/XJLimc3VA-K1mBfEC2nuvGcQ0r6yznc8p9aQ_sebX80/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vMmQxMjM2/ODEtM2ZiNS00NDVl/LThjMGUtMGExYmM1/NTUyNTc4L2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM3MDkxMjEx/NzEzNDAwMDAw"
              width="100"
              height="100"
              alt="logo"
            />

            <p
              className="text-gray-300 text-sm "
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="mt-2">
                Infosec Media Solutions is dedicated to providing the best
                customer service and computer repair available to you.
              </span>
            </p>
          </div>
        </div>

        <div
          className={isSmallScreen ? "" : " pr-12 pl-12 vertical-line"}
        ></div>

        <div className="max-w-full sm:max-w-sm rounded overflow-hidden shadow-lg ">
          <div className=" py-4">
            <div className="font-bold text-2xl mb-2">Contact Details</div>
            <div className="flex ">
              <hr className="h-2 w-2/4 border-gray-400 pb-4" />
            </div>
            <p className="text-gray-300 text-xl mb-2">
              Infosec Media Solutions
            </p>
            <p
              className="text-gray-300 text-sm cursor-pointer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="address"
                width="60"
                height="60"
                style={{ fill: "white" }}
                className="pr-2"
                onClick={handleAddressClick}
              >
                <path d="M49.00001,34h-3.59998c-4.88,6.70996-11.27002,11.16998-11.70001,11.46997-.5,.35004-1.09003,.53003-1.70001,.53003s-1.20001-.17999-1.70001-.53003c-.42999-.29999-6.81995-4.76001-11.69995-11.46997h-3.60004c-2.14581-.04651-4.03583,1.88818-3.99994,4-.00006,0-.00006,20-.00006,20,0,2.20996,1.79004,4,4,4H49.00001c2.21002,0,4-1.79004,4-4v-20c.03302-2.14868-1.87878-4.03577-4-4Zm2,24c0,1.09998-.89996,2-2,2H15.00001c-1.09998,0-2-.90002-2-2v-20c0-.27002,.06-.54004,.16003-.78003l15.70996,12.56c.91003,.73004,2.02002,1.09003,3.13,1.09003s2.22003-.35999,3.12-1.09003l15.72003-12.56c.09998,.23999,.15997,.51001,.15997,.78003v20Z"></path>
                <path d="M46.00001 52h-5c-1.64996 0-3 1.34998-3 3s1.35004 3 3 3h5c3.95312-.10883 3.95502-5.89099 0-6zM31.4336 43.82324c.34106.23438.79175.23438 1.13281 0 .6709-.46191 16.43359-11.45117 16.43359-24.82324 0-9.37402-7.62598-17-17-17S15.00001 9.62598 15.00001 19c0 13.37207 15.7627 24.36133 16.43359 24.82324zm.56641-39.82324c8.271 0 15 6.72852 15 15 0 10.95898-12.20068 20.67871-15 22.76367-2.79932-2.08496-15-11.80469-15-22.76367 0-8.27148 6.729-15 15-15z"></path>
                <path d="M42.00001,19c0-5.51416-4.48584-10-10-10-13.26636,.54907-13.26251,19.45288,.00006,20,5.5141,0,9.99994-4.48584,9.99994-10Z"></path>
              </svg>
              <span>
                <u>
                  C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New Delhi
                  - 110092
                </u>
              </span>
            </p>

            <p
              className="text-gray-300 text-sm cursor-pointer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                style={{ fill: "white" }}
                className="pr-2"
                viewBox="0 0 24 24"
                id="call"
              >
                <path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path>
              </svg>
              +91 <span onClick={handlePhoneNumberClick}>9718627660</span>
            </p>

            <p
              className="text-gray-300 text-sm cursor-pointer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 96"
                width="36"
                height="36"
                style={{ fill: "white" }}
                className="pr-2"
                id="email"
              >
                <g>
                  <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                </g>
              </svg>
              <span onClick={handleEmailClick}>
                &nbsp;bhupendra@infosecmediasolutions.com
              </span>
              <br />
            </p>

            <p
              className="text-gray-300 text-sm cursor-pointer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 96"
                width="36"
                height="36"
                style={{ fill: "white" }}
                className="pr-2"
                id="email"
              >
                <g>
                  <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                </g>
              </svg>
              <span onClick={handleEmailClick}>
                &nbsp;sales@infosecmediasolutions.com
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="list h-10">
        {/* Your content goes here */}
        &nbsp;
      </div>
      <div className="container mx-auto">
        <p className="text-center">&copy; 2024 Infosec Media Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;

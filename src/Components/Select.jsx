import React, { useState, useEffect } from "react";
import "react-whatsapp-widget/dist/index.css";
import windowslogo from "../Assets/softwares logo/windows.svg";
import affinitylogo from "../Assets/softwares logo/affinity-designer.svg";
import bitdefenderlogo from "../Assets/softwares logo/bitdefender.svg";
import gimplogo from "../Assets/softwares logo/gimp.svg";
import googlelogo from "../Assets/softwares logo/google.svg";
import illustratorlogo from "../Assets/softwares logo/illustrator.svg";
import macoslogo from "../Assets/softwares logo/macos.svg";
import microsoft365logo from "../Assets/softwares logo/microsoft-365.svg";
import photoshoplogo from "../Assets/softwares logo/photoshop.svg";
import sketchlogo from "../Assets/softwares logo/sketch.svg";
import ubuntulogo from "../Assets/softwares logo/ubuntu.svg";
import microsoftofficelogo from "../Assets/softwares logo/microsoft-office.svg";
import coreldrawlogo from "../Assets/softwares logo/coreldraw.svg";
import mcafeelogo from "../Assets/softwares logo/mcafee.svg"
import avastlogo from "../Assets/softwares logo/avast.svg"
import defenderlogo from "../Assets/softwares logo/Windows_Defender-Logo.wine.svg"
import nortonlogo from "../Assets/softwares logo/norton.svg";
import kaperskylogo from "../Assets/softwares logo/Kaspersky.svg"
import libreofficelogo from "../Assets/softwares logo/LibreOffice.svg"
// import logo from "../Assets/softwares logo"
import Seo from "./Seo";


const productsData = {
  Apple: [
    {
      name: "iMac",
      variants: [
        {
          model: "24-inch iMac (M1)",
          processorOptions: ["M1"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB"],
        },
      ],
    },
    {
      name: "Mac mini",
      variants: [
        {
          model: "Mac mini (M1)",
          processorOptions: ["M1"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB"],
        },
        {
          model: "Mac mini (M2)",
          processorOptions: ["M2"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB", "24GB"],
        },
      ],
    },
    {
      name: "Mac Pro",
      variants: [
        {
          model: "Mac Pro (Intel)",
          processorOptions: ["Intel Xeon W"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB", "4TB", "8TB"],
          memoryOptions: [
            "32GB",
            "48GB",
            "96GB",
            "192GB",
            "384GB",
            "768GB",
            "1.5TB",
          ],
        },
      ],
    },
    {
      name: "Mac Studio",
      variants: [
        {
          model: "Mac Studio (M1 Max)",
          processorOptions: ["M1 Max"],
          storageOptions: ["512GB", "1TB", "2TB", "4TB", "8TB"],
          memoryOptions: ["32GB", "64GB"],
        },
        {
          model: "Mac Studio (M1 Ultra)",
          processorOptions: ["M1 Ultra"],
          storageOptions: ["1TB", "2TB", "4TB", "8TB"],
          memoryOptions: ["64GB", "128GB"],
        },
      ],
    },
    {
      name: "MacBook Air",
      variants: [
        {
          model: "MacBook Air (M1)",
          processorOptions: ["M1"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB"],
        },
        {
          model: "MacBook Air (M2)",
          processorOptions: ["M2"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB", "24GB"],
        },
      ],
    },
    {
      name: "MacBook Pro",
      variants: [
        {
          model: "MacBook Pro 13-inch (M2)",
          processorOptions: ["M2"],
          storageOptions: ["256GB", "512GB", "1TB", "2TB"],
          memoryOptions: ["8GB", "16GB", "24GB"],
        },
        {
          model: "MacBook Pro 14-inch (M1 Pro, M1 Max)",
          processorOptions: ["M1 Pro", "M1 Max"],
          storageOptions: ["512GB", "1TB", "2TB", "4TB", "8TB"],
          memoryOptions: ["16GB", "32GB", "64GB"],
        },
        {
          model: "MacBook Pro 16-inch (M1 Pro, M1 Max)",
          processorOptions: ["M1 Pro", "M1 Max"],
          storageOptions: ["512GB", "1TB", "2TB", "4TB", "8TB"],
          memoryOptions: ["16GB", "32GB", "64GB"],
        },
      ],
    },
    {
      name: "Studio Display",
      variants: [
        {
          model: "Studio Display (5k, 27 inch, 600 nits brightness)",
          processorOptions: [],
          storageOptions: [],
          memoryOptions: [],
        },
      ],
    },
    {
      name: "Pro Display XDR",
      variants: [
        {
          model: "Pro Display XDR (6k, 32 inch, 1600 nits brightness)",
          processorOptions: [],
          storageOptions: [],
          memoryOptions: [],
        },
      ],
    },
  ],
  Windows: [
    // Add other brands' products here...
  ],
};

// Define the product data for Windows
const windowsData = {
  Desktop: {
    processorOptions: [
      "Dont Know Much",
      "Intel i3",
      "Intel i5",
      "Intel i7",
      "Intel i9",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
    graphicsOptions: [
      "No Graphic Card",
      "Dont Know Much",
      "NVIDIA GTX 1650",
      "NVIDIA GTX 3050",
      "NVIDIA GTX 3060",
      "NVIDIA GTX 4070",
      "NVIDIA GTX 4090",
      "AMD Radeon RX 550",
    ],
    storageOptions: [
      "Dont Know Much",
      "256GB HDD",
      "512GB HDD",
      "1TB HDD",
      "2TB HDD",
      "4TB HDD",
      "256GB SSD",
      "512GB SSD",
      "1TB SSD",
      "2TB SSD",
      "4TB SSD",
    ],
    memoryOptions: ["Dont Know Much", "8GB", "16GB", "32GB", "64GB"],
  },
  Laptop: {
    processorOptions: [
      "Dont Know Much",
      "Intel i3",
      "Intel i5",
      "Intel i7",
      "Intel i9",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
    graphicsOptions: [
      "No Graphic Card",
      "Dont Know Much",
      "Intel Iris Xe",
      "NVIDIA GTX 1650",
      "NVIDIA GTX 3050",
      "NVIDIA GTX 3060",
      "NVIDIA GTX 4070",
      "NVIDIA GTX 4090",
      "AMD Radeon RX 550",
    ],
    storageOptions: [
      "Dont Know Much",
      "256GB HDD",
      "512GB HDD",
      "1TB HDD",
      "2TB HDD",
      "256GB SSD",
      "512GB SSD",
      "1TB SSD",
      "2TB SSD",
    ],
    memoryOptions: ["Dont Know Much", "8GB", "16GB", "32GB"],
  },
};

// Define the product data for Monitors, Audio, and Softwares
const additionalData = {
  Monitors: {
    screenSizeOptions: [
      "Dont Know Much",
      "19 inch",
      "21 inch",
      "24 inch",
      "27 inch",
      "32 inch",
      "34 inch",
      "42 inch",
    ],
    resolutionOptions: [
      "Dont Know Much",
      "HD",
      "Full HD",
      "QHD",
      "4K",
      "5K",
      "8K",
    ],
    panelTypeOptions: ["Dont Know Much", "TN", "IPS", "VA", "OLED", "QLED"],
    refreshRateOptions: [
      "Dont Know Much",
      "60Hz",
      "75Hz",
      "120Hz",
      "144Hz",
      "165Hz",
      "240Hz",
      "360Hz",
    ],
  },
  Audio: {
    speakerTypeOptions: [
      "Dont Know Much",
      "2.0",
      "2.1",
      "5.1",
      "7.1",
      "Soundbar",
    ],
    headphoneTypeOptions: [
      "Dont Know Much",
      "Over-Ear",
      "On-Ear",
      "In-Ear",
      "Wireless",
      "Wired",
      "Noise-Cancelling",
    ],
    microphoneTypeOptions: [
      "Dont Know Much",
      "Desktop",
      "Lapel",
      "Headset",
      "USB",
      "XLR",
    ],
  },
  Softwares: {
    operatingSystemOptions: [
      "Windows",
      "macOS",
      "Linux",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Affinity Designer",
      "Sketch",
      "GIMP",
      "Norton",
      "McAfee",
      "Kaspersky",
      "Bitdefender",
      "Avast",
      "Windows Defender",
      "Microsoft Office",
      "Microsoft 365",
      "Google Workspace",
      "LibreOffice",
    ],
  },
};

const softwareImages = {
  "Windows ": windowslogo,
  macOS: macoslogo,
  Linux: ubuntulogo,
  "Adobe Photoshop": photoshoplogo,
  "Adobe Illustrator": illustratorlogo,
  CorelDRAW: coreldrawlogo,
  "Affinity Designer": affinitylogo,
  Sketch: sketchlogo,
  GIMP: gimplogo,
  Norton: nortonlogo,
  McAfee: mcafeelogo,
  Kaspersky: kaperskylogo,
  Bitdefender: bitdefenderlogo,
  Avast: avastlogo,
  "Windows Defender": defenderlogo,
  "Microsoft Office": microsoftofficelogo,
  "Microsoft 365": microsoft365logo,
  "Google Workspace": googlelogo,
  LibreOffice: libreofficelogo,
};

// Merge additionalData into windowsData
// Object.assign(windowsData, additionalData);

const Select = ({ arg }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedGraphics, setSelectedGraphics] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedProcessor, setSelectedProcessor] = useState("");
  // const [selectedDisplay, setSelectedDisplay] = useState(""); // New state for selected display
  // Reset selectedProcessor in handleBrandSelect, handleProductSelect, handleVariantSelect
  const [inputedText, setInputedText] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let mobileno = 9718617660;
  let emailas = "sales@infosecmediasolutions.com";
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);

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

  const handleWhatsAppClick = () => {
    const phoneNumber = `${mobileno}`; // Your WhatsApp number
    let specifications = `Hello Bhupendra Sir,\nI want to ${arg}\nCategory: ${selectedBrand}`;

    // Append product-specific details based on selectedBrand
    switch (selectedBrand) {
      case "Apple":
        if (
          selectedProduct === "Studio Display" ||
          selectedProduct === "Pro Display XDR"
        ) {
          specifications += `\nProduct: ${selectedProduct}\nSize: ${
            selectedProduct === "Studio Display" ? "27 inch" : "32 inch"
          }\nResolution: ${
            selectedProduct === "Studio Display" ? "5K" : "6K"
          }\nBrightness: ${
            selectedProduct === "Studio Display" ? "600 nits" : "1600 nits"
          }`;
        } else {
          specifications += `\nModel: ${selectedVariant.model}\nProduct: ${selectedProduct}\nProcessor: ${selectedProcessor}\nStorage: ${selectedStorage}\nMemory: ${selectedMemory}`;
        }
        break;
      case "Windows":
        specifications += `\nModel: ${selectedProductType}\nProcessor: ${selectedProcessor}\nStorage: ${selectedStorage}\nMemory: ${selectedMemory}`;
        break;
      case "Monitors":
        specifications += `\nFor: ${selectedProductType}\nScreen Size: ${selectedProcessor}\nResolution: ${selectedGraphics}\nPanel: ${selectedStorage}\nRefresh Rate: ${selectedMemory}`;
        break;
      case "Audio":
      case "Softwares":
         specifications += `\nSelected Softwares:\n${selectedSoftwares.join(
           "\n"
         )}`;
        break;
      default:
        break;
    }

    // Add inputedText if arg is Upgrade or Repair
    if (arg === "Upgrade" || arg === "Repair") {
      specifications += `\nDescription: \nWant to ${arg} -> ${inputedText}`;
    }

    const message = encodeURIComponent(specifications);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleWhatsApp = () => {
    const phoneNumber = `${mobileno}`; // Your WhatsApp number
    let specifications = `Hii, Bhupendra Sir`;
    // Add inputedText if arg is Upgrade or Repair
    if (arg === "Upgrade" || arg === "Repair") {
      specifications += `\nDescription: \nWant to ${arg} -> ${inputedText}`;
    }
    const message = encodeURIComponent(specifications);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleEmailClick = () => {
    const recipient = `${emailas}`;
    const subject = encodeURIComponent(`Want to ${arg}`);
    let body = encodeURIComponent(
      `Hello Bhupendra Sir,
      I want to ${arg}
      Category: ${selectedBrand}\n`
    );

    // Append product-specific details based on selectedBrand
    switch (selectedBrand) {
      case "Apple":
        if (
          selectedProduct === "Studio Display" ||
          selectedProduct === "Pro Display XDR"
        ) {
          body += `%0D%0A Product: ${selectedProduct}%0D%0A Size: ${
            selectedProduct === "Studio Display" ? "27 inch" : "32 inch"
          }%0D%0A Resolution: ${
            selectedProduct === "Studio Display" ? "5K" : "6K"
          }%0D%0A Brightness: ${
            selectedProduct === "Studio Display" ? "600 nits" : "1600 nits"
          }`;
        } else {
          body += `%0D%0AModel: ${selectedVariant.model}%0D%0A Product: ${selectedProduct}%0D%0A Processor: ${selectedProcessor}%0D%0A Storage: ${selectedStorage}%0D%0A Memory: ${selectedMemory}`;
        }

        break;
      case "Windows":
        body += `Model: ${selectedProductType}%0D%0A Processor: ${selectedProcessor}%0D%0A Storage: ${selectedStorage}%0D%0A Memory: ${selectedMemory}`;
        break;
      case "Monitors":
        body += `For: ${selectedProductType}%0D%0A Screen Size: ${selectedProcessor}%0D%0A Resolution: ${selectedGraphics}%0D%0A Panel: ${selectedStorage}%0D%0A Refresh Rate: ${selectedMemory}`;
        break;
      case "Audio":
      case "Softwares":
        body += `%0D%0ASelected Softwares:%0D%0A${selectedSoftwares.join(
          "%0D%0A"
        )}`;
        break;
      default:
        break;
    }
     

    // Add inputedText if arg is Upgrade or Repair
    if (arg === "Upgrade" || arg === "Repair") {
      body += `%0D%0A%0D%0A Description:%0D%0A Want to ${arg} -> ${inputedText}`;
    }

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleEmail = () => {
    const recipient = `${emailas}`;
    const subject = encodeURIComponent("Enquiry");
    let body = encodeURIComponent(`Hii, Bhupendra Sir\n`);
    // Add inputedText if arg is Upgrade or Repair
    if (arg === "Upgrade" || arg === "Repair") {
      body += `%0D%0ADescription:%0D%0A Want to ${arg} -> ${inputedText}%0D%0A`;
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleProductTypeSelect = (productType) => {
    setSelectedProductType(productType);
    setSelectedProcessor("");
    setSelectedGraphics("");
    setSelectedStorage("");
    setSelectedMemory("");
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSelectedProduct("");
    setSelectedVariant(null);
    setSelectedProcessor("");
    setSelectedGraphics("");
    setSelectedStorage("");
    setSelectedMemory("");
    setSelectedSoftwares("");
    // setSelectedDisplay(""); // Reset selectedDisplay
    setSelectedProductType(""); // Reset selectedProductType for Windows
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedVariant(null);
    setSelectedProcessor("");
    setSelectedGraphics("");
    setSelectedStorage("");
    setSelectedMemory("");
    // setSelectedDisplay(""); // Reset selectedDisplay
    setSelectedVariant("");
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setSelectedProcessor("");
    setSelectedStorage("");
    setSelectedMemory("");
    // setSelectedDisplay(""); // Reset selectedDisplay
  };

  const handleSoftwareSelect = (software) => {
    setSelectedSoftwares((prevSelected) =>
      prevSelected.includes(software)
        ? prevSelected.filter((s) => s !== software)
        : [...prevSelected, software]
    );
  };

  const handleProcessorSelect = (processor) => {
    setSelectedProcessor(processor);
  };

  const handleGraphicsSelect = (graphics) => {
    setSelectedGraphics(graphics);
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  const handleMemorySelect = (memory) => {
    setSelectedMemory(memory);
  };

  // const handleDisplaySelect = (display) => {
  //   // New handler for display selection
  //   setSelectedDisplay(display);
  // };

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

  return (
    <div className="h-auto flex flex-col items-center p-4">
      <Seo
        title="Products - Infosec Media"
        description="Infosec Media is a leading provider of computer sales, service, and corporate rentals. We cater to a range of customer requirements, from desktops to workstations, and provide premier services to consumers and large corporations alike."
        keywords="Infosec Media, computer sales, computer service, corporate rentals, Apple, Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel, AMD"
      />
      <h1 className="text-2xl font-semibold text-center text-cs3 mt-16 mb-4">
        Select {arg !== "Buy" && arg !== "Rent" ? <>your</> : <></>} Product to{" "}
        {arg}
      </h1>
      <hr className="h-2 w-2/4 border-cs1 pb-2 mb-9" />
      {/* Brand Selection */}
      <div
        className={
          isSmallScreen ? "mb-16 flex icon-grid" : " mb-14 flex flex-row "
        }
      >
        <button
          id="apple"
          onClick={() => handleBrandSelect("Apple")}
          className={`rounded md:mx-8 md:mt-3 transform transition duration-300 hover:scale-110 md:hover:scale-125 selecter  hover:bg-cs1 ease-in-out ${
            selectedBrand === "Apple"
              ? "bg-gray-300 hover:bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="160"
            height="76"
            className="my-4"
            // style={{ fill: "#1B263B" }}
          >
            <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
          </svg>
          <span className="tooltip-text">Apple Devices</span>
        </button>
        <button
          id="windows"
          onClick={() => handleBrandSelect("Windows")}
          className={`rounded md:mx-8 md:mt-3 transform transition duration-300 hover:scale-110 md:hover:scale-125 hover:bg-cs1 ease-in-out ${
            selectedBrand === "Windows"
              ? "bg-gray-300 hover:bg-gray-300 text-white"
              : "bg-white border"
          }`}
          title="Windows Devices"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="160"
            height="76"
            viewBox="0 0 48 48"
            className="my-4"
            // style={{ fill: "#1B263B" }}
          >
            <path
              // fill="#1B263B"
              // fill="#00b0ff"
              d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
            ></path>
          </svg>
          <span className="tooltip-text">Windows Devices</span>
        </button>

        <button
          id="monitor"
          onClick={() => handleBrandSelect("Monitors")}
          className={`rounded md:mx-8 md:mt-3 transform transition duration-300 hover:scale-110 md:hover:scale-125 hover:bg-cs1 ease-in-out ${
            selectedBrand === "Monitors"
              ? "bg-gray-300 hover:bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="76"
            viewBox="0 0 64 64"
            className="my-4"
          >
            <path
              fill="none"
              // stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M60.8 11.2v33.6c0 1-.8 1.8-1.8 1.8H5c-1 0-1.8-.8-1.8-1.8V11.2c0-1 .8-1.8 1.8-1.8h54c1 0 1.8.8 1.8 1.8zM3.2 39.1h57.6M30.2 42.8h3.6M46.4 54.6H17.6h0c0-2 2.4-3.7 5.3-3.7h18.2c2.9 0 5.3 1.7 5.3 3.7h0zM27.1 46.6 25 50.9M39 50.9l-2.1-4.3"
            ></path>
          </svg>
          <span className="tooltip-text">Monitor</span>
        </button>

        <button
          id="audio"
          onClick={() => handleBrandSelect("Audio")}
          className={` rounded md:mx-8 md:mt-3 transform transition duration-300 hover:scale-110 md:hover:scale-125 hover:bg-cs1 ease-in-out ${
            selectedBrand === "Audio"
              ? "bg-gray-300 hover:bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 512 512"
            width="160"
            height="76"
            viewBox="0 0 512 512"
            className="my-4"
          >
            <path
              d="M471,226c22.056,0,40-17.944,40-40V41c0-22.056-17.944-40-40-40H41C18.944,1,1,18.944,1,41v145c0,22.056,17.944,40,40,40
			h10v20H41c-22.056,0-40,17.944-40,40v145c0,22.056,17.944,40,40,40h10v30c0,5.522,4.478,10,10,10h50c5.522,0,10-4.478,10-10v-30
			h270v30c0,5.522,4.478,10,10,10h50c5.522,0,10-4.478,10-10v-30h10c22.056,0,40-17.944,40-40V286c0-22.056-17.944-40-40-40h-10v-20
			H471z M21,41c0-11.028,8.972-20,20-20h430c11.028,0,20,8.972,20,20v125H21V41z M41,298.5c0-5.522,4.478-10,10-10h170
			c5.522,0,10,4.478,10,10v80c0,5.522-4.478,10-10,10H51c-5.522,0-10-4.478-10-10V298.5z M71,246v-20h30v20H71z M341,358.5
			c-5.522,0-10-4.478-10-10s4.478-10,10-10h10v-40c0-5.522,4.478-10,10-10s10,4.478,10,10v40h10c5.522,0,10,4.478,10,10
			s-4.478,10-10,10h-10v20c0,5.522-4.478,10-10,10s-10-4.478-10-10v-20H341z M121,246v-20h270v20H121z M261,328.5
			c-5.522,0-10-4.478-10-10s4.478-10,10-10h10v-10c0-5.522,4.478-10,10-10s10,4.478,10,10v10h10c5.522,0,10,4.478,10,10
			s-4.478,10-10,10h-10v50c0,5.522-4.478,10-10,10s-10-4.478-10-10v-50H261z M101,491H71v-20h30V491z M441,491h-30v-20h30V491z
			 M491,431c0,11.028-8.972,20-20,20H41c-11.028,0-20-8.972-20-20H491z M471,328.5c0,5.522-4.478,10-10,10h-10v40
			c0,5.522-4.478,10-10,10s-10-4.478-10-10v-40h-10c-5.522,0-10-4.478-10-10s4.478-10,10-10h10v-20c0-5.522,4.478-10,10-10
			s10,4.478,10,10v20h10C466.522,318.5,471,322.978,471,328.5z M411,246v-20h30v20H411z M41,206c-11.028,0-20-8.972-20-20h470
			c0,11.028-8.972,20-20,20H41z"
            ></path>
            <rect width="150" height="60" x="61" y="308.5"></rect>
            <path
              d="M356,41H156c-5.522,0-10,4.478-10,10v85c0,5.522,4.478,10,10,10h200c5.522,0,10-4.478,10-10V51
			C366,45.478,361.522,41,356,41z M346,126h-20v-15c0-5.522-4.478-10-10-10s-10,4.478-10,10v15h-20V91c0-5.522-4.478-10-10-10
			s-10,4.478-10,10v35h-20v-15c0-5.522-4.478-10-10-10s-10,4.478-10,10v15h-20V91c0-5.522-4.478-10-10-10s-10,4.478-10,10v35h-20V61
			h180V126z"
            ></path>
            <circle cx="83.5" cy="93.5" r="40"></circle>
            <circle cx="428.5" cy="93.5" r="40"></circle>
          </svg>
          <span className="tooltip-text">Audio Devices</span>
        </button>
        <button
          id="software"
          onClick={() => handleBrandSelect("Softwares")}
          className={`rounded md:mx-8 md:mt-3 transform transition duration-300 hover:scale-110 md:hover:scale-125 hover:bg-cs1 ease-in-out ${
            selectedBrand === "Softwares"
              ? "bg-gray-300 hover:bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="76"
            viewBox="0 0 32 32"
            className="my-4"
          >
            <path
              fill="#0bf"
              d="M21,11A10,10,0,1,0,31,21,10,10,0,0,0,21,11Zm0,13a3,3,0,1,1,3-3A3,3,0,0,1,21,24Z"
            ></path>
            <circle
              cx="21"
              cy="21"
              r="10"
              fill="none"
              // stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
            <polyline
              fill="none"
              // stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              points="6 1 23 5 23 8"
            ></polyline>
            <polyline
              fill="none"
              // stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              points="14 29 6 31 1 29 1 2 6 1 6 31"
            ></polyline>
            <circle
              cx="21"
              cy="21"
              r="3"
              fill="none"
              // stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span className="tooltip-text">Software</span>
        </button>
      </div>

      {/* Product Selection */}
      {selectedBrand === "Apple" && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 ">
          {productsData[selectedBrand].map((product) => (
            <div
              key={product.name}
              onClick={() => handleProductSelect(product.name)}
              className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1  hover:text-white ease-in-out  ${
                selectedProduct === product.name
                  ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                  : "bg-white border"
              }`}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
      {/* Product Type Selection for windows*/}
      {selectedBrand === "Windows" && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-cs3">
            Select Product Type :-
          </h3>
          <div className="flex ">
            <button
              onClick={() => handleProductTypeSelect("Desktop")}
              className={`p-3 m-10 text-xl rounded transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                selectedProductType === "Desktop"
                  ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                  : "bg-white border "
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => handleProductTypeSelect("Laptop")}
              className={`ml-2 p-3 m-10 text-xl rounded transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                selectedProductType === "Laptop"
                  ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                  : "bg-white border"
              }`}
            >
              Laptop
            </button>
          </div>
        </div>
      )}
      {/* // Product Type Selection for monitors*/}
      {selectedBrand === "Monitors" && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-cs3">
            Select Your Needs:
          </h3>
          <div className="flex ">
            <button
              onClick={() => handleProductTypeSelect("Editing")}
              className={`p-3 m-10 text-xl rounded transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                selectedProductType === "Editing"
                  ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                  : "bg-white border"
              }`}
            >
              Editing
            </button>
            <button
              onClick={() => handleProductTypeSelect("Gaming")}
              className={`ml-2 p-3 m-10 text-xl rounded transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                selectedProductType === "Gaming"
                  ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                  : "bg-white border"
              }`}
            >
              Gaming
            </button>
          </div>
        </div>
      )}
      {(selectedProductType === "Gaming" ||
        selectedProductType === "Editing") && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2 text-cs3">
            Select Specifications:
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Screen Size :
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* {windowsData[selectedProductType].processorOptions.map( */}
              {additionalData[selectedBrand].screenSizeOptions.map(
                (screenSize, index) => (
                  <div
                    key={index}
                    onClick={() => handleProcessorSelect(screenSize)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedProcessor === screenSize
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {screenSize}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Resolution:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* {windowsData[selectedProductType].processorOptions.map( */}
              {additionalData[selectedBrand].resolutionOptions.map(
                (res, index) => (
                  <div
                    key={index}
                    onClick={() => handleGraphicsSelect(res)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedGraphics === res
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {res}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Panel Type:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* {windowsData[selectedProductType].processorOptions.map( */}
              {additionalData[selectedBrand].panelTypeOptions.map(
                (panel, index) => (
                  <div
                    key={index}
                    onClick={() => handleStorageSelect(panel)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedStorage === panel
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {panel}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Refresh Rate:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* {windowsData[selectedProductType].processorOptions.map( */}
              {additionalData[selectedBrand].refreshRateOptions.map(
                (rr, index) => (
                  <div
                    key={index}
                    onClick={() => handleMemorySelect(rr)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedMemory === rr
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {rr}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
      {selectedBrand === "Audio" && <div>hello</div>}

      {/* {selectedBrand === "Softwares" && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2 text-cs3">
            Select Software :-
          </h2>
          <div className="mb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* {windowsData[selectedProductType].processorOptions.map( */}
      {/* {additionalData[selectedBrand].operatingSystemOptions.map(
                (os, index) => (
                  <div
                    key={index}
                    onClick={() => handleProcessorSelect(os)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedProcessor === os
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {os}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )} */}

      {/* Configuration Options */}
      {(selectedProductType === "Desktop" ||
        selectedProductType === "Laptop") && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2 text-cs3">
            Select Specifications
          </h2>
          {/* Processor Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Processor:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].processorOptions.map(
                (processor, index) => (
                  <div
                    key={index}
                    onClick={() => handleProcessorSelect(processor)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedProcessor === processor
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {processor}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Graphics Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Graphics Card:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {windowsData[selectedProductType].graphicsOptions.map(
                (graphics, index) => (
                  <div
                    key={index}
                    onClick={() => handleGraphicsSelect(graphics)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedGraphics === graphics
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {graphics}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Storage Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Storage:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].storageOptions.map(
                (storage, index) => (
                  <div
                    key={index}
                    onClick={() => handleStorageSelect(storage)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedStorage === storage
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {storage}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Memory Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Memory:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].memoryOptions.map(
                (memory, index) => (
                  <div
                    key={index}
                    onClick={() => handleMemorySelect(memory)}
                    className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedMemory === memory
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border"
                    }`}
                  >
                    {memory}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
      {/* Variant Selection */}
      {selectedProduct && (
        <div>
          {selectedProduct === "Studio Display" ||
          selectedProduct === "Pro Display XDR" ? (
            <></>
          ) : (
            <>
              {productsData[selectedBrand]
                .find((product) => product.name === selectedProduct)
                .variants.map((variant, index) => (
                  <div
                    key={index}
                    onClick={() => handleVariantSelect(variant)}
                    className={`p-4 border rounded cursor-pointer mb-2 transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                      selectedVariant === variant
                        ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                        : "bg-white border "
                    }`}
                  >
                    <div>{variant.model}</div>

                    <div>
                      Storage Options: {variant.storageOptions.join(", ")}
                    </div>
                    <div>
                      Memory Options: {variant.memoryOptions.join(", ")}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      )}
      {selectedVariant && (
        <div className="mt-4">
          {/* Processor Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Processor:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.processorOptions.map((processor, index) => (
                <div
                  key={index}
                  onClick={() => handleProcessorSelect(processor)}
                  className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                    selectedProcessor === processor
                      ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                      : "bg-white border"
                  }`}
                >
                  {processor}
                </div>
              ))}
            </div>
          </div>

          {/* Storage Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Storage:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.storageOptions.map((storage, index) => (
                <div
                  key={index}
                  onClick={() => handleStorageSelect(storage)}
                  className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                    selectedStorage === storage
                      ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                      : "bg-white border"
                  }`}
                >
                  {storage}
                </div>
              ))}
            </div>
          </div>

          {/* Memory Options */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-cs3">
              Select Memory:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.memoryOptions.map((memory, index) => (
                <div
                  key={index}
                  onClick={() => handleMemorySelect(memory)}
                  className={`p-4 border rounded cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out ${
                    selectedMemory === memory
                      ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                      : "bg-white border"
                  }`}
                >
                  {memory}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedBrand === "Softwares" && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cs3 flex items-center justify-center">
            Select Software :-
          </h2>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
            {Object.keys(softwareImages).map((software) => (
              <div
                key={software}
                className={`cursor-pointer md:mx-14 my-1 p-4 border rounded-xl transform transition duration-300 hover:scale-110 hover:bg-cs1 hover:text-white ease-in-out software ${
                  selectedSoftwares.includes(software)
                    ? "bg-gray-300 hover:bg-gray-300 hover:text-white"
                    : "bg-white border "
                }`}
                onClick={() => handleSoftwareSelect(software)}
              >
                <img
                  src={softwareImages[software]}
                  alt={software}
                  className="w-48 h-24 object-contain"
                />

                <div className="text-center mt-2">{software}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedSoftwares.length > 0 && (
        <div className="mt-12 p-6 border rounded-2xl bg-white">
          <h2 className="text-xl font-bold mb-2 text-cs3">
            <u>Selected Softwares</u>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {selectedSoftwares.map((software, index) => (
              <div key={index} className="p-2  bg-cs5 rounded-xl">
                <img
                  src={softwareImages[software]}
                  alt={software}
                  className="w-48 h-24  object-contain"
                />
                <div className="text-center mt-2">{software}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 mt-4 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center">
                <div className="font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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
            <button
              onClick={handleEmailClick}
              className="p-2 mt-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center py-1 px-1">
                <div className="font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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
        </div>
      )}

      {selectedProcessor && selectedStorage && selectedMemory && (
        <div className="mt-4 p-8 border rounded-2xl bg-white">
          <h2 className="text-xl font-bold mb-2 text-cs3">
            <u> Selected Configuration</u>
          </h2>

          {selectedBrand === "Apple" && (
            <div className="">
              <div>Category: {selectedBrand}</div>
              <div>Model: {selectedVariant.model}</div>
              <div>Product: {selectedProduct}</div>
              <div>Processor: {selectedProcessor}</div>
              <div>Storage: {selectedStorage}</div>
              <div>Memory: {selectedMemory}</div>
            </div>
          )}
          {selectedBrand === "Windows" && (
            <div>
              <div>Category: {selectedBrand}</div>
              <div>Model: {selectedProductType}</div>
              <div>Processor: {selectedProcessor}</div>
              <div>Storage: {selectedStorage}</div>
              <div>Memory: {selectedMemory}</div>
            </div>
          )}
          {selectedBrand === "Monitors" && (
            <div>
              <div>Category: {selectedBrand}</div>
              <div>For: {selectedProductType}</div>
              <div>Screen Size: {selectedProcessor}</div>
              <div>Resolution: {selectedGraphics}</div>
              <div>Panel: {selectedStorage}</div>
              <div>Refresh Rate: {selectedMemory}</div>
            </div>
          )}
          {selectedBrand === "Audio" && (
            <div>
              <div>Category: {selectedBrand}</div>
              <div>OS: {selectedProcessor}</div>
              <div>Office Suite: {selectedGraphics}</div>
              <div>Antivirus: {selectedStorage}</div>
              <div>Design Software: {selectedMemory}</div>
            </div>
          )}

          <div className=" flex flex-col items-center justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 mt-4 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center">
                <div className=" font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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

            <button
              onClick={handleEmailClick}
              className="p-2 mt-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center py-1 px-1">
                <div className=" font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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
        </div>
      )}

      {(selectedProduct === "Studio Display" ||
        selectedProduct === "Pro Display XDR") && (
        <div className="mt-4 p-8 border rounded bg-white">
          <h2 className="text-xl font-bold mb-2">Selected Product</h2>
          <div>Brand: {selectedBrand}</div>
          <div>Product: {selectedProduct}</div>
          <div>
            Size: {selectedProduct === "Studio Display" ? "27 inch" : "32 inch"}
          </div>{" "}
          <div>
            Resolution: {selectedProduct === "Studio Display" ? "5K" : "6K"}
          </div>{" "}
          <div>
            Brightness:{" "}
            {selectedProduct === "Studio Display" ? "600 nits" : "1600 nits"}
          </div>{" "}
          {/* WhatsApp Button */}
          <div className=" flex flex-col items-center justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 mt-4 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center">
                <div className=" font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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
            <button
              onClick={handleEmailClick}
              className="p-2 mt-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
            >
              <div className="flex flex-row items-center py-1 px-1">
                <div className=" font-semibold pl-3">
                  Send Specification via{" "}
                </div>
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
        </div>
      )}
      {arg !== "Upgrade" ? (
        <></>
      ) : (
        <>
          <div className="relative mt-10">
            <div className="text-xl text-cs3 font-semibold mb-3">
              What to {arg} ??
            </div>
            <textarea
              className="border-2 border-gray-300 rounded-md px-6 py-2 focus:outline-none focus:border-blue-500 w-full"
              rows="4"
              cols="36"
              placeholder={`Tell what to ${arg} ...`}
              value={inputedText}
              onChange={(e) => setInputedText(e.target.value)}
            ></textarea>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {/* <!-- You can add an icon or any other element here if needed --> */}
            </div>
          </div>
        </>
      )}
      {arg !== "Repair" ? (
        <></>
      ) : (
        <>
          <div className="relative mt-10">
            <div className="text-xl text-cs3 font-semibold mb-3">
              What to {arg} ??
            </div>
            <textarea
              className="border-2 border-gray-300 rounded-md px-6 py-2 focus:outline-none focus:border-blue-500 w-full"
              rows="4"
              cols="36"
              placeholder={`Describe issue/problem to be ${arg} ...`}
              value={inputedText}
              onChange={(e) => setInputedText(e.target.value)}
            ></textarea>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {/* <!-- You can add an icon or any other element here if needed --> */}
            </div>
          </div>
        </>
      )}

      {/* WhatsApp Button */}
      <div className="mb-4 flex md:flex-row flex-col items-stretch mt-9">
        {/* call Widget */}
        <button
          onClick={handlePhoneNumberClick}
          className=" mx-12 p-2 mt-6 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
        >
          <div className="flex flex-row items-center px-1 h-full">
            <div className=" font-semibold pl-3">Contact via </div>
            <div className="px-3">
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
            </div>
          </div>
        </button>
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className=" mx-12 p-2 md:mt-6 mt-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
        >
          <div className="flex flex-row items-center px-1 h-full">
            <div className=" font-semibold pl-3">Contact via </div>
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
        {/* Add this button alongside the WhatsApp button */}
        <button
          onClick={handleEmail}
          className=" mx-12 p-2 md:mt-6 mt-2 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
        >
          <div className="flex flex-row items-center py-1 px-1 h-full">
            <div className=" font-semibold pl-3">Contact via </div>
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
      <div className=" h-14 bg-cs5">
        {/* Your content goes here */}
        &nbsp; &nbsp;
      </div>
    </div>
  );
};

export default Select;

import React, { useState } from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";


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

const Select = ({ arg }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedGraphics, setSelectedGraphics] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedDisplay, setSelectedDisplay] = useState(""); // New state for selected display
  // Reset selectedProcessor in handleBrandSelect, handleProductSelect, handleVariantSelect

  const handleWhatsAppClick = () => {
    const phoneNumber = "9210760003"; // Your WhatsApp number
    const specifications = `Hello Bhupendra Sir,\n I want to ${arg} \nBrand: ${selectedBrand}\nProduct: ${selectedProduct}\nProcessor: ${selectedProcessor}\nStorage: ${selectedStorage}\nMemory: ${selectedMemory}`;
    const message = encodeURIComponent(specifications);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };
  const handleWhatsApp = () => {
    const phoneNumber = "9210760003"; // Your WhatsApp number
    const specifications = `Hii, Bhupendra Sir`;
    const message = encodeURIComponent(specifications);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  const handleEmailClick = () => {
    const recipient = "sales@infosecmediasolutions.com";
    const subject = encodeURIComponent(`Want to ${arg}`);
    const body = encodeURIComponent(
      `Hello Bhupendra Sir,\n I want to ${arg} \nBrand: ${selectedBrand}\nProduct: ${selectedProduct}\nProcessor: ${selectedProcessor}\nStorage: ${selectedStorage}\nMemory: ${selectedMemory}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleEmail = () => {
    const recipient = "sales@infosecmediasolutions.com";
    const subject = encodeURIComponent("Connect");
    const body = encodeURIComponent(`Hii, Bhupendra Sir`);
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
    setSelectedDisplay(""); // Reset selectedDisplay
    setSelectedProductType(""); // Reset selectedProductType for Windows
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedVariant(null);
    setSelectedProcessor("");
    setSelectedGraphics("");
    setSelectedStorage("");
    setSelectedMemory("");
    setSelectedDisplay(""); // Reset selectedDisplay
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setSelectedProcessor("");
    setSelectedStorage("");
    setSelectedMemory("");
    setSelectedDisplay(""); // Reset selectedDisplay
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

  const handleDisplaySelect = (display) => {
    // New handler for display selection
    setSelectedDisplay(display);
  };

  return (
    <div className="h-auto flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mt-16 mb-4">
        Select {arg !== "Buy" && arg !== "Rent" ? <>your</> : <></>} Product to {arg}
      </h1>
      <hr className="h-2 w-2/4 border-gray-400 pb-2 mb-5" />

      {/* Brand Selection */}
      <div className="mb-4 flex md:flex-row flex-col">
        <button
          onClick={() => handleBrandSelect("Apple")}
          className={`p-4 rounded mx-14 mt-3 ${
            selectedBrand === "Apple"
              ? "bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            id="apple"
            width="160"
            height="76"
          >
            <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path>
          </svg>
        </button>
        <button
          onClick={() => handleBrandSelect("Windows")}
          className={`p-2 rounded mx-14 mt-3 ${
            selectedBrand === "Windows"
              ? "bg-gray-300 text-white"
              : "bg-white border"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="160"
            height="76"
            viewBox="0 0 48 48"
          >
            <path
              fill="#00b0ff"
              d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
            ></path>
          </svg>
        </button>
      </div>
      {/* Product Selection */}
      {selectedBrand && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {productsData[selectedBrand].map((product) => (
            <div
              key={product.name}
              onClick={() => handleProductSelect(product.name)}
              className={`p-4 border rounded cursor-pointer ${
                selectedProduct === product.name ? "bg-blue-100" : "bg-white"
              }`}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
      {/* Product Type Selection */}
      {/* // Product Type Selection */}
      {selectedBrand === "Windows" && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select Product Type:</h3>
          <div className="flex">
            <button
              onClick={() => handleProductTypeSelect("Desktop")}
              className={`p-2 rounded ${
                selectedProductType === "Desktop"
                  ? "bg-blue-500 text-white"
                  : "bg-white border"
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => handleProductTypeSelect("Laptop")}
              className={`ml-2 p-2 rounded ${
                selectedProductType === "Laptop"
                  ? "bg-blue-500 text-white"
                  : "bg-white border"
              }`}
            >
              Laptop
            </button>
          </div>
        </div>
      )}
      {/* Configuration Options */}
      {selectedProductType && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Select Specifications</h2>
          {/* Processor Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Processor:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].processorOptions.map(
                (processor, index) => (
                  <div
                    key={index}
                    onClick={() => handleProcessorSelect(processor)}
                    className={`p-4 border rounded cursor-pointer ${
                      selectedProcessor === processor
                        ? "bg-blue-100"
                        : "bg-white"
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
            <h3 className="text-lg font-semibold mb-2">
              Select Graphics Card:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].graphicsOptions.map(
                (graphics, index) => (
                  <div
                    key={index}
                    onClick={() => handleGraphicsSelect(graphics)}
                    className={`p-4 border rounded cursor-pointer ${
                      selectedGraphics === graphics ? "bg-blue-100" : "bg-white"
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
            <h3 className="text-lg font-semibold mb-2">Select Storage:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].storageOptions.map(
                (storage, index) => (
                  <div
                    key={index}
                    onClick={() => handleStorageSelect(storage)}
                    className={`p-4 border rounded cursor-pointer ${
                      selectedStorage === storage ? "bg-blue-100" : "bg-white"
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
            <h3 className="text-lg font-semibold mb-2">Select Memory:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {windowsData[selectedProductType].memoryOptions.map(
                (memory, index) => (
                  <div
                    key={index}
                    onClick={() => handleMemorySelect(memory)}
                    className={`p-4 border rounded cursor-pointer ${
                      selectedMemory === memory ? "bg-blue-100" : "bg-white"
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
                    className={`p-4 border rounded cursor-pointer mb-2 ${
                      selectedVariant === variant ? "bg-blue-100" : "bg-white"
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
            <h3 className="text-lg font-semibold mb-2">Select Processor:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.processorOptions.map((processor, index) => (
                <div
                  key={index}
                  onClick={() => handleProcessorSelect(processor)}
                  className={`p-4 border rounded cursor-pointer ${
                    selectedProcessor === processor ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  {processor}
                </div>
              ))}
            </div>
          </div>

          {/* Storage Options */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Storage:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.storageOptions.map((storage, index) => (
                <div
                  key={index}
                  onClick={() => handleStorageSelect(storage)}
                  className={`p-4 border rounded cursor-pointer ${
                    selectedStorage === storage ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  {storage}
                </div>
              ))}
            </div>
          </div>

          {/* Memory Options */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Memory:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedVariant.memoryOptions.map((memory, index) => (
                <div
                  key={index}
                  onClick={() => handleMemorySelect(memory)}
                  className={`p-4 border rounded cursor-pointer ${
                    selectedMemory === memory ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  {memory}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedProcessor && selectedStorage && selectedMemory && (
        <div className="mt-4 p-4 border rounded bg-white">
          <h2 className="text-xl font-bold mb-2">Selected Configuration</h2>
          <div>Brand: {selectedBrand}</div>
          <div>Product: {selectedProduct}</div>
          {selectedBrand === "Apple" && (
            <div>Model: {selectedVariant.model}</div>
          )}
          {selectedBrand === "Windows" && (
            <div>Model: {selectedProductType}</div>
          )}
          <div>Processor: {selectedProcessor}</div>
          <div>Storage: {selectedStorage}</div>
          <div>Memory: {selectedMemory}</div>
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
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clip-rule="evenodd"
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
        <div className="mt-4 p-4 border rounded bg-white">
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
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clip-rule="evenodd"
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
      {/* WhatsApp Widget */}
      {/* WhatsApp Button */}
      <div className="mb-4 flex md:flex-row flex-col items-stretch mt-9">
        <button
          onClick={handleWhatsApp}
          className=" mx-12 p-2 mt-6 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
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
                  fill-rule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
        {/* Add this button alongside the WhatsApp button */}
        <button
          onClick={handleEmail}
          className=" mx-12 p-2 mt-6 bg-gray-800 hover:bg-gray-600 allproduct rounded-full text-white"
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
      <div className=" h-14" style={{ backgroundColor: "white" }}>
        {/* Your content goes here */}
        &nbsp; &nbsp;
      </div>
    </div>
  );
};


export default Select;

import React, { useState } from "react";

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

const Select = () => {
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Product</h1>
      {/* Brand Selection */}
      <div className="mb-4 flex flex-row">
        <button
          onClick={() => handleBrandSelect("Apple")}
          className={`p-4 rounded ${
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
          className={`ml-2 p-2 rounded ${
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
        </div>
      )}

      {/* Selected Configuration */}
      {/* {selectedVariant && (
        <div>
          {selectedVariant.map((variant, index) => (
            <div
              key={index}
              onClick={() => handleVariantSelect(variant)}
              className={`p-4 border rounded cursor-pointer mb-2 ${
                selectedVariant === variant ? "bg-blue-100" : "bg-white"
              }`}
            >
              <div>{variant.model}</div>
              <div>Storage Options: {variant.storageOptions.join(", ")}</div>
              <div>Memory Options: {variant.memoryOptions.join(", ")}</div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Select;

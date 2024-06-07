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
  ],
  Other: [
    // Add other brands' products here...
  ],
};

const Select = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedProcessor, setSelectedProcessor] = useState("");
  // Reset selectedProcessor in handleBrandSelect, handleProductSelect, handleVariantSelect
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSelectedProduct("");
    setSelectedVariant(null);
    setSelectedProcessor("");
    setSelectedStorage("");
    setSelectedMemory("");
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedVariant(null);
    setSelectedProcessor("");
    setSelectedStorage("");
    setSelectedMemory("");
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setSelectedProcessor("");
    setSelectedStorage("");
    setSelectedMemory("");
  };

  const handleProcessorSelect = (processor) => {
    setSelectedProcessor(processor);
  };


  
  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  const handleMemorySelect = (memory) => {
    setSelectedMemory(memory);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Product</h1>

      {/* Brand Selection */}
      <div className="mb-4">
        <button
          onClick={() => handleBrandSelect("Apple")}
          className={`p-2 rounded ${
            selectedBrand === "Apple"
              ? "bg-blue-500 text-white"
              : "bg-white border"
          }`}
        >
          Apple
        </button>
        <button
          onClick={() => handleBrandSelect("Other")}
          className={`ml-2 p-2 rounded ${
            selectedBrand === "Other"
              ? "bg-blue-500 text-white"
              : "bg-white border"
          }`}
        >
          Other
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

      {/* Variant Selection */}
      {selectedProduct && (
        <div>
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
                <div>Storage Options: {variant.storageOptions.join(", ")}</div>
                <div>Memory Options: {variant.memoryOptions.join(", ")}</div>
              </div>
            ))}
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
          <div>Model: {selectedVariant.model}</div>
          <div>Processor: {selectedProcessor}</div>
          <div>Storage: {selectedStorage}</div>
          <div>Memory: {selectedMemory}</div>
        </div>
      )}
    </div>
  );
};

export default Select;

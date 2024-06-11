import React from "react";
import Select from "../Components/Select";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Products = () => {
 const arg = "Buy";
  
  return (
    <div className="">
      {/* product */}
      <Select arg={arg} />
      <div></div>
    </div>
  );
};

export default Products;

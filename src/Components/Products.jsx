import React from "react";
import Select from "../Components/Select";
import "react-whatsapp-widget/dist/index.css";
import Seo from "./Seo";


const Products = () => {
 const arg = "Buy";
  
  return (
    <div className="">
      <Seo
        title="Buy - Infosec Media"
        description="Infosec Media is a leading provider of computer sales, service, and corporate rentals. We cater to a range of customer requirements, from desktops to workstations, and provide premier services to consumers and large corporations alike."
        keywords="Infosec Media, computer sales, computer service, corporate rentals, Apple, Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel, AMD"
      />
      {/* product */}
      <Select arg={arg} />
      <div></div>
    </div>
  );
};

export default Products;

import React from "react";
import Select from "../Components/Select";
import Seo from "./Seo";


const Services = () => {
   const arg = "Upgrade";

  return (
    <div className="">
      {/* service */}
      <Seo
        title="Services- Infosec Media"
        description="Infosec Media is a leading provider of computer sales, service, and corporate rentals. We cater to a range of customer requirements, from desktops to workstations, and provide premier services to consumers and large corporations alike."
        keywords="Infosec Media, computer sales, computer service, corporate rentals, Apple, Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel, AMD,SSD Upgarde,RAM upgrade,HDD"
      />
      <Select arg={arg} />
    </div>
  );
};

export default Services;

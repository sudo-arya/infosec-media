import React from "react";
import Select from "../Components/Select";
import Seo from "./Seo";


const Repair = () => {
   const arg = "Repair";

  return (
    <div className="">
      {/* Repair */}
      <Seo
        title="Repair - Infosec Media"
        description="Infosec Media is a leading provider of computer sales, service, and corporate rentals. We cater to a range of customer requirements, from desktops to workstations, and provide premier services to consumers and large corporations alike."
        keywords="Infosec Media, computer sales, computer service, corporate rentals, Apple, Lacie, Hp, OWC, Dell, Blackmagic Design, Lenovo, Promise, Intel, AMD,Software Issue,Hardware Issue"
      />
      <Select arg={arg} />
    </div>
  );
};

export default Repair;

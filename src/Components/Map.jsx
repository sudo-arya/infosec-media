import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../Assets/marker-icon.png";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Define custom icon
    const customIcon = L.icon({
      iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 6],
    });

    // Expose handleAddressClick to global scope
    window.handleAddressClick = handleAddressClick;

    // Check if map has already been initialized
    if (!mapRef.current) {
      // Create map
      mapRef.current = L.map("map").setView(
        [28.62191892943327, 77.28403312689852],
        17
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );

      L.marker([28.62191892943327, 77.28403312689852], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(
          '<div style="cursor: pointer; color: blue;" onclick="window.handleAddressClick()"><u>Infosec Media Solutions</u></div>'
        )
        .openPopup();
    }
  }, []); // Only run once, after the initial render

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
    <div className="relative">
      <div
        id="map"
        style={{ width: "100%", height: "400px", marginTop: "5px" }}
        className="rounded-3xl md:mx-2 mx-6"
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center p-2 cursor-pointer"
        onClick={handleAddressClick}
      >
        C-107, 1st Floor, Pandav Nagar Complex Ganesh Nagar, New Delhi - 110092
      </div>
    </div>
  );
};

export default Map;

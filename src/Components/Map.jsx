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
        .bindPopup("Infosec Media Solutions")
        .openPopup();
    }
  }, []); // Only run once, after the initial render

  return (
    <div
      id="map"
      style={{ width: "100", height: "400px", marginTop: "5px" }}
      className="rounded-3xl md:mx-2 mx-6"
    />
  );
};

export default Map;

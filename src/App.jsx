import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GeoCard from "./components/GeoCard";
import Header from "./components/Header";

const App = () => {
  // const [ipAddress, setIpAddress] = useState(null);
  const [geolocationData, setGeolocationData] = useState(null);
  const [searchIP, setSearchIP] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [tooltipText, setTooltipText] = useState("Copy");

  useEffect(() => {
    fetchGeolocation();
  }, []);

  const fetchGeolocation = async (ipAddress = "") => {
    try {
      const response = await axios.get(
        `https://ipinfo.io/${ipAddress}/json?token=808b61f008ec28`
      );
      const data = response.data;
      console.log(data);
      setGeolocationData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
      setError("Error fetching geolocation data");
      setTimeout(() => setError(null), 1000);
    }
  };

  const handleSearch = () => {
    fetchGeolocation(searchIP);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(geolocationData.ip)
      .then(() => {
        setCopied(true);
        setTooltipText("Copied");
        setTimeout(() => setTooltipText("Copy"), 1000);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        setSearchIP={setSearchIP}
        searchIP={searchIP}
      />
      <div className="card">
        {error && <p className="error error-red">{error}</p>}
        {geolocationData ? (
          <GeoCard
            geolocationData={geolocationData}
            copyToClipboard={copyToClipboard}
            tooltipText={tooltipText}
          />
        ) : (
          <p className="error">No geolocation data available</p>
        )}
      </div>
    </>
  );
};

export default App;

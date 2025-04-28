import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh"
};

const center = {
  lat: 32.7767,  // Example: Dallas, TX (change later if you want)
  lng: -96.7970
};

function App() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* You can add Markers here later */}
      </GoogleMap>
    </LoadScript>
  );
}

export default App;

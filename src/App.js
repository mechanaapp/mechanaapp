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
    <LoadScript
      googleMapsApiKey="AIzaSyDBLYngLYZ5BbUpIuUD-2HoYp792kjPzn4" // 👈 Replace this with your real key
    >
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

import './App.css';
import ReactMapGL from "react-map-gl";
import React, { useState } from 'react';


function App() {
  const [viewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })


  return <div>
    <ReactMapGL 
      {...viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        
        markers here
    </ReactMapGL>;
  </div>
}

export default App;

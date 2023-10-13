import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = () => {
  const Mapbox = ReactMapboxGl({
    accessToken: 'sk.eyJ1IjoicmF2aXN1bWl0IiwiYSI6ImNsbm14Ymk0eTAwZnMyaXAxNmNoZGZocGUifQ.fZcPqWqoZXQhYQ-WmvdU5Q',
  });

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Mapbox
        style="mapbox://styles/mapbox/streets-v11" // Map style
        center={[-74.006, 40.7128]} // Centered on New York City
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Map;

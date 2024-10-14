import React, { useEffect, useState } from 'react';

function Map() {
  const [map, setMap] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Load the map once the component mounts
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 17.3850, lng: 78.4867 }, // Hyderabad coordinates
        zoom: 12,
      });
      setMap(map);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  useEffect(() => {
    // Add markers for hotels
    if (map) {
      hotels.forEach((hotel) => {
        new window.google.maps.Marker({
          position: { lat: hotel.lat, lng: hotel.lng },
          map,
          title: hotel.name,
        });
      });
    }
  }, [map, hotels]);

  useEffect(() => {
    // Fetch hotels data from API
    const fetchData = async () => {
      try {
        // Replace 'API_ENDPOINT' with your actual API endpoint
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        setHotels(data.hotels); // Assuming the API returns an array of hotels with lat, lng, and name
      } catch (error) {
        console.error('Error fetching hotels data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "500px" }}></div>
  );
}

export default Map;

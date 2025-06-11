import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// IMPORTANT: You need to replace this with your own Mapbox access token.
const MAPBOX_TOKEN = 'pk.eyJ1IjoidXphaXJrYXNoaWYyNyIsImEiOiJjbWJyZG96bHowODZpMnFxdHRhNWo0Mmt2In0.celmSMfpC3VqWJWRSHFnoA'; 

/**
 * A component that displays a Mapbox map for the authentication pages.
 * It provides an interactive map view centered on a specific location.
 */
export const AuthMap = () => {
  // Coordinates for Sheikhupura, Punjab, Pakistan
  const initialViewState = {
    longitude: 73.9785,
    latitude: 31.7135,
    zoom: 12
  };

  const [popupInfo, setPopupInfo] = useState<{longitude: number, latitude: number, text: string} | null>({
      longitude: 73.9785,
      latitude: 31.7135,
      text: 'Texas Parcels - Great deals on land right here.'
  });

  return (
    <section className="hidden lg:block flex-1 relative">
        <div className="animate-slide-right animate-delay-300 absolute inset-0 rounded-3xl m-4 overflow-hidden">
            <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={initialViewState}
                style={{width: '100%', height: '100%'}}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                
            </Map>
            
        </div>
    </section>
  );
};
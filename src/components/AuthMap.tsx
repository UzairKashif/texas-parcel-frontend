import React, { useRef } from 'react';
import Map, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// IMPORTANT: You need to replace this with your own Mapbox access token.
const MAPBOX_TOKEN = 'pk.eyJ1IjoidXphaXJrYXNoaWYyNyIsImEiOiJjbWJyZG96bHowODZpMnFxdHRhNWo0Mmt2In0.celmSMfpC3VqWJWRSHFnoA'; 

/**
 * A component that displays a Mapbox map for the authentication pages.
 * It provides an interactive map view centered on a specific location
 * with a "fly to" animation on load, followed by a pitch animation for a 3D effect.
 */
export const AuthMap = () => {
  const mapRef = useRef<MapRef>(null);

  // Initial view state (globe view)
  const initialViewState = {
    longitude: -40,
    latitude: 30,
    zoom: 0.5
  };
  
  // Target location (Austin, TX)
  const targetLocation = {
    longitude: -97.7431,
    latitude: 30.2672
  };

  // This function will be called once the map has loaded.
  const onMapLoad = () => {
    const map = mapRef.current;
    if (!map) return;

    // A brief delay for a smoother intro effect
    setTimeout(() => {
        map.flyTo({
            center: [targetLocation.longitude, targetLocation.latitude],
            zoom: 10,
            essential: true, 
            duration: 5000 
        });

        // Use the 'moveend' event to chain the next animation.
        // This ensures the pitch animation starts only after the 'flyTo' is complete.
        map.once('moveend', () => {
            // A small delay before starting the pitch for a smoother transition
            setTimeout(() => {
                 map.easeTo({
                    pitch: 60,
                    duration: 5000
                });
            }, 500);
        });
    }, 1000); // 1-second delay before starting the entire animation sequence
  };

  return (
    <section className="hidden lg:block flex-1 relative">
        <div className="animate-slide-right animate-delay-300 absolute inset-0 rounded-3xl m-4 overflow-hidden">
            <Map
                ref={mapRef}
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={initialViewState}
                style={{width: '100%', height: '100%'}}
                mapStyle="mapbox://styles/mapbox/dark-v11" // Dark basemap
                projection={{name: 'globe'}} // Initial globe projection
                onLoad={onMapLoad} // Trigger animations once the map is fully loaded
            >
            </Map>
        </div>
    </section>
  );
};
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from './components/Globe';
import InfoPopup from './components/InfoPopup';
import { latLontoVector3 } from './utils/latLontoVector3';

function App() {
  
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [userMarkers, setUserMarkers] = useState([]);


  const canvasContainerRef = useRef();
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        const data = await response.json();
        const formattedData = data.features.map(feature => ({
          id: feature.id,
          title: feature.properties.title,
          magnitude: feature.properties.mag,
          lat: feature.geometry.coordinates[1],
          lon: feature.geometry.coordinates[0],
        }));
        setEarthquakeData(formattedData);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    };

    fetchData();
  }, []); 
  const handleGlobeClick = (event) => {
    const newMarker = {
      id: `user_${Date.now()}`,
      position: event.point,
      title: 'Custom Marker'
    };
    setUserMarkers(currentMarkers => [...currentMarkers, newMarker]);
  };

 
  const allMarkers = useMemo(() => {
    const globeRadius = 1.5;
    const apiMarkers = earthquakeData.map(event => ({
      ...event,
      position: latLontoVector3(event.lat, event.lon, globeRadius)
    }));
    return [...apiMarkers, ...userMarkers];
  }, [earthquakeData, userMarkers]);

  return (
    <div className="w-screen h-screen relative bg-gray-900 flex items-center justify-center">
      <h1 className='absolute top-4 text-white text-4xl font-bold z-10'>
       Recent Quakes
      </h1>

      <div ref={canvasContainerRef} className="w-[600px] h-[600px]">
        <Canvas
          eventSource={canvasContainerRef}
          camera={{ position: [0, 0, 4] }}
        >
          <Stars radius={300} depth={50} count={10000} factor={7} saturation={0} fade speed={1} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.3} 
            enableZoom={false}
            enablePan={false}
          />
          <Globe
            data={allMarkers}
            onGlobeClick={handleGlobeClick}
            onMarkerClick={setSelectedMarker}
          />
        </Canvas>
      </div>

      {selectedMarker && <InfoPopup data={selectedMarker} onClose={() => setSelectedMarker(null)} />}
    </div>
  );
}

export default App;
import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from './components/Globe';
import InfoPopup from './components/InfoPopup';
import NewsCard from './components/NewsCard';
import { latLontoVector3 } from './utils/latLontoVector3';
import { vector3ToLatLon } from './utils/vector3ToLatLon';
import Header from './components/Header'

function App() {

  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [userMarkers, setUserMarkers] = useState([]);


  const canvasContainerRef = useRef();
  
  const fetchNewsForCountry = async (country) => {
    setIsLoadingNews(true);
    setNewsArticles([]);

    try {
      const gnewsApiKey = import.meta.env.VITE_GNEWS_API_KEY;
      const newsUrl = `https://gnews.io/api/v4/search?q=${country}&lang=en&max=10&apikey=${gnewsApiKey}`;
      const newsResponse = await fetch(newsUrl);
      const newsData = await newsResponse.json();

      if (newsData.articles && newsData.articles.length > 0) {
        setNewsArticles(newsData.articles);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setIsLoadingNews(false);
    }
  };


  useEffect(() => {
    fetchNewsForCountry('India');
  }, []);

  const handleGlobeClick = async (event) => {
    try {
      const globeRadius = 1.5;
      const { lat, lon } = vector3ToLatLon(event.point, globeRadius);
      const openCageApiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
      const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${openCageApiKey}`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();
      const country = geoData.results[0]?.components.country;

      if (country) {
        fetchNewsForCountry(country);
      } else {
        console.log("Could not determine country from click.");
      }
    } catch (error) {
      console.error("Error in fetching location:", error);
    }
  };


  return (
    <div className="w-screen h-screen relative bg-gray-900 flex items-center justify-center overflow-hidden">
      <Header/>
      
      

      <div ref={canvasContainerRef} className="w-[600px] h-[600px]">
        <Canvas
          // eventSource={canvasContainerRef}
          // camera={{ position: [0, 0, 4] }}
        >
          <Stars radius={300} depth={50} count={10000} factor={8} saturation={0} fade speed={1} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.3} 
            enableZoom={false}
            enablePan={false}
          />
          <Globe
            data={userMarkers}
            onGlobeClick={handleGlobeClick}
            onMarkerClick={setSelectedMarker}
          />
        </Canvas>
      </div>

      {selectedMarker && <InfoPopup data={selectedMarker} onClose={() => setSelectedMarker(null)} />}

      {isLoadingNews && (
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl animate-pulse">
          Fetching News...
        </p>
      )}

      <div className="absolute top-24 left-10 h-[calc(100%-7rem)] w-80 flex flex-col overflow-y-auto p-2 no-scrollbar">
        {newsArticles.slice(0, 5).map(article => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>

      <div className="absolute top-24 right-10 h-[calc(100%-7rem)] w-80 flex flex-col overflow-y-auto p-2 no-scrollbar">
        {newsArticles.slice(5, 10).map(article => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import Marker from './Marker';


const Globe = ({ data, onGlobeClick, onMarkerClick }) => {
  const texture = useLoader(TextureLoader, '/earth.jpg');
  const globeRadius = 1.5;

  return (
    <>
      
      <Sphere args={[globeRadius + 0.05, 50, 50]}>
        <meshBasicMaterial 
          color="#0077ff" 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending} 
          side={THREE.BackSide} 
        />
      </Sphere>

      {/* Main Globe Sphere */}
      <Sphere args={[globeRadius, 50, 50]} onClick={onGlobeClick}>
        <meshStandardMaterial map={texture} />
      </Sphere>
      
      
      {data.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={(event) => {
           
            event.stopPropagation(); 
            onMarkerClick(marker);
          }}
        />
      ))}
    </>
  );
};

export default Globe;
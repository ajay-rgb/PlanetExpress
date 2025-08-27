import { Sphere } from '@react-three/drei';

const Marker = ({ position, onClick }) => {
  return (
    <Sphere args={[0.01, 16, 16]} position={position} onClick={onClick}>
      <meshBasicMaterial color="red" />
    </Sphere>
  );
};

export default Marker;


export const vector3ToLatLon = (vector, radius) => {
  const { x, y, z } = vector;

  const lat = 90 - (Math.acos(y / radius)) * (180 / Math.PI);
  const lon = ((180 + (Math.atan2(z, x)) * (180 / Math.PI))) % 360 - 180;
  
  return { lat, lon };
};
const InfoPopup = ({ data, onClose }) => {
  return (
    <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-lg w-64 text-black">
      <h2 className="text-xl font-bold mb-2">{data.city || data.title}</h2>
      {/* Add more details as you like */}
      {data.magnitude && <p>Magnitude: {data.magnitude}</p>}
      <p>Latitude: {data.lat.toFixed(2)}</p>
      <p>Longitude: {data.lon.toFixed(2)}</p>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    </div>
  );
};

export default InfoPopup;
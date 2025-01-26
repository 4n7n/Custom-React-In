import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Loader2 } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

// Map configuration
const MAP_CONFIG = {
  defaultCenter: [40.4168, -3.7038], // Coordenadas de Madrid (puedes cambiarlo)
  defaultZoom: 13,
  tileLayer: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
};

// Custom icon configuration
const icon = new L.Icon({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://nominatim.openstreetmap.org/search?q=Madrid&format=json&addressdetails=1&limit=5"
        );

        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        const data = await response.json();
        const mappedLocations = data.map((location) => ({
          id: location.place_id,
          name: location.display_name,
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
          description: `Ubicación encontrada cerca de ${location.display_name}`,
        }));

        setLocations(mappedLocations);
      } catch (err) {
        console.error("Error fetching locations:", err);
        setError("Error al cargar las ubicaciones. Por favor, inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="map-loading">
        <Loader2 className="map-loader" />
      </div>
    );
  }

  if (error) {
    return <div className="map-error">{error}</div>;
  }

  return (
    <div className="map-container">
      <MapContainer center={MAP_CONFIG.defaultCenter} zoom={MAP_CONFIG.defaultZoom} className="map">
        <TileLayer url={MAP_CONFIG.tileLayer.url} attribution={MAP_CONFIG.tileLayer.attribution} />

        {locations.map((location) => (
          <Marker key={location.id} position={[location.latitude, location.longitude]} icon={icon}>
            <Popup>
              <div className="map-popup">
                <h3 className="map-popup-title">{location.name}</h3>
                {location.description && <p className="map-popup-description">{location.description}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
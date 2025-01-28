import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { 
  Loader2, 
  MapPin, 
  Search, 
  Layers, 
  Info 
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

const MAP_CONFIG = {
  defaultCenter: [40.4168, -3.7038],
  defaultZoom: 13,
  tileLayer: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
};

const CustomMarker = ({ position, name, description }) => {
  const icon = new L.Icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [35, 55],
    iconAnchor: [17, 55],
    popupAnchor: [0, -55],
    shadowSize: [55, 55],
  });

  return (
    <Marker position={position} icon={icon}>
      <Popup className="custom-popup">
        <div className="popup-content">
          <h3 className="popup-title">{name}</h3>
          <p className="popup-description">{description}</p>
        </div>
      </Popup>
    </Marker>
  );
};
CustomMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const MapControls = () => {
  const map = useMap();
  
  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  return (
    <div className="map-controls">
      <button onClick={handleZoomIn} className="zoom-btn zoom-in">
        <MapPin className="btn-icon" />
      </button>
      <button onClick={handleZoomOut} className="zoom-btn zoom-out">
        <Layers className="btn-icon" />
      </button>
    </div>
  );
};

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLocations = useCallback(async (query = "Madrid") => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`
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
  }, []);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchLocations(searchTerm);
    }
  };

  if (loading) {
    return (
      <div className="map-loading">
        <Loader2 className="map-loader animate-spin" />
        <p>Cargando ubicaciones...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="map-error">
        <Info className="error-icon" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="map-component">
      <div className="map-search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar ubicación..."
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search className="search-icon" />
          </button>
        </form>
      </div>

      <div className="map-container">
        <MapContainer 
          center={MAP_CONFIG.defaultCenter} 
          zoom={MAP_CONFIG.defaultZoom} 
          className="map"
        >
          <MapControls />
          <TileLayer 
            url={MAP_CONFIG.tileLayer.url} 
            attribution={MAP_CONFIG.tileLayer.attribution} 
          />
          {locations.map((location) => (
            <CustomMarker
              key={location.id}
              position={[location.latitude, location.longitude]}
              name={location.name}
              description={location.description}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
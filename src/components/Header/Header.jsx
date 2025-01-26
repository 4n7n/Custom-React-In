import { MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <MapPin className="header-icon" />
          Mapa Interactivo
        </h1>
        <p className="header-description">
          Visualiza ubicaciones dinámicamente usando React y Leaflet
        </p>
      </div>
    </header>
  );
};

export default Header;
import { MapPin, Share2, CloudCog, Navigation, Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="task-map-header">
      <div className="header-background"></div>
      <div className="header-content">
        <div className="header-icons">
          <MapPin className="icon map-icon" />
          <CloudCog className="icon cloud-icon" />
          <Share2 className="icon share-icon" />
          <Navigation className="icon nav-icon" />
          <Globe className="icon globe-icon" />
        </div>
        
        <div className="header-text">
          <h1 className="header-title">
            TaskMap: Gestión Geográfica Inteligente
          </h1>
          <p className="header-description">
            Transforma la organización de tareas con visualización geoespacial en tiempo real. 
            Simplifica la planificación y seguimiento con tecnología de punta.
          </p>
          </div>
      </div>
    </header>
  );
};

export default Header;
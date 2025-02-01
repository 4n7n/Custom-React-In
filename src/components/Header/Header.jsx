import { Map, CheckCircle, Calendar } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Header content grid */}
        <div className="header-grid">
          {/* Left column - Text content */}
          <div className="content-left">
            <div className="feature-badge">
              <span>Nuevo: Integración con mapas</span>
            </div>
            
            <h1 className="main-title">
              Organiza tus tareas con{' '}
              <span className="highlight">inteligencia geoespacial</span>
            </h1>
            
            <p className="main-description">
              Maximiza tu productividad combinando la gestión de tareas con 
              ubicaciones estratégicas. Planifica mejor, ejecuta más rápido.
            </p>

            {/* Feature highlights */}
            <div className="features-grid">
              <div className="feature-item">
                <CheckCircle className="icon green" />
                <span>Organización inteligente</span>
              </div>
              <div className="feature-item">
                <Map className="icon blue" />
                <span>Visualización en mapas</span>
              </div>
              <div className="feature-item">
                <Calendar className="icon green" />
                <span>Planificación eficiente</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="icon blue" />
                <span>Seguimiento en tiempo real</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="visual-container">
            <div className="visual-element">
              {/* Decorative elements */}
              <div className="decoration green"></div>
              <div className="decoration blue"></div>
              
              {/* Mock interface */}
              <div className="mock-interface">
                <div className="mock-header">
                  <Map className="mock-icon" />
                  <div className="mock-text">
                    <div className="mock-line long"></div>
                    <div className="mock-line short"></div>
                  </div>
                </div>
                
                <div className="mock-content">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="mock-item">
                      <div className="mock-bullet"></div>
                      <div className="mock-line full"></div>
                    </div>
                  ))}
                </div>

                <div className="mock-grid">
                  <div className="mock-box"></div>
                  <div className="mock-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
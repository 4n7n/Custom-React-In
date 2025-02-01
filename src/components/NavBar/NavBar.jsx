import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, CheckSquare, Database, Map, Home } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', icon: <Home className="menu-icon" />, path: '/home' },
    { name: 'Crear Tarea', icon: <CheckSquare className="menu-icon" />, path: '/crear-tarea' },
    { name: 'Base de Datos', icon: <Database className="menu-icon" />, path: '/base' }, // Actualizado a /base para coincidir con la ruta en App.jsx
    { name: 'Mapa', icon: <Map className="menu-icon" />, path: '/mapa' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Determina si un item está activo basado en la ruta actual
  const isItemActive = (path) => location.pathname === path;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-main">
            {/* Logo */}
            <div className="logo-container">
              <div
                className="logo-wrapper"
                onClick={() => handleNavigation('/home')}
                style={{ cursor: 'pointer' }}
              >
                <span className="logo-text">TaskMaster</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-menu">
              <div className="menu-items">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`menu-item ${isItemActive(item.path) ? 'active' : ''}`}
                  >
                    <div className="menu-item-content">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <div className="menu-item-background"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
              <button
                onClick={toggleMenu}
                className="toggle-button"
              >
                {isOpen ? (
                  <X className="menu-icon" />
                ) : (
                  <Menu className="menu-icon" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-items">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`mobile-menu-item ${isItemActive(item.path) ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </div>
  );
};

export default NavBar;
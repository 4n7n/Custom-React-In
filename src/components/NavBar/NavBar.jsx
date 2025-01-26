import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Map,
  List,
  PlusCircle,
  Home,
  Menu
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      icon: <Home className="nav-icon" />,
      label: 'Inicio',
      path: '/',
      active: location.pathname === '/'
    },
    {
      icon: <PlusCircle className="nav-icon" />,
      label: 'Crear Tarea',
      path: '/crear-tarea',
      active: location.pathname === '/crear-tarea'
    },
    {
      icon: <List className="nav-icon" />,
      label: 'Lista Tareas',
      path: '/lista-tareas',
      active: location.pathname === '/lista-tareas'
    },
    {
      icon: <Map className="nav-icon" />,
      label: 'Mapa',
      path: '/mapa',
      active: location.pathname === '/mapa'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <Menu />
      </button>
      
      <div className="navbar-container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navbar-item ${item.active ? 'active' : ''}`}
          >
            {item.icon}
            <span className="navbar-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            Your Logo
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-items">
            <Link to="/" className="navbar-menu-item">
              Home
            </Link>
            <Link to="/about" className="navbar-menu-item">
              About
            </Link>
            <Link to="/contact" className="navbar-menu-item">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-toggle">
          <button
            onClick={toggleMenu}
            type="button"
            className="navbar-toggle-button"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="navbar-toggle-icon" aria-hidden="true" />
            ) : (
              <Menu className="navbar-toggle-icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-menu-items">
            <Link to="/" className="navbar-mobile-menu-item">
              Home
            </Link>
            <Link to="/about" className="navbar-mobile-menu-item">
              About
            </Link>
            <Link to="/contact" className="navbar-mobile-menu-item">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
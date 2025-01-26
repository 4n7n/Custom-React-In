import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MapComponent from './components/MapComponent/MapComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <header className="app-header">
          <div className="app-header-content">
            <h1 className="app-title">
              <MapPin className="app-title-icon" />
              Mapa Interactivo
            </h1>
            <p className="app-description">
              Visualiza ubicaciones dinámicamente usando React y Leaflet
            </p>
          </div>
        </header>
        <main className="app-main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </main>
        <footer className="app-footer">
          {/* Add your footer content */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
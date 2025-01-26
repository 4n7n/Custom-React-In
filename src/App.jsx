import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MapComponent from './components/MapComponent/MapComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <main className="app-main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
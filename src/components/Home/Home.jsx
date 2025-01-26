import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Welcome to My Interactive Map</h2>
      <p className="home-description">
        Explore locations dynamically using React and Leaflet.
      </p>
      <Link to="/map" className="home-button">
        View Map
      </Link>
    </div>
  );
};

export default Home;
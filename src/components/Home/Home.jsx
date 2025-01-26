import { MapPin, PlusCircle, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <MapPin className="feature-icon" />,
      title: 'Mapeo Interactivo',
      description: 'Visualiza tus tareas en un mapa detallado e interactivo.',
      link: '/mapa'
    },
    {
      icon: <PlusCircle className="feature-icon" />,
      title: 'Crear Tareas',
      description: 'Añade nuevas tareas de forma rápida y sencilla.',
      link: '/crear-tarea'
    },
    {
      icon: <List className="feature-icon" />,
      title: 'Lista de Tareas',
      description: 'Organiza y gestiona todas tus tareas en un solo lugar.',
      link: '/lista-tareas'
    }
  ];

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Bienvenido a TaskMap</h1>
        <p className="home-subtitle">
          Tu gestor de tareas geolocalizado para una organización más inteligente
        </p>
      </div>

      <div className="home-features">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            to={feature.link} 
            className="feature-card"
          >
            {feature.icon}
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
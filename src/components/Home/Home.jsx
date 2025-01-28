import { 
  MapPin, 
  PlusCircle, 
  List, 
  Target, 
  Clock, 
  Share2, 
  Navigation, 
  ChartPie 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <MapPin className="feature-icon" />,
      title: 'Mapeo Interactivo',
      description: 'Visualiza tus tareas geográficamente con un mapa detallado. Cada tarea se ubica con precisión, permitiéndote entender su contexto espacial y optimizar tu gestión.',
      link: '/mapa'
    },
    {
      icon: <PlusCircle className="feature-icon" />,
      title: 'Creación Inteligente de Tareas',
      description: 'Crea tareas rápidamente con información geolocalizada. Añade detalles como ubicación, prioridad y tiempo estimado en un solo paso intuitivo.',
      link: '/crear-tarea'
    },
    {
      icon: <List className="feature-icon" />,
      title: 'Gestión Centralizada',
      description: 'Administra todas tus tareas desde un panel unificado. Filtra, ordena y visualiza tus actividades con herramientas de gestión avanzadas.',
      link: '/lista-tareas'
    },
    {
      icon: <Target className="feature-icon" />,
      title: 'Precisión Geográfica',
      description: 'Localiza tareas con exactitud milimétrica. Utiliza coordenadas GPS y herramientas de mapeo para una gestión espacial perfecta.',
      link: '/mapa'
    },
    {
      icon: <Clock className="feature-icon" />,
      title: 'Gestión de Tiempo',
      description: 'Optimiza tu productividad con seguimiento de tiempo en tiempo real. Analiza la duración y eficiencia de cada tarea.',
      link: '/lista-tareas'
    },
    {
      icon: <Share2 className="feature-icon" />,
      title: 'Colaboración Geolocalizada',
      description: 'Comparte y sincroniza tareas instantáneamente. Permite a tu equipo ver y gestionar ubicaciones de tareas en tiempo real.',
      link: '/crear-tarea'
    },
    {
      icon: <Navigation className="feature-icon" />,
      title: 'Rutas y Planificación',
      description: 'Planifica rutas óptimas entre tareas. Minimiza tiempos de desplazamiento y maximiza la eficiencia de tu día.',
      link: '/mapa'
    },
    {
      icon: <ChartPie className="feature-icon" />,
      title: 'Análisis de Productividad',
      description: 'Genera informes detallados sobre tu rendimiento. Visualiza estadísticas de tareas, tiempo y ubicaciones para una mejora continua.',
      link: '/lista-tareas'
    }
  ];

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">TaskMap: Gestión Geoespacial</h1>
        <p className="home-subtitle">
          Revoluciona tu productividad con gestión de tareas geolocalizada. Transforma la manera de organizar, visualizar y ejecutar tus actividades.
        </p>
        <div className="home-cta">
          <Link to="/crear-tarea" className="primary-btn">
            Comenzar Ahora
          </Link>
          <Link to="/mapa" className="secondary-btn">
            Explorar Mapa
          </Link>
        </div>
      </div>
      
      <section className="home-features">
        <h2 className="section-title">Características Principales</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="feature-card"
            >
              {feature.icon}
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
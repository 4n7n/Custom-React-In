import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <div className="home__wrapper">
        {/* Background gradients */}
        <div className="home__gradient home__gradient--1" />
        <div className="home__gradient home__gradient--2" />
        
        <div className="home__content">
          {/* Hero Section */}
          <section className="hero">
            <span className="hero__badge">
              ✨ Bienvenido a TaskMaster
            </span>
            
            <h1 className="hero__title">
              Organiza tus tareas con{' '}
              <span className="hero__title-gradient">inteligencia</span>
            </h1>
            
            <p className="hero__description">
              Revoluciona tu productividad con IA avanzada. Organiza, prioriza y completa 
              tus tareas de manera más inteligente que nunca.
            </p>
          </section>

          {/* Features Section */}
          <section className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className={`feature-card__title ${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="feature-card__description">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          {/* Preview Section */}
          <section className="preview">
            <div className="preview__container">
              {/* Dashboard Preview */}
              <div className="preview-card">
                <div className="preview-card__overlay" />
                <div className="preview-card__content">
                  <h3 className="preview-card__title">Dashboard</h3>
                  
                  <div className="dashboard-stats">
                    <div className="stat-box">
                      <div className="stat-bar stat-bar--green" />
                      <div className="stat-bar stat-bar--green-light" />
                    </div>
                    <div className="stat-box">
                      <div className="stat-bar stat-bar--blue" />
                      <div className="stat-bar stat-bar--blue-light" />
                    </div>
                  </div>
                  
                  <div className="task-list">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="task-item">
                        <span className={`task-status task-status--${i === 0 ? 'green' : i === 1 ? 'blue' : 'gray'}`} />
                        <div className="task-line" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Analytics Preview */}
              <div className="preview-card">
                <div className="preview-card__overlay" />
                <div className="preview-card__content">
                  <h3 className="preview-card__title">Análisis</h3>
                  <div className="chart">
                    {[48, 35, 62, 45, 55, 40].map((height, i) => (
                      <div 
                        key={i}
                        className={`chart__bar ${i < 3 ? 'chart__bar--green' : 'chart__bar--blue'}`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="preview-card">
                <div className="preview-card__overlay" />
                <div className="preview-card__content">
                  <h3 className="preview-card__title">Ubicaciones</h3>
                  <div className="map">
                    <div className="map__pin map__pin--1" />
                    <div className="map__pin map__pin--2" />
                    <div className="map__pin map__pin--3" />
                    <div className="map__grid">
                      {Array(16).fill(null).map((_, i) => (
                        <div key={i} className="map__grid-cell" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const features = [
  {
    title: 'Eficiencia',
    description: 'Optimiza tu tiempo con gestión inteligente',
    color: 'text-green'
  },
  {
    title: 'Organización',
    description: 'Todo en un solo lugar, siempre accesible',
    color: 'text-blue'
  },
  {
    title: 'Colaboración',
    description: 'Trabaja en equipo sin complicaciones',
    color: 'text-green'
  },
  {
    title: 'Simplicidad',
    description: 'Interfaz intuitiva y fácil de usar',
    color: 'text-blue'
  }
];

export default Home;
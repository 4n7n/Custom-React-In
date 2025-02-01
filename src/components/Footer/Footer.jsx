import { 
  Brain,
  CheckSquare,
  Users,
  Github,
  Mail,
  Book,
  HelpCircle,
  MessageCircle,
  Youtube
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Sección Principal */}
          <div className="footer-section">
            <h3 className="company-title">TaskMaster AI</h3>
            <p className="company-description">
              Optimizando tu productividad con inteligencia artificial y gestión inteligente de tareas.
            </p>
            <div className="social-icons">
              <Github className="social-icon" />
              <Mail className="social-icon" />
              <Youtube className="social-icon" />
            </div>
          </div>

          {/* Características */}
          <div className="footer-section">
            <h4 className="section-title">Características</h4>
            <ul className="features-list">
              <li className="feature-item">
                <Brain className="feature-icon" />
                <span>Organización Inteligente</span>
              </li>
              <li className="feature-item">
                <CheckSquare className="feature-icon" />
                <span>Priorización Automática</span>
              </li>
              <li className="feature-item">
                <Users className="feature-icon" />
                <span>Colaboración en Equipo</span>
              </li>
            </ul>
          </div>

          {/* Recursos y Ayuda */}
          <div className="footer-section">
            <h4 className="section-title">Recursos</h4>
            <ul className="resources-list">
              <li className="resource-item">
                <Book className="resource-icon" />
                <a href="#" className="resource-link">Guía de Inicio</a>
              </li>
              <li className="resource-item">
                <HelpCircle className="resource-icon" />
                <a href="#" className="resource-link">Centro de Ayuda</a>
              </li>
              <li className="resource-item">
                <MessageCircle className="resource-icon" />
                <a href="#" className="resource-link">Blog y Tips</a>
              </li>
            </ul>
          </div>

          {/* Contacto y Legal */}
          <div className="footer-section">
            <h4 className="section-title">Contacto y Legal</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <a href="mailto:soporte@taskmaster.ai" className="contact-link">Soporte</a>
              </li>
              <li className="contact-item">
                <a href="#" className="contact-link">Política de Privacidad</a>
              </li>
              <li className="contact-item">
                <a href="#" className="contact-link">Términos de Uso</a>
              </li>
              <li className="contact-item">
                <a href="#" className="contact-link">Estado del Servicio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} TaskMaster AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Github, Linkedin, Twitter, Globe, Code, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      Icon: Github,
      href: 'https://github.com/your-profile',
      title: 'GitHub'
    },
    {
      Icon: Linkedin,
      href: 'https://linkedin.com/in/your-profile',
      title: 'LinkedIn'
    },
    {
      Icon: Twitter,
      href: 'https://twitter.com/your-profile',
      title: 'Twitter'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <Globe className="footer-icon" />
          <span className="footer-copyright">
            © {new Date().getFullYear()} TaskMap
          </span>
        </div>
       
        <div className="footer-social">
          <div className="social-links">
            {socialLinks.map(({ Icon, href, title }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={title}
              >
                <Icon className="social-icon" />
              </a>
            ))}
          </div>
          
          <div className="developer-info">
            <a 
              href="#" 
              className="developer-link"
              title="About the Developer"
            >
              <Code className="developer-icon" />
              <span>Desarrollado</span>
            </a>
            <span className="love-indicator">
              <Heart className="heart-icon" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
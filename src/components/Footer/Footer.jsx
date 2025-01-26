import { Github, Linkedin, Twitter, Globe, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { 
      Icon: Github, 
      href: '#', 
      color: 'github-link' 
    },
    { 
      Icon: Linkedin, 
      href: '#', 
      color: 'linkedin-link' 
    },
    { 
      Icon: Twitter, 
      href: '#', 
      color: 'twitter-link' 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <Globe className="footer-icon" />
          <span className="footer-copyright">© 2024 TaskMap</span>
        </div>
       
        <div className="footer-social">
          {socialLinks.map(({ Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className={`social-link ${color}`}
            >
              <Icon className="social-icon" />
            </a>
          ))}
          <a href="#" className="developer-link">
            <Code className="developer-icon" />
            <span>Desarrollado con ♥</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
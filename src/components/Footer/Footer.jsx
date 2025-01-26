import { Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: '#', color: 'text-gray-400 hover:text-white' },
    { Icon: Linkedin, href: '#', color: 'text-gray-400 hover:text-blue-500' },
    { Icon: Twitter, href: '#', color: 'text-gray-400 hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="w-5 h-5 text-green-500 mr-2" />
          <span className="text-sm">© 2024 TaskMap</span>
        </div>
        
        <div className="flex space-x-4">
          {socialLinks.map(({ Icon, href, color }, index) => (
            <a 
              key={index} 
              href={href} 
              className={`${color} transition-colors duration-300 hover:scale-110`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

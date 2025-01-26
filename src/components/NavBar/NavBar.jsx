import { Link, useLocation } from 'react-router-dom';
import { 
  Map, 
  List, 
  PlusCircle, 
  Home 
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: 'Inicio', 
      path: '/',
      active: location.pathname === '/'
    },
    { 
      icon: <PlusCircle className="w-5 h-5" />, 
      label: 'Crear Tarea', 
      path: '/crear-tarea',
      active: location.pathname === '/crear-tarea'
    },
    { 
      icon: <List className="w-5 h-5" />, 
      label: 'Lista Tareas', 
      path: '/lista-tareas',
      active: location.pathname === '/lista-tareas'
    },
    { 
      icon: <Map className="w-5 h-5" />, 
      label: 'Mapa', 
      path: '/mapa',
      active: location.pathname === '/mapa'
    }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 w-20 md:w-64 border-r dark:border-gray-700 transition-all duration-300">
      <div className="flex flex-col h-full py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center justify-center md:justify-start 
              px-4 py-3 
              transition-colors duration-300
              ${item.active 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
          >
            {item.icon}
            <span className="hidden md:inline ml-3">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
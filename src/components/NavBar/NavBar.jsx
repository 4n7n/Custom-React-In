import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-64 p-4">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? 'bg-green-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mapa"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? 'bg-green-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            Mapa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tareas"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? 'bg-green-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            Gestor de Tareas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
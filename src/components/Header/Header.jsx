import { MapPin, Share2, CloudCog } from 'lucide-react';
import './Header.css';

const Header = () => {
 return (
   <header className="header dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
     <div className="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="header-wrapper text-center py-12">
         <div className="flex justify-center items-center gap-4 mb-4">
           <MapPin className="header-icon text-blue-600 dark:text-blue-400 w-10 h-10 animate-pulse" />
           <CloudCog className="header-icon text-green-600 dark:text-green-400 w-8 h-8" />
           <Share2 className="header-icon text-purple-600 dark:text-purple-400 w-8 h-8" />
         </div>
         <h1 className="header-title text-3xl sm:text-4xl lg:text-5xl font-extrabold
           text-gray-900 dark:text-white flex items-center justify-center gap-3 mb-4">
           TaskMap: Mapa Interactivo
         </h1>
         <p className="header-description text-lg sm:text-xl text-gray-600 dark:text-gray-300
           max-w-2xl mx-auto tracking-wide leading-relaxed">
           Visualiza y gestiona ubicaciones dinámicamente usando React y Leaflet. 
           Organiza tus tareas con precisión geográfica.
         </p>
       </div>
     </div>
   </header>
 );
};

export default Header;
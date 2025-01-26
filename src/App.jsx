import { MapPin } from "lucide-react";
import MapComponent from "./components/MapComponent/MapComponent";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MapPin className="h-8 w-8" />
            Mapa Interactivo
          </h1>
          <p className="mt-2 text-slate-300">
            Visualiza ubicaciones dinámicamente usando React y Leaflet
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapComponent />
        </div>
      </main>

      <footer className="bg-slate-50 py-6 px-4 border-t border-slate-200">
      </footer>
    </div>
  );
};

export default App;
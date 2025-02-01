import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import TaskForm from './components/TaskForm/TaskForm.jsx';
import MapComponent from './components/MapComponent/MapComponent.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavBar />
        
        <main className="flex-grow">
          <Routes>
            {/* Ruta por defecto - redirige a home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Rutas principales */}
            <Route path="/home" element={<Home />} />
            <Route path="/crear-tarea" element={<TaskForm />} />
            <Route path="/mapa" element={<MapComponent />} />
            
            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold">404 - Página no encontrada</h2>
                <p>La página que buscas no existe.</p>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
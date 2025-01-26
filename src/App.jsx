import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import MapComponent from './components/MapComponent/MapComponent';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Navbar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mapa" element={<MapComponent />} />
              <Route path="/crear-tarea" element={<TaskForm />} />
              <Route path="/lista-tareas" element={<TaskList />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
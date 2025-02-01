import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './MapComponent.css';  // Asegúrate de importar el archivo de estilo

const API_URL = "https://api.example.com/locations"; // Reemplaza con una API real

function MapComponent() {
  const [locations, setLocations] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [taskText, setTaskText] = useState("");
  const [taskType, setTaskType] = useState("normal"); // Nuevo estado para tipo de tarea
  const [selectedTask, setSelectedTask] = useState(null); // Para redirigir el mapa a una tarea específica

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  function MapClickHandler() {
    useMapEvents({
      click(e) {
        setSelectedLocation(e.latlng);
      },
    });
    return null;
  }

  const addTask = () => {
    if (selectedLocation && taskText) {
      setTasks([...tasks, { text: taskText, location: selectedLocation, type: taskType }]);
      setTaskText("");
      setTaskType("normal"); // Reset the task type
    }
  };

  const editTask = (index, newText, newType) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, type: newType } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  // Redirigir el mapa cuando se selecciona una tarea
  useEffect(() => {
    if (selectedTask) {
      const map = document.querySelector(".leaflet-container")._leaflet_map;
      map.setView([selectedTask.location.lat, selectedTask.location.lng], 13);
    }
  }, [selectedTask]);

  return (
    <div className="map-container">
      <MapContainer center={[43.263, -2.935]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.latitude, loc.longitude]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
        {selectedLocation && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <Popup>
              Nueva tarea:
              <input 
                type="text" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)} 
              />
              <br />
              Tipo de tarea:
              <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="high">Alta prioridad</option>
                <option value="low">Baja prioridad</option>
              </select>
              <br />
              <button className="add-task-btn" onClick={addTask}>Agregar</button>
            </Popup>
          </Marker>
        )}
        {tasks.map((task, index) => (
          <Marker key={index} position={[task.location.lat, task.location.lng]}>
            <Popup>
              Tarea: {task.text}
              <br />
              Tipo: {task.type === "high" ? "Alta prioridad" : task.type === "low" ? "Baja prioridad" : "Normal"}
              <br />
              Ubicación: ({task.location.lat.toFixed(4)}, {task.location.lng.toFixed(4)})
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="task-list">
        <h3 className="task-header">Tareas Pendientes</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item" onClick={() => handleTaskClick(task)}>
              <input 
                type="text" 
                value={task.text} 
                onChange={(e) => editTask(index, e.target.value, task.type)} 
                className="task-input"
              />
              <span className="task-location">
                ({task.location.lat.toFixed(4)}, {task.location.lng.toFixed(4)})
              </span>
              <span className="task-type">
                ({task.type === "high" ? "Alta" : task.type === "low" ? "Baja" : "Normal"})
              </span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MapComponent;

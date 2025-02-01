import { useState } from 'react';
import './TaskForm.css';

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    id: '',
    title: '',
    description: '',
    type: '',
    location: '',
    dueDate: '',
    time: '',
    priority: 'media',
    status: 'pending'
  });
  const [isEditing, setIsEditing] = useState(false);

  const taskTypes = ['Personal', 'Trabajo', 'Estudio', 'Hogar', 'Otros'];
  const priorities = ['alta', 'media', 'baja'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTasks(tasks.map(task => 
        task.id === currentTask.id ? currentTask : task
      ));
      setIsEditing(false);
    } else {
      setTasks([...tasks, { ...currentTask, id: Date.now().toString() }]);
    }
    setCurrentTask({
      id: '',
      title: '',
      description: '',
      type: '',
      location: '',
      dueDate: '',
      time: '',
      priority: 'media',
      status: 'pending'
    });
  };

  const editTask = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <div className="card-header">
          <h2 className="card-title">
            {isEditing ? 'Editar Tarea' : 'Nueva Tarea'}
          </h2>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit} className="task-form">
            <div className="input-group">
              <label>Título</label>
              <input
                type="text"
                value={currentTask.title}
                onChange={(e) => setCurrentTask({...currentTask, title: e.target.value})}
                className="form-input"
                required
              />
            </div>

            <div className="input-group">
              <label>Descripción</label>
              <input
                type="text"
                value={currentTask.description}
                onChange={(e) => setCurrentTask({...currentTask, description: e.target.value})}
                className="form-input"
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Tipo</label>
                <select
                  value={currentTask.type}
                  onChange={(e) => setCurrentTask({...currentTask, type: e.target.value})}
                  className="form-select"
                >
                  <option value="">Seleccionar tipo</option>
                  {taskTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Prioridad</label>
                <select
                  value={currentTask.priority}
                  onChange={(e) => setCurrentTask({...currentTask, priority: e.target.value})}
                  className="form-select"
                >
                  <option value="">Seleccionar prioridad</option>
                  {priorities.map((priority) => (
                    <option key={priority} value={priority}>
                      {priority}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Ubicación</label>
              <input
                type="text"
                value={currentTask.location}
                onChange={(e) => setCurrentTask({...currentTask, location: e.target.value})}
                className="form-input"
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Fecha</label>
                <div className="date-input">
                  <input
                    type="date"
                    value={currentTask.dueDate}
                    onChange={(e) => setCurrentTask({...currentTask, dueDate: e.target.value})}
                    className="form-input"
                  />
                  <svg 
                    className="calendar-icon" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
              </div>

              <div className="input-group">
                <label>Hora</label>
                <input
                  type="time"
                  value={currentTask.time}
                  onChange={(e) => setCurrentTask({...currentTask, time: e.target.value})}
                  className="form-input"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
            >
              {isEditing ? 'Actualizar' : 'Crear'} Tarea
            </button>
          </form>

          <div className="task-list">
            <h3 className="list-title">Tareas</h3>
            <div className="task-grid">
              {tasks.map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-content">
                    <h4 className="task-title">{task.title}</h4>
                    <p className="task-description">{task.description}</p>
                    <div className="tag-container">
                      <span className="type-tag">{task.type}</span>
                      <span className="priority-tag">{task.priority}</span>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => editTask(task)}
                      className="edit-button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
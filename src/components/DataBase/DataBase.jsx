import { useState, useEffect } from 'react';
import './Database.css';

const Database = () => {
  const [tasks, setTasks] = useState([
    { name: 'Desarrollar API', impact: 90, importance: 85, id: '1' },
    { name: 'Diseñar UI/UX', impact: 75, importance: 80, id: '2' },
    { name: 'Testing', impact: 85, importance: 95, id: '3' },
    { name: 'Documentación', impact: 60, importance: 70, id: '4' },
    { name: 'Optimización', impact: 70, importance: 75, id: '5' }
  ]);

  const [newTask, setNewTask] = useState({ name: '', impact: '', importance: '' });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  // Función para dibujar el gráfico radial
  useEffect(() => {
    const drawRadarChart = () => {
      const canvas = document.getElementById('radarChart');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 50;

      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar círculos de referencia
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, 2 * Math.PI);
        ctx.strokeStyle = '#e5e7eb';
        ctx.stroke();
      }

      // Calcular puntos para cada tarea
      const angleStep = (2 * Math.PI) / tasks.length;
      
      // Dibujar líneas de impacto
      ctx.beginPath();
      tasks.forEach((task, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const distance = (task.impact / 100) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();
      ctx.strokeStyle = '#8b5cf6';
      ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.stroke();
      ctx.fill();

      // Dibujar líneas de importancia
      ctx.beginPath();
      tasks.forEach((task, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const distance = (task.importance / 100) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();
      ctx.strokeStyle = '#10b981';
      ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.stroke();
      ctx.fill();

      // Dibujar etiquetas
      ctx.font = '12px Arial';
      ctx.fillStyle = '#4b5563';
      tasks.forEach((task, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * (radius + 20);
        const y = centerY + Math.sin(angle) * (radius + 20);
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.textAlign = 'center';
        const displayName = task.name.length > 15 ? 
          task.name.substring(0, 15) + '...' : 
          task.name;
        ctx.fillText(displayName, 0, 0);
        ctx.restore();
      });
    };

    drawRadarChart();
  }, [tasks]);

  const validateTask = (task) => {
    if (!task.name.trim()) {
      setError('El nombre de la tarea es requerido');
      return false;
    }
    if (isNaN(task.impact) || task.impact < 0 || task.impact > 100) {
      setError('El impacto debe ser un número entre 0 y 100');
      return false;
    }
    if (isNaN(task.importance) || task.importance < 0 || task.importance > 100) {
      setError('La importancia debe ser un número entre 0 y 100');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddTask = () => {
    const taskToAdd = {
      ...newTask,
      impact: parseInt(newTask.impact),
      importance: parseInt(newTask.importance),
      id: Date.now().toString()
    };

    if (validateTask(taskToAdd)) {
      setTasks([...tasks, taskToAdd]);
      setNewTask({ name: '', impact: '', importance: '' });
    }
  };

  const handleEditTask = (task) => {
    if (editingId === task.id) {
      setEditingId(null);
      setNewTask({ name: '', impact: '', importance: '' });
    } else {
      setEditingId(task.id);
      setNewTask(task);
    }
  };

  const handleUpdateTask = () => {
    if (editingId && validateTask(newTask)) {
      const updatedTasks = tasks.map(task =>
        task.id === editingId ? { ...newTask, id: task.id } : task
      );
      setTasks(updatedTasks);
      setEditingId(null);
      setNewTask({ name: '', impact: '', importance: '' });
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-manager-container">
      <div className="task-card">
        <div className="card-header">
          <h1 className="card-title">Gestor de Tareas con Visualización de Impacto</h1>
        </div>
        <div className="card-content">
          {error && (
            <div className="error-alert">
              <span className="alert-icon">⚠️</span>
              <p className="alert-message">{error}</p>
            </div>
          )}
          
          <div className="form-container">
            <input
              type="text"
              placeholder="Nombre de la tarea"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              className="task-input"
            />
            <input
              type="number"
              placeholder="Impacto (0-100)"
              value={newTask.impact}
              onChange={(e) => setNewTask({ ...newTask, impact: e.target.value })}
              className="metric-input"
              min="0"
              max="100"
            />
            <input
              type="number"
              placeholder="Importancia (0-100)"
              value={newTask.importance}
              onChange={(e) => setNewTask({ ...newTask, importance: e.target.value })}
              className="metric-input"
              min="0"
              max="100"
            />
            <button 
              onClick={editingId ? handleUpdateTask : handleAddTask}
              className="action-button"
            >
              {editingId ? 'Actualizar' : 'Agregar'}
            </button>
          </div>

          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span className="task-name">{task.name}</span>
                <span className="task-metric">Impacto: {task.impact}</span>
                <span className="task-metric">Importancia: {task.importance}</span>
                <button
                  onClick={() => handleEditTask(task)}
                  className={`icon-button edit-button ${editingId === task.id ? 'active' : ''}`}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="icon-button delete-button"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="chart-container">
            <canvas 
              id="radarChart" 
              width="600" 
              height="400" 
              className="radar-chart"
            ></canvas>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color impact"></span>
                <span>Impacto</span>
              </div>
              <div className="legend-item">
                <span className="legend-color importance"></span>
                <span>Importancia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
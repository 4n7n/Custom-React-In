import { useState } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [task, setTask] = useState({ date: '', time: '', message: '', priority: 'medium', category: '' });
  const [sortOption, setSortOption] = useState('date');

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...task, id: editingTask.id } : t));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setTask({ date: '', time: '', message: '', priority: 'medium', category: '' });
  };

  const handleEdit = (taskToEdit) => {
    setEditingTask(taskToEdit);
    setTask(taskToEdit);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleQuickFill = () => {
    const now = new Date();
    const templates = [
      `Revisar proyecto ${now.toLocaleDateString()}`,
      `Reunión de equipo a las ${now.getHours()}:${now.getMinutes()}`,
      `Llamada con cliente - ${now.toDateString()}`,
      `Entregar informe antes de ${now.getHours() + 2}:00`,
      `Actualizar documentación del sprint ${now.getMonth() + 1}`
    ];
    setTask({
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().split(' ')[0].slice(0, 5),
      message: templates[Math.floor(Math.random() * templates.length)],
      priority: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
      category: ['trabajo', 'personal', 'proyecto', 'reunión'][Math.floor(Math.random() * 4)]
    });
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOption === 'date') return new Date(a.date) - new Date(b.date);
    if (sortOption === 'priority') return ['low', 'medium', 'high'].indexOf(a.priority) - ['low', 'medium', 'high'].indexOf(b.priority);
    return a[sortOption].localeCompare(b[sortOption]);
  });

  return (
    <div className="task-management">
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="date" name="date" value={task.date} onChange={handleChange} required />
        <input type="time" name="time" value={task.time} onChange={handleChange} required />
        <input type="text" name="message" placeholder="Mensaje de la tarea" value={task.message} onChange={handleChange} required />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
        <input type="text" name="category" placeholder="Categoría" value={task.category} onChange={handleChange} />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="date">Ordenar por Fecha</option>
          <option value="time">Ordenar por Hora</option>
          <option value="priority">Ordenar por Prioridad</option>
          <option value="category">Ordenar por Categoría</option>
        </select>
        <button type="button" onClick={handleQuickFill}>Autocompletar</button>
        <button type="submit">{editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}</button>
      </form>
      <div className="task-list">
        {sortedTasks.map(t => (
          <div key={t.id} className="task-item">
            <span>{t.date} {t.time}</span>
            <span>{t.message}</span>
            <span>{t.priority}</span>
            <span>{t.category}</span>
            <button onClick={() => handleEdit(t)}>Editar</button>
            <button onClick={() => handleDelete(t.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;
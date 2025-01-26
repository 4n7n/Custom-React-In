import { useState } from 'react';
import './TaskForm.css';

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, message });
    setDate('');
    setTime('');
    setMessage('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mensaje de la tarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
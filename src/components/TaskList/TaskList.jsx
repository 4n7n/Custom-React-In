import PropTypes from 'prop-types';
import { Trash2, Edit, CheckCircle } from 'lucide-react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Tareas Completadas</h2>
        <span className="task-count">{tasks.length} Tareas</span>
      </div>
      
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No hay tareas completadas</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={task.id || index} className="task-item">
              <div className="task-content">
                <CheckCircle className="task-icon completed" />
                <div className="task-details">
                  <span className="task-date">{task.date}</span>
                  <span className="task-time">{task.time}</span>
                  <p className="task-message">{task.message}</p>
                </div>
              </div>
              <div className="task-actions">
                <button 
                  onClick={() => onEdit(task)} 
                  className="action-btn edit"
                >
                  <Edit />
                </button>
                <button 
                  onClick={() => onDelete(task.id)} 
                  className="action-btn delete"
                >
                  <Trash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};

TaskList.defaultProps = {
  onDelete: () => {},
  onEdit: () => {}
};

export default TaskList;
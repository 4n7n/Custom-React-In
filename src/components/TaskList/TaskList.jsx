import PropTypes from 'prop-types';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Tareas Completadas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.date}</span>
            <span>{task.time}</span>
            <span>{task.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
const API_URL = "https://api.example.com/locations";

class MapTasksManager {
  constructor(initialCenter = [43.263, -2.935], initialZoom = 13) {
    this.locations = [];
    this.tasks = [];
    this.selectedLocation = null;
    this.taskText = "";
    this.taskType = "normal";
    this.selectedTask = null;
    this.mapConfig = {
      center: initialCenter,
      zoom: initialZoom
    };
    
    this.taskTypeOptions = [
      { value: "normal", label: "Normal" },
      { value: "high", label: "Alta prioridad" },
      { value: "low", label: "Baja prioridad" }
    ];

    // Bind methods
    this.fetchLocations = this.fetchLocations.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.updateTaskText = this.updateTaskText.bind(this);
    this.updateTaskType = this.updateTaskType.bind(this);
  }

  // Fetch locations from API
  async fetchLocations() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      this.locations = data;
      return data;
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  }

  // Add new task
  addTask() {
    if (this.selectedLocation && this.taskText) {
      this.tasks.push({
        text: this.taskText,
        location: this.selectedLocation,
        type: this.taskType
      });
      
      // Reset states
      this.taskText = "";
      this.taskType = "normal";
      this.selectedLocation = null;
      
      return [...this.tasks];
    }
    return this.tasks;
  }

  // Edit existing task
  editTask(index, newText, newType) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = {
        ...this.tasks[index],
        text: newText,
        type: newType
      };
      return [...this.tasks];
    }
    return this.tasks;
  }

  // Delete task
  deleteTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks = this.tasks.filter((_, i) => i !== index);
      return [...this.tasks];
    }
    return this.tasks;
  }

  // Handle task selection
  handleTaskClick(task) {
    this.selectedTask = task;
    return task;
  }

  // Handle map click
  handleMapClick(latlng) {
    this.selectedLocation = latlng;
    return latlng;
  }

  // Update task text
  updateTaskText(text) {
    this.taskText = text;
    return text;
  }

  // Update task type
  updateTaskType(type) {
    this.taskType = type;
    return type;
  }

  // Get current state
  getState() {
    return {
      locations: this.locations,
      tasks: this.tasks,
      selectedLocation: this.selectedLocation,
      taskText: this.taskText,
      taskType: this.taskType,
      selectedTask: this.selectedTask,
      mapConfig: this.mapConfig,
      taskTypeOptions: this.taskTypeOptions
    };
  }

  // Helper method to find task by coordinates
  findTaskByCoordinates(lat, lng) {
    return this.tasks.find(task => 
      task.location.lat === lat && 
      task.location.lng === lng
    );
  }

  // Helper method to filter tasks by type
  filterTasksByType(type) {
    return this.tasks.filter(task => task.type === type);
  }

  // Helper method to get tasks count by type
  getTasksCountByType() {
    return {
      normal: this.tasks.filter(task => task.type === 'normal').length,
      high: this.tasks.filter(task => task.type === 'high').length,
      low: this.tasks.filter(task => task.type === 'low').length
    };
  }

  // Helper method to clear all tasks
  clearTasks() {
    this.tasks = [];
    return this.tasks;
  }

  // Helper method to reset all state
  reset() {
    this.tasks = [];
    this.selectedLocation = null;
    this.taskText = "";
    this.taskType = "normal";
    this.selectedTask = null;
    return this.getState();
  }
}

// Export an instance creator function
export const createMapTasksManager = (initialCenter, initialZoom) => {
  return new MapTasksManager(initialCenter, initialZoom);
};

// Export the class if needed
export { MapTasksManager };
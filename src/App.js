import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import AddTask from "./AddTask";
import Task from "./Task";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleCompleteTask = (index) => {
    let task = tasks[index];
    task.completed = !task.completed;
    tasks[index] = task;
    setTasks([...tasks]);
  };
  return (
    <div className="App">
      <h2>Task List Manager</h2>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <div className="taskListWrapper">
        {tasks.map((task, key) => (
          <Task
            key={key}
            task={task}
            handleCompleteTask={handleCompleteTask}
            index={key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

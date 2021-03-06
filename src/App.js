import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./AddTask";
import Task from "./Task";
function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Welcome!");
  const handleCompleteTask = (index) => {
    let task = tasks[index];
    task.completed = !task.completed;
    tasks[index] = task;
    setMessage("Task Completed!");
    setTasks([...tasks]);
  };
  const handleDeleteTask = (index) => {
    let tempTasks = tasks;
    tempTasks.splice(index, 1);
    setMessage("Task Deleted!");
    setTasks([...tempTasks]);
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [tasks]);
  return (
    <div className="App">
      <h2>Task Manager</h2>
      <div className="messageSpacer">
        <h4>{message}</h4>
      </div>
      <AddTask tasks={tasks} setTasks={setTasks} setMessage={setMessage} />
      <div className="taskListWrapper">
        {tasks.map((task, key) => (
          <Task
            key={key}
            task={task}
            index={key}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

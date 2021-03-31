import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./AddTask";
import Task from "./Task";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {}, []);
  const handleCompleteTask = (index) => {
    let task = tasks[index];
    task.completed = !task.completed;
    tasks[index] = task;
    setTasks([...tasks]);
  };
  return (
    <div className="App">
      <h4>Tasks</h4>
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

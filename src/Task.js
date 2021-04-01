import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
const Task = ({ task, index, handleCompleteTask, handleDeleteTask }) => {
  const { name, description, priority, completed } = task;
  const determineProgress = () => {
    if (completed)
      return { priorityStatus: "success", priorityLabel: "Completed" };
    if (priority === "1")
      return { priorityStatus: "info", priorityLabel: "Low Priority" };
    if (priority === "2")
      return { priorityStatus: "warning", priorityLabel: "Medium Priority" };
    return { priorityStatus: "danger", priorityLabel: "High Priority" };
  };
  const { priorityStatus, priorityLabel } = determineProgress();
  const buttonLabel = completed ? "Completed" : "Complete Task";
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="rowCenter">
          <Card.Title>{name}</Card.Title>
          <div className="fill" />
          <Button variant="outlined" onClick={() => handleDeleteTask(index)}>
            ❌
          </Button>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="rowCenter">
        <Button
          className="completeTaskButton"
          onClick={() => handleCompleteTask(index)}
          disabled={completed}
        >
          {buttonLabel}
        </Button>
        <ProgressBar
          variant={priorityStatus}
          label={priorityLabel}
          now={100}
          className="maxWidth"
        />
      </Card.Footer>
    </Card>
  );
};
export default Task;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Task = ({ task, handleCompleteTask, index }) => {
  const { name, description, priority, completed } = task;
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Priority: {priority}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Completed: {completed ? "Yes" : "No"}</Card.Text>
        <Button onClick={() => handleCompleteTask(index)}>Complete Task</Button>
      </Card.Footer>
    </Card>
  );
};
export default Task;

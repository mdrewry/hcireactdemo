import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const AddTask = ({ tasks, setTasks }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateField = (e, setField) => {
    const value = e.target.value;
    setField(value);
  };
  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTask = { name, description, priority, completed: false };
    console.log(newTask);
    setTasks([newTask, ...tasks]);
    setName("");
    setDescription("");
    setPriority(1);
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header className="rowCenter">
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateTask}>
            <Form.Group controlId="taskName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Trash"
                value={name}
                onChange={(e) => handleUpdateField(e, setName)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => handleUpdateField(e, setDescription)}
                placeholder="Take out the trash"
              />
            </Form.Group>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                type="range"
                min={1}
                max={3}
                value={priority}
                onChange={(e) => handleUpdateField(e, setPriority)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AddTask;

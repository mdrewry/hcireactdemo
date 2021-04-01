import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircle from "@material-ui/icons/AddCircle";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import RangeSlider from "react-bootstrap-range-slider";
const AddTask = ({ tasks, setTasks, setMessage }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  const determineVariant = () => {
    if (priority === "1") return "info";
    if (priority === "2") return "warning";
    return "danger";
  };
  const variant = determineVariant();
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
    setPriority("1");
    setMessage("Task Added!");
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        style={{
          position: "absolute",
          left: "60vw",
          top: "5vh",
          transform: "scale(2.3)",
          color: "rgba(0, 0, 233, 0.70)",
        }}
      >
        <AddCircle />
      </IconButton>
      <div style={{ height: "6vh" }}></div>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
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
            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => handleUpdateField(e, setDescription)}
                placeholder="Take out the trash"
              />
            </Form.Group>
            <Form.Group controlId="priority" className="mt-3">
              <Form.Label>Priority</Form.Label>
              <RangeSlider
                className="maxWidth"
                type="range"
                min={1}
                max={3}
                tooltipPlacement="top"
                variant={variant}
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
    </>
  );
};
export default AddTask;

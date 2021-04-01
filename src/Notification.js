import React from "react";
import Card from "react-bootstrap/Card";
const Notification = ({ message }) => {
  if (message === "") return <></>;
  return (
    <div className="notification">
      <Card>
        <Card.Body>
          <h4>{message}</h4>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Notification;

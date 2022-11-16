import React from "react";

import { Modal, Button } from "react-bootstrap";

function ModalDialog({ data, setModalData, title }) {
  const handleClose = () => {
    setModalData(null);
  };

  return (
    <Modal className="modal" show={true}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {data.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>

            <input type="text" value={item.value} disabled />

            <br />

            <br />
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDialog;

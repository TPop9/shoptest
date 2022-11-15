import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalDialog(props) {
  const [isShow, invokeModal] = React.useState(true)
  const initModal = () => {
    return invokeModal(true)
  }
  const closeModal = () => {
    return invokeModal(!true)
  }
  return (
    <>
      {props.data} 
      <Modal style={{position: 'absolute',
                    top: '35%',
                    left: '39%',
                    backgroundColor: "black",
                    color: "red"
                    }} show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name">
            Name:
          </label>
          <input type="text" 
                 disabled/> <br /> <br />

          <label htmlFor="name">
            Last Name:
          </label>
          <input type="text" 
                 disabled/> <br /> <br />

          <label htmlFor="last-name">
            Username:
          </label>
          <input type="text" 
                 disabled/> <br /> <br />

          <label htmlFor="username">
            Password:
          </label>
          <input type="password" 
                 disabled/> <br /> <br />

          <label htmlFor="confirm-pwd">
            Confirm password:
          </label>
          <input type="text" 
                 disabled/>                            
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog
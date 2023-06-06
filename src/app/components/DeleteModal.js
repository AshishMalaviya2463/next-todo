import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ showModal, onClickSure, setShowModal }) => {
    return (
        <>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        You want to delete this TODO ?
                    </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={onClickSure}>Sure</Button>
                    <Button variant='primary' onClick={() => setShowModal(false)}>No</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal
import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modal1(props) {
    const [show, setShow] = useState(false);
    const [name, setname] = useState(props.name);
    const [age, setage] = useState("");
    const [height, setheight] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button size="sm" className='btnCard bg-lime-900 rounded-lg' onClick={handleShow}>Update</Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Update info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={(e) => {
                    handleClose();
                    e.preventDefault();
                }} id="editmodal" >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    autoFocus
                    autoComplete='off'
                    value={name}
                    onChange={(e) => {
                        setname(e.target.value);
                    }}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="number"
                    autoComplete='off'
                    value={age}
                    onChange={(e) => {
                        setage(e.target.value);
                    }}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Height</Form.Label>
                <Form.Control
                    type="text"
                    autoComplete='off'
                    value={height}
                    onChange={(e) => {
                        setheight(e.target.value);
                    }}
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer id='modalfooter'>
                <Button size="sm" className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>Close</Button>
                <Button size="sm" className="bg-lime-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded" form="editmodal">Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Modal1


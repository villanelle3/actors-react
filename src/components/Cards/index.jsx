import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal1 from '../Modals';
import ModalImage from '../Modals/ModalImage';
import Modal from 'react-bootstrap/Modal';

function ModailImage(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Body>
            <img src={props.image} alt="" />
        </Modal.Body>
        <Modal.Footer>
            <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={props.onHide}>
                Close
            </button>
        </Modal.Footer>
        </Modal>
    );
}

function Cards(props) {
    const [ClickedImage, setClickedImage ] = useState(null);
    const [CurrentIndex, setCurrentIndex ] = useState(null);
    const [modalShow, setModalShow] = useState(false);


    function handclick(props){
        setCurrentIndex(props.id)
        setClickedImage(props.picture)
        console.log(`clicou nesta imagem ${props.id}:  ${props.picture} ${CurrentIndex}`)
    }

    return (
        <>
            <Card className="mx-auto mt-5 card-main">
                <Card.Img variant="top" src={props.picture} className="card-image" onClick={()=>{handclick(props) 
                    setModalShow(true)}} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <Modal1 name={props.name} desc={props.desc}/>
                </Card.Body>
            </Card>
            <ModailImage show={modalShow} image={props.picture} onHide={() => setModalShow(false)}/>
            {ClickedImage && <ModalImage image={ClickedImage}/>} 
        </>
    );
}

export default Cards;
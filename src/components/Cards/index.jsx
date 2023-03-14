import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal1 from '../Modals';
import ModalImage from '../Modals/ModalImage';

function Cards(props) {
    const [ClickedImage, setClickedImage ] = useState(null);
    const [CurrentIndex, setCurrentIndex ] = useState(null);

    function handclick(props){
        setCurrentIndex(props.id)
        setClickedImage(props.picture)
        console.log(`clicou nesta imagem ${props.id}:  ${props.picture}`)
    }
    return (
        <>
            <Card className="mx-auto mt-5 card-main">
                <Card.Img variant="top" src={props.picture} className="card-image" onClick={()=>handclick(props)} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <Modal1 name={props.name} desc={props.desc}/>
                </Card.Body>
            </Card>
            {ClickedImage && <ModalImage image={ClickedImage}/>} 
        </>
    );
}

export default Cards;
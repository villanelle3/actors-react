import Card from 'react-bootstrap/Card';
import Modal1 from '../Modals';

function Cards(props) {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mt-5">
            <Card.Img variant="top" src={props.picture} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Modal1 name={props.name} desc={props.desc}/>
            </Card.Body>
        </Card>
    );
}

export default Cards;
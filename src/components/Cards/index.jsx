import { Button } from "@material-tailwind/react";
import Card from 'react-bootstrap/Card';

function Cards(props) {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mt-5">
            <Card.Img variant="top" src={props.picture} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button size="sm" className='btnCard bg-lime-900 rounded-lg'>Update</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;
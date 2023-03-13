import { Button } from "@material-tailwind/react";
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto mt-4">
            <Card.Img variant="top" src="https://blog.cobasi.com.br/wp-content/uploads/2021/08/AdobeStock_337625771.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button size="sm" className='btnCard bg-lime-900 rounded-lg'>Update</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;
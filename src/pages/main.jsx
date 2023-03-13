import Cards from "../components/Cards"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main(){
    return (
        <Container>
            <Row>
                <Col><Cards/></Col>
                <Col><Cards/></Col>
                <Col><Cards/></Col>
                <Col><Cards/></Col>
            </Row>
    </Container>
    )
}

export default Main
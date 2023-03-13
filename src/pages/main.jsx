import Cards from "../components/Cards"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";


function Main(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/villanelle3/fake-api/character`)
            .then((response) => {
                if (!response.ok) 
                {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                console.log(actualData) // Print data
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                console.log(err.message); // Print data
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
    
    return (
        <Container>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <Row>
                {data &&
                    data.map(({ id, name, picture, h, age }) => (
                        <div className="col-sm-3" key={id}><Cards  name={name} picture={picture} desc={`Height = ${h} Age = ${age}.`} /></div>
                    ))
                }
            </Row>
    </Container>
    )
}

export default Main
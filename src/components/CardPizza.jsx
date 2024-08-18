import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



const CardPizza = ({imagen, nombre, ingredientes, precio}) => {
    return(
        <>
        
        <Card  style={{ width: '25rem', margin:'2rem' }}>
                <Card.Img className='imagen fluid' style={{ height: '200px', objectFit: 'cover' }} variant="top" src={imagen}alt={{}}/>
            <Card.Body>
                    <Card.Title> <h5>{nombre}</h5></Card.Title>
            </Card.Body  >

            
                <ListGroup> 
                    <ListGroup.Item>
                Ingredientes:
                        <ul>
                            {ingredientes.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-center">
                        <h5>Precio: $ {precio}</h5>
                    </ListGroup.Item>
                </ListGroup>

           <Card.Body className="d-flex justify-content-between">
                <Card.Link href="#"><Button variant="outline-secondary">Ver más 👁️‍🗨️</Button>{' '}</Card.Link>
                <Card.Link href="#"><Button variant="dark">Añadir 🛒</Button></Card.Link>
            </Card.Body>
            
        </Card>

        
      
        </>

            );
}

export default CardPizza
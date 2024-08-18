
import React, { useState } from 'react';
import { pizzaCart } from '../assets/pizza';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Header from './Header';

const Cart = () => {
   
    const initialCart = pizzaCart.map(pizza => ({ ...pizza, count: 0 }));
    const [cart, setCart] = useState(initialCart);

    const handleIncrease = (id) => {
        setCart(cart.map(pizza =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        ));
    };

    const handleDecrease = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza
        ));
    };

    const calculateTotal = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    };
    
    const formattedTotal = calculateTotal().toLocaleString();

    return (
        <>
            <Header titulo="¡Carrito de Compras!" />
            <Container>
                <Row>
                    {cart.map((pizza) => (
                        <Col md={4} key={pizza.id}>
                            <Card style={{ width: '25rem', margin: '2rem' }}>
                                <Card.Img variant="top" src={pizza.img} alt={pizza.name} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body className="text-center">
                                    <Card.Title>{pizza.name}</Card.Title>
                                </Card.Body>

                                <ListGroup className="list-group-flush text-center">
                                    <ListGroup.Item>
                                        <h5>Precio: $ {pizza.price}</h5>
                                    </ListGroup.Item>
                                </ListGroup>

                                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                                    <Button 
                                        variant="secondary" 
                                        style={{ width: '3rem', padding: '0.5rem', margin: '0.5rem' }} 
                                        onClick={() => handleDecrease(pizza.id)}
                                    > - </Button>
                                    <p style={{ margin: '0.5rem' }}>{pizza.count}</p>
                                    <Button 
                                        variant="secondary" 
                                        style={{ width: '3rem', padding: '0.5rem', margin: '0.5rem' }} 
                                        onClick={() => handleIncrease(pizza.id)}
                                    > + </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                     <Button variant="secondary">  TOTAL: $ {formattedTotal}</Button>
                    </div>
            </Container>
        </>
    );
};

export default Cart;
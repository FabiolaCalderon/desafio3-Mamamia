import React from 'react';
import Header from "./Header";
import CardPizza from "./CardPizza";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pizzas from '../assets/pizza';


const Home = () => {

    return(
    <>
        <Header
        titulo="¡Pizzería Mamma Mia!"
        detalle= "¡Tenemos las mejores pizzas que podrás encontrar!"/>
   
        <Container>
        <Row>
        {pizzas.map((pizza) => (
            <Col md={4} key={pizza.id}>
                <CardPizza
                imagen={pizza.img}
                nombre={pizza.name}
                ingredientes={pizza.ingredients}
                precio= {pizza.price}
                />
            </Col>
        ))}
        </Row>        
        </Container>
    </>
    );
};







{/*
const Home = () => {
    return(

       <>
       <Header
       titulo="¡Pizzería Mamma Mia!"
       detalle= "¡Tenemos las mejores pizzas que podrás encontrar!"/>

       
        <Container >
            <Row >
                <Col md={4} >
                    <CardPizza 
                        imagen= "https://images.stockcake.com/public/c/f/1/cf1fec9f-971f-41da-b5bc-4c13ad4b96b8_large/delicious-pizza-slice-stockcake.jpg"
                        nombre="Pizza Napolitana"
                        ingredientes=  "🍕 mozarrella, tomates, jamón, orégano"
                        precio="$5.950"
                    />
                </Col>

                <Col md={4}>
                    <CardPizza
                        imagen= "https://images.stockcake.com/public/1/0/b/10bebac2-7090-4e0f-9edf-2e549bfea364_large/delicious-pizza-slice-stockcake.jpg"
                        nombre="Pizza Española"
                        ingredientes= "🍕mozarrella, gorgonzola, parmesado, provolone"
                        precio="$6.950"
                    />
                </Col>

                <Col md={4}> 
                    <CardPizza
                        imagen= "https://images.stockcake.com/public/3/e/8/3e84e15c-45da-446a-be23-423df8d3c868_large/delicious-tomato-pizza-stockcake.jpg"
                        nombre="Pizza Pepperoni"
                        ingredientes= "🍕mozarrella, pepperoni, orégano"
                        precio = "$6.950"
                    />
                </Col>
            </Row>
        </Container>
       </>

    );
}
*/}



export default Home;
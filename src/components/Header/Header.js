import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Card from '../Card/Card';
import './Header.css';

const Header = () => {
    
   const [product, setProduct] = useState([]);

   useEffect(() => {
       fetch('http://localhost:5000/product')
       .then(res => res.json())
       .then(data => setProduct(data))
   },[])

    return (
        <div className="Header">
            <Container className="riders-cards">
                <Row>
                    {product.map((data) => (
                        <Col lg={4} md={6} key={data.id}>
                            <Card data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Header;

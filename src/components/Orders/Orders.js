import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';

import OrderItem from './OrderItem';
import './Order.css';

const Orders = () => {
    const [products, setProducts] = useState([]);
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
      
        axios
            .get(
                `http://localhost:5000/buyData?email=${loggedInUser.email}`
            )
            .then((res) => {
                setProducts(res.data);
               
            });
    }, [loggedInUser.email]);

   

    return (
        <Container className="mt-5 pt-5">
            <div className="text-center mb-4">
                <h5>Welcome, {loggedInUser.displayName}</h5>
                <h2>Your All Ordered Items: {products.length}</h2>
            </div>
            {products.map((product) => (
                <OrderItem product={product} key={product._id} />
            ))}
        </Container>
    );
};

export default Orders;

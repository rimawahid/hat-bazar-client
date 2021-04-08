import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
 import { UserContext } from '../../App';


const Checkout = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
       
        axios
            .get('https://enigmatic-cove-10345.herokuapp.com/product')
            .then((res) => {
                setProducts(res.data);
                
            });
    }, []);

    const buyProduct = products.find((product) => product._id === id);

    const buyData = {
        name: buyProduct?.name,
        price: buyProduct?.price,
        imageURL: buyProduct?.imageURL,
        date: new Date().toLocaleString(),
        email: loggedInUser.email,
    };

    const handleClick = () => {
        axios
            .post(
                'https://enigmatic-cove-10345.herokuapp.com/addBuyData',
                buyData
            )
            .then(() => alert('Order  successfully'));
    };

    

    return (
        <Container className="mt-5 pt-5">
            
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{buyProduct?.name}</td>
                        <td>1</td>
                        <td>${buyProduct?.price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button
                                className="custom-btn"
                                onClick={handleClick}
                            >
                                Checkout
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
};

export default Checkout;
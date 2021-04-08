import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const[product ,setProduct] = useState([])
    const [id, setId] = useState('');
useEffect(() => {
    fetch('https://enigmatic-cove-10345.herokuapp.com/product')
    .then(res => res.json())
    .then(data => setProduct(data))
    
},[])

useEffect(() => {
    id &&
        axios
            .delete(
                `https://enigmatic-cove-10345.herokuapp.com/deleteProduct/${id}`
            )
            .then(() => console.log('delete ss'));
}, [id]);
    return (
        <div className="row mt-5 pt-5">
            <div className="col-md-10">
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            {product.map((data) => (
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.price}Tk</td>
                        <td><button className="custom-btn">Edit</button  ><button className="custom-btn" onClick={() =>setId(data._id)}> Delete </button></td>
                    </tr>
                     </tbody>
                ))}
            </table>
            </div>
        </div>
                
            
            
        
        
             
      
    );
};

export default ManageProduct;
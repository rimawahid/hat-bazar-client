import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
const [imageURL , setImageURL] = useState(null)

const onSubmit = data =>{ 
    
    const { name, price } = data;

        const productData = {
            name,
            price,
            imageURL,
        };
    const url=`https://enigmatic-cove-10345.herokuapp.com/addProduct`
    console.log(productData)
    fetch(url,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(res => console.log('adding new product:',res))
   
            
};

    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key','8e7dd02d6b4c4ea47b9b056a85257d2f')
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
           imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="row mt-5 pt-5">
                <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label">Product Name:</label>
                            <input placeholder = "Enter Name" required name="name" type="text" ref={register({ required: true })} className="form-control"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Product Price:</label>
                                    <input placeholder = "Enter Price" required name="price" type="text" ref={register({ required: true })} className="form-control"/>
                        </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-file-label">Add Photo</label>
                                    <input onChange={handleImageUpload} required  type="file" className="form-control-file" />
                        </div>
                            </div>
                        </div>
                        <button  type="submit" className="btn btn-primary" disabled={!imageURL && true}>Add Product</button>
                    </form>
                </div>
        </div>
    );
};

export default AddProduct;
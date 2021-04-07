import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ data }) => {
    const history = useHistory();
    const { _id, imageURL, name,price } = data;

    const handleClick = () => {
        history.push(`/rider/${_id}`);
    };

    return (
        <div className="my-3  " >
            <div className="Card card">
                <div className="Card-img">
                <img src={imageURL} alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-footer d-flex justify-content-between align-items-center"> 
                        <h5 className="p-color">{price} Tk</h5>
                        <button className="custom-btn" onClick={handleClick}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

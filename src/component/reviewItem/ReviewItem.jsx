import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {img,id,name,quantity,price}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <h5>{name}</h5>
                <p>Price: <span className='orange'>${price}</span></p>
                <p>Quantity: <span className='orange'>${quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='icon' icon={faTrashAlt} /></button>
            
        </div>
    );
};

export default ReviewItem;
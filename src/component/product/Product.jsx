import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,name,price,seller,ratings,category}=props.product 
    const addToCart=props.addToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6>Product Name:{name}</h6>
            <h6>Category:{category}</h6>
            <h6>Price:{price}</h6>
            <h6>Manufacturer:{seller}</h6>
            <h6>Ratings:{ratings}</h6>
            </div>
            <button className='button-cart' onClick={()=>addToCart(props.product)}>Add To Cart</button>
           
        </div>
    );
};

export default Product;
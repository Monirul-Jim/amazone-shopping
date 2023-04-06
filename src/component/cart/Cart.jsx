import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props
    let total=0;
    let totalShipping=0;
    let tax=0;
    let grandTotal=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1
        }
        total=total+product.price*product.quantity
        totalShipping=totalShipping+product.shipping*product.quantity
        tax=total*7/100
        grandTotal=total+totalShipping+tax;
        quantity=quantity+product.quantity
    }
    return (
        <div className='cart'> 
            <h4>Order Summary</h4>
            <p>Selected Item:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shopping:{totalShipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
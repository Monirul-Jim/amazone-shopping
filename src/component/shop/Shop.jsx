import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import "./Shop.css"

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("packeg.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];
        for(const  id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart)
    },[products])
    const addToCart =(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }

            </div>


            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;
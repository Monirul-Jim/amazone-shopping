import React from 'react';
import './Header.css'
import logo from "../images/Logo.svg"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="this is beauty" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            {/* <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
            </nav> */}
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link> | <Link to="/shop/category/technology/cpus">Shop</Link>
            </nav>
        </>
    )
}

export default Menu

import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product,id) => {
        // Add product to cart

        fetch(`http://localhost:5000/cart/product/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                jwt: Cookies.get("jwt"),
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const getCart = () => {
        // Return user's cart
    };

    const removeFromCart = (productId) => {
        // Remove product from cart
    };

    const buyProducts = () => {
        // Purchase products in cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getCart, removeFromCart, buyProducts }}>
            {children}
        </CartContext.Provider>
    );
};
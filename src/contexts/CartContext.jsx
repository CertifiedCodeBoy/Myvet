import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product, id) => {
    // Add product to cart
    fetch(`http://localhost:5000/cart/product/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        jwt: Cookies.get("jwt"),
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/Cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
      });
      const data = await response.json();
      if (response.ok) {
        setCart(data.Cart);
        setLoading(false);
      } else {
        throw new Error(
          data.message || "An error occurred while fetching Cart."
        );
      }
    } catch (error) {
      console.error("Error fetching Cart:", error);
      setError(error.message || "An error occurred while fetching Cart.");
      setCart([]);
      setLoading(false);
    }
  };

  const removeFromCart = (product) => {
    // Remove product from cart
    const productId = product.productId;
    const reqBody = {
      productId: product.productId,
      colors: product.colors,
    };

    fetch(`http://localhost:5000/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        jwt: Cookies.get("jwt"),
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const buyProducts = () => {
    // Purchase products in cart
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        fetchCart,
        loading,
        error,
        removeFromCart,
        buyProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

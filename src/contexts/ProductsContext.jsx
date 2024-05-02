import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.filter((p) => p.category !== "electronics"));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "An error occurred while fetching products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts([...products, data]);
    } catch (error) {
      console.error("Error adding product:", error);
      setError(error.message || "An error occurred while adding the product.");
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error.message || "An error occurred while deleting the product.");
    }
  };

  return (
    <ProductsContext.Provider value={{ products, loading, error, addProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

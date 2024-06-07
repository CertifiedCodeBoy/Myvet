import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [userProducts, setUserProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/homepage`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "An error occurred while fetching products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const getProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setProduct(data.result);
        return data;
      } else {
        console.log("Response not ok");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(
        error.message || "An error occurred while fetching the product."
      );
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        console.log("REspone not ok", data);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(
        error.message || "An error occurred while deleting the product."
      );
    }
  };

  const addProduct = async (newProduct, sellerId) => {
    try {
      const response = await fetch(`http://localhost:5000/${sellerId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        console.log(sellerId);
        console.log("Response not ok");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setError(error.message || "An error occurred while adding the product.");
    }
  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        console.log("Response not ok");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setError(
        error.message || "An error occurred while updating the product."
      );
    }
  };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       setProducts(data.filter((p) => p.category !== "electronics"));
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setError(error.message || "An error occurred while fetching products.");
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // const addProduct = async (newProduct) => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newProduct),
  //     });
  //     const data = await response.json();
  //     setProducts([...products, data]);
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //     setError(error.message || "An error occurred while adding the product.");
  //   }
  // };

  // const deleteProduct = async (productId) => {
  //   try {
  //     await fetch(`https://fakestoreapi.com/products/${productId}`, {
  //       method: "DELETE",
  //     });
  //     setProducts(products.filter((product) => product.id !== productId));
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     setError(error.message || "An error occurred while deleting the product.");
  //   }
  // };

  const getArticles = async () => {
    try {
      const response = await fetch("http://localhost:5000/articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserProducts(data.data);
        console.log(data.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError(error.message || "An error occurred while fetching articles.");
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        loading,
        error,
        userProducts,
        getProduct,
        getArticles,
        deleteProduct,
        addProduct,
        updateProduct,
        setError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

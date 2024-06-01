import React, { createContext, useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await fetch("https://fakestoreapi.com/products");
  //         const data = await response.json();
  //         setProducts(data.filter((p) => p.category !== "electronics"));
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //         setError(error.message || "An error occurred while fetching products.");
  //         setLoading(false);
  //       }
  //     };
  //     fetchProducts();
  //   }, []);

  useEffect(() => {
    setLoading(true);
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/favorites", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          setFavorites(data);
          console.log(data)
          setLoading(false);
        } else {
          throw new Error(
            data.message || "An error occurred while fetching favorites."
          );
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError(
          error.message || "An error occurred while fetching favorites."
        );
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [isFavorite]);

  const addFavorite = async (newFavorite, id) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt: Cookies.get("jwt"),
        },
        body: JSON.stringify(newFavorite),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setIsFavorite(data.isFavorite);
      }
    } catch (error) {
      console.error("Error adding favorite:", error);
      setError(error.message || "An error occurred while adding the favorite.");
    }
  };

  //   const addProduct = async (newProduct) => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newProduct),
  //       });
  //       const data = await response.json();
  //       setProducts([...products, data]);
  //     } catch (error) {
  //       console.error("Error adding product:", error);
  //       setError(error.message || "An error occurred while adding the product.");
  //     }
  //   };

  //   const deleteProduct = async (productId) => {
  //     try {
  //       await fetch(`https://fakestoreapi.com/products/${productId}`, {
  //         method: "DELETE",
  //       });
  //       setProducts(products.filter((product) => product.id !== productId));
  //     } catch (error) {
  //       console.error("Error deleting product:", error);
  //       setError(error.message || "An error occurred while deleting the product.");
  //     }
  //   };

  return (
    // <ProductsContext.Provider value={{ products, loading, error, addProduct, deleteProduct }}>
    //   {children}
    // </ProductsContext.Provider>
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, isFavorite, loading, error }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

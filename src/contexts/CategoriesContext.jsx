import React, { createContext, useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  //   const [favorites, setFavorites] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchFavorites = async () => {
  //       try {
  //         const response = await fetch("http://localhost:5000/favorites", {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             jwt: Cookies.get("jwt"),
  //           },
  //         });
  //         const data = await response.json();
  //         if (response.ok) {
  //           setFavorites(data);
  //           setLoading(false);
  //         } else {
  //           throw new Error(
  //             data.message || "An error occurred while fetching favorites."
  //           );
  //         }
  //       } catch (error) {
  //         console.error("Error fetching favorites:", error);
  //         setError(
  //           error.message || "An error occurred while fetching favorites."
  //         );
  //         setLoading(false);
  //       }
  //     };
  //     fetchFavorites();
  //   }, []);

  const fetchCategories = async (category) => {
    try {
      const response = await fetch(
        `http://localhost:5000/search?category=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCategories(data.result);
        setLoading(false);
      } else {
        throw new Error(
          data.message || "An error occurred while fetching categories."
        );
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message || "An error occurred while fetching categories.");
      setLoading(false);
    }
  };

  const fetchPriceFilter = async (category, price, gender, age) => {
    try {
      const response = await fetch(
        `http://localhost:5000/search?category=${category}&sort=${price}&gender=${gender}&age=${age}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            jwt: Cookies.get("jwt"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCategories(data.result);
        setLoading(false);
      } else {
        throw new Error(
          data.message || "An error occurred while fetching categories."
        );
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message || "An error occurred while fetching categories.");
      setLoading(false);
    }
  };

  //   const addFavorite = async (newFavorite) => {
  //     try {
  //       const response = await fetch(`http://localhost:5000/product/${newFavorite._id}`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           jwt: Cookies.get("jwt"),
  //         },
  //         body: JSON.stringify(newFavorite),
  //       });
  //       const data = await response.json();
  //       if (response.ok) {
  //         console.log(data.message)
  //       } else {
  //         throw new Error(data.message || "An error occurred while adding the favorite.");
  //       }
  //     } catch (error) {
  //       console.error("Error adding favorite:", error);
  //       setError(error.message || "An error occurred while adding the favorite.");
  //     }
  //   }

  return (
    // <FavoritesContext.Provider value={{ favorites, addFavorite, loading, error }}>
    //   {children}
    // </FavoritesContext.Provider>
    <CategoriesContext.Provider
      value={{ categories, loading, error, fetchCategories, fetchPriceFilter }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

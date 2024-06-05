import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./contexts/UserContext";
import SellerProvider from "./contexts/SellerContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ProductsProvider from "./contexts/ProductsContext";
import FavoritesProvider from "./contexts/FavoritesContext";
import CategoriesProvider from "./contexts/CategoriesContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
      <ProductsProvider>
        <UserProvider>
          <SellerProvider>
            <CategoriesProvider>
              <FavoritesProvider>
                <CartProvider>
                <App />
                </CartProvider>
              </FavoritesProvider>
            </CategoriesProvider>
          </SellerProvider>
        </UserProvider>
      </ProductsProvider>
    </ChakraProvider>
);

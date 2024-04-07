import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./contexts/UserContext.jsx";
import SellerProvider from "./contexts/SellerContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ProductsProvider from "./contexts/ProductsContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <ChakraProvider>
        <ProductsProvider>
          <UserProvider>
            <SellerProvider>
              <App />
            </SellerProvider>
          </UserProvider>
        </ProductsProvider>
      </ChakraProvider>
    </React.StrictMode>
);

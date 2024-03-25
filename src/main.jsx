import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./contexts/UserContext";
import SellerProvider from "./contexts/SellerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <UserProvider>
        <SellerProvider>
          <App />
        </SellerProvider>
      </UserProvider>
    </React.StrictMode>
  </div>
);

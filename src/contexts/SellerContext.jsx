import React, { createContext, useState, useContext } from "react";

export const SellerContext = createContext();

const SellerProvider = ({ children }) => {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <SellerContext.Provider value={{ isSeller, setIsSeller }}>
      {children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;

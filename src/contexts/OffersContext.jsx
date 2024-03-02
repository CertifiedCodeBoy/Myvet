import React, { createContext, useState, useEffect } from "react";
import offersData from "../offers.json"; // adjust the path as needed

export const OffersContext = createContext();

const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setOffers(offersData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setLoading(false);
    }
  }, []);

  return (
    <OffersContext.Provider value={offers}>{children}</OffersContext.Provider>
  );
};

export default OffersProvider;
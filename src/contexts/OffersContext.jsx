import React, { createContext, useState, useEffect } from "react";
import offersData from "../dbs/offers.json";

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

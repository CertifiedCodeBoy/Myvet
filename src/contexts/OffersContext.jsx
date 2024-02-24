import React, { createContext, useState, useEffect } from 'react';

export const OffersContext = createContext();

export const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('src/offers.json');
        const data = await response.json();
        setOffers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching offers:", error);
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  return (
    <OffersContext.Provider value={offers}>
      {children}
    </OffersContext.Provider>
  );
};
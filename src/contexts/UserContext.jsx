import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt") ? true : false
    );
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setUser(JSON.parse(localStorage.getItem("user")));

    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, [isLoggedIn]);


  const updataUser = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };


  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        showToast,
        setShowToast,
        updataUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

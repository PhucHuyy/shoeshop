import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ShoeContext = createContext(null);

export const ShoeContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState([]);
  const [shoeList, setShoeList] = useState([]);

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const contextValue = {
    token,
    setToken,
    removeToken,
  };

  return (
    <ShoeContext.Provider value={contextValue}>{children}</ShoeContext.Provider>
  );
};

export const useShoeContext = () => {
  const context = useContext(ShoeContext);

  if (!context) {
    throw new Error("useShoeContext must be used within a ShoeContextProvider");
  }

  return context;
};

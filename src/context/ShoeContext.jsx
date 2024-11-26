import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ShoeContext = createContext(null);

export const ShoeContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [shoeList, setShoeList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({
        ...cartItems,
        [itemId]: 1,
      });
    } else {
      setCartItems((prev) =>
        setCartItems({
          ...prev,
          [itemId]: prev[itemId] + 1,
        })
      );
    }

    if (token) {
      await axios.post(
        "http://localhost:8080/",
        { itemId },
        { headers: { token } }
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    setToken(token);
  }, []);

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

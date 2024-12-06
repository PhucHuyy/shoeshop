import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ShoeContext = createContext(null);

export const ShoeContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState([]);
  const [shoeList, setShoeList] = useState([]);
  const [checkoutProduct, setCheckoutProduct] = useState([]);

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  // Hàm thiết lập sản phẩm muốn checkout (một hoặc nhiều sản phẩm)
  const startCheckout = (products) => {
    // Nếu `products` là một mảng, lưu toàn bộ vào `checkoutProduct`
    // Nếu là một đối tượng, chuyển thành mảng có một sản phẩm
    if (Array.isArray(products)) {
      setCheckoutProduct(products);
    } else {
      setCheckoutProduct([products]);
    }
  };

  const contextValue = {
    token,
    setToken,
    removeToken,
    startCheckout,
    checkoutProduct,
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

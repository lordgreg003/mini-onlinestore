import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = "10";
  const [search, setsearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cardData = structuredClone(cartItems);

    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    setCartItems(cardData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        const quantity = cartItems[items][item];

        if (typeof quantity === "number" && quantity > 0) {
          totalCount += quantity;
        }
      }
    }

    return totalCount;
  };

  const updateQunatity = async (itemId, size, quantity) => {
    let cardData = structuredClone(cartItems);
    cardData[itemId][size] = quantity;
    setCartItems(cardData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo?.price * cartItems[items][item];
          }
        } catch (error) {
          alert.error("Error calculating cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQunatity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

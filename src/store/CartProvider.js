import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updatedItem] = useState([]);
  //let items = [];

  const addItemToCartHandler = (item) => {
    updatedItem([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "hi",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

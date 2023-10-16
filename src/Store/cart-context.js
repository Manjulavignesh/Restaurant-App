import React from "react";
const CartContext = React.createContext({
  items: [],
  totalamount: 0,
  addItem: () => {},
  removeItem: () => {},
});
export default CartContext;

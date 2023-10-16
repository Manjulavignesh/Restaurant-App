import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = { items: [], totalamount: 0 };
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalamount + (action.item.price * action.item.amount);
    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemtoCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalamount:cartState.totalamount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

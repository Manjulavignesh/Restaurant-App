import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = { items: [], totalamount: 0 };
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedTotalAmount =
      state.totalamount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalamount: updatedTotalAmount,
    };
  }
  if(action.type=="REMOVE")
  {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
  const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      state.totalamount -existingItem.price;
    
    let updatedItems;
    if (existingItem.amount==1) {
      updatedItems=state.items.filter(item=>item.id !== action.id)
    } else {
      const updatedItem={...existingItem,amount:existingItem.amount-1}
      updatedItems =[...state.items];
      updatedItems[existingItemIndex]=updatedItem;
    }

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
    totalamount: cartState.totalamount,
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

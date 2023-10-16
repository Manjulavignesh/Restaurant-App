import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemtoCartHandler = () => {};
  const removeItemFromCartHandler = () => {};
  const cartContext = {
    items: [],
    totalamount: 0,
    removeItem: addItemtoCartHandler,
    addItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

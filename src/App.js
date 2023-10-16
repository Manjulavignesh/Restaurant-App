import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const cartShownHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShown={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const noOfCartItems=cartCtx.items.reduce(((curNumber,item)=>{return curNumber+ item.amount}),0)
  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {console.log(noOfCartItems)}
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;

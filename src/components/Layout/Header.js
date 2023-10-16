import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://wallpapercave.com/wp/wp3724276.jpg"
          alt="image with different foods"
        />
      </div>
    </Fragment>
  );
};
export default Header;

import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighed, setBtnIsHighlighed] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  // Kart görünümü
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // animasyon ekleme
  const btnClasses = `${styles.button} ${btnIsHighlighed ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighed(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighed(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}> {numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;

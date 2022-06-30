import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleCartButton() {
    setIsInCart((isInCart) => !isInCart);

  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartButton} className="add">{isInCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;

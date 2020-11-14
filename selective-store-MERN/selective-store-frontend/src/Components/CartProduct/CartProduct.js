import React, { forwardRef } from "react";
import { useStateValue } from "../../StateProvider";
import "./CartProduct.css";

const CartProduct = forwardRef(({ id, image, title, price, ratings }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div ref={ref} className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array(ratings)
            .fill()
            .map((i) => (
              <p key={id}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
});
export default CartProduct;

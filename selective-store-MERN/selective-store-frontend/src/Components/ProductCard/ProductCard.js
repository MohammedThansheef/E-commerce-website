import React from "react";
import { useStateValue } from "../../StateProvider";
import "./ProductCard.css";

function ProductCard({ id, title, ratings, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      add: {
        id,
        title,
        ratings,
        price,
        image,
      },
    });
  };

  return (
    <div className="productCard">
      <div className="productCard__info">
        <h4>{title}</h4>
        <p className="productCard__price"> ₹ {price}</p>
        <p className="productCard__rating">
          {Array(ratings)
            .fill()
            .map((i) => (
              <span key={id}>⭐</span>
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <div className="productCard__button">
        <button type="button" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

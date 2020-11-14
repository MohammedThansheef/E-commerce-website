import React from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";
import Subtotal from "../../Components/Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import "./Cart.css";
import FlipMove from "react-flip-move";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Cart is empty</h2>
            <p>
              You have no item in your cart. To buy one or more items, click
              "Add to Cart" in the Product section.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="cart__title">Your Shopping Cart</h2>
            {basket.map((item) => (
              <FlipMove>
                <CartProduct
                  key={item._id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  ratings={item.ratings}
                />
              </FlipMove>
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="cart__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Cart;

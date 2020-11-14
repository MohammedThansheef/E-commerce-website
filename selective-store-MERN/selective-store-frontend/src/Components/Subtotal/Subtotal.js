import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Subtotal.css";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  const productPrice = basket.map((product) => product.price);

  const total = productPrice.reduce(
    (total, currentValue) => total + currentValue
  );

  return (
    <div className="subtotal">
      <h3>
        Subtotal ({basket?.length} items) : ₹{total}
      </h3>
      <span className="subtotal__gift">
        <input type="checkbox" />
        This order contains a Gift
      </span>
      <button onClick={(e) => history.push("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

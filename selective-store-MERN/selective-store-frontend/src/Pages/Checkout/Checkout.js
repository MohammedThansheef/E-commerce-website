import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const [buyerName, setBuyerName] = useState(null);
  const [address, setAddress] = useState(null);

  const [name, setName] = useState("");
  const [residenceAddress, setResidenceAddress] = useState("");
  const [areaAddress, setAreaAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateAddress, setStateAddress] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuyerName(name);
    setAddress(
      ` ${residenceAddress},  ${areaAddress},  ${city},  ${stateAddress}`
    );
    setName("");
    setResidenceAddress("");
    setAreaAddress("");
    setCity("");
    setStateAddress("");
  };

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <div className="checkout">
      <h1>Checkout {basket?.length} items</h1>
      {address && buyerName ? (
        <div className="checkout__placeOrder">
          <h3>{buyerName}</h3>
          <h5>{address}</h5>
          <button
            onClick={() => {
              history.push("/orderSuccess");
              emptyCart();
            }}
          >
            Place Order
          </button>
        </div>
      ) : null}
      <h3>Add a Delivery Address</h3>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Flat, House no., Building, Apartment</label>
        <input
          type="text"
          value={residenceAddress}
          onChange={(e) => setResidenceAddress(e.target.value)}
        />
        <label>Area, Colony, Street, Sector, Village</label>
        <input
          type="text"
          value={areaAddress}
          onChange={(e) => setAreaAddress(e.target.value)}
        />
        <labek>Town/City</labek>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select
          value={stateAddress}
          onChange={(e) => setStateAddress(e.target.value)}
        >
          <option selected hidden>
            Select State
          </option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Tamil Nadu</option>
          <option>ANDHRA PRADESH</option>
          <option>Goa</option>
        </select>
        <button type="submit">Add Address</button>
      </form>
    </div>
  );
}

export default Checkout;

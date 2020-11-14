import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left"> Selective Store</div>
      </Link>

      <div className="header__search">
        <input type="text" placeholder="Search" />
        <SearchIcon className="searchIcon" />
      </div>

      <Link to="/cart">
        <div className="header__right">
          <ShoppingCartOutlinedIcon fontSize="large" style={{ padding: "0" }} />
          <h3>{basket?.length}</h3>
        </div>
      </Link>
    </header>
  );
}

export default Header;

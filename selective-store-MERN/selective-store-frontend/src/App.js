import "./App.css";
import Header from "./Components/Header/Header";
import Product from "./Pages/Product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import OrderSuccess from "./Components/OrderSuccess/OrderSuccess";
import axios from "./axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get("/products/sync").then((response) => {
      setProducts(response.data);
    });
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Product products={products} />
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orderSuccess" component={OrderSuccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

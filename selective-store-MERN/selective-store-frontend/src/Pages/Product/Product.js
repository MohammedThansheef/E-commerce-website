import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Product.css";

const Product = ({ products }) => {
  return (
    <div className="product">
      <div className="product__section ">
        <h2>Top Deals on Clothing</h2>

        <div className="product__row">
          {products
            .filter((item) => item.category === "clothing")
            .map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                title={item.title}
                ratings={item.ratings}
                price={item.price}
                image={item.image}
              />
            ))}
        </div>
      </div>

      <div className="product__section ">
        <h2>Top Deals on Mobiles</h2>

        <div className="product__row">
          {products
            .filter((item) => item.category === "mobiles")
            .map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                title={item.title}
                ratings={item.ratings}
                price={item.price}
                image={item.image}
              />
            ))}
        </div>
      </div>

      <div className="product__section ">
        <h2>Top Deals on Watches</h2>
        <div className="product__row">
          {products
            .filter((item) => item.category === "watches")
            .map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                title={item.title}
                ratings={item.ratings}
                price={item.price}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

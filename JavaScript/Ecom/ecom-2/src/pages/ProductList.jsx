import React from "react";
import { Container } from "react-bootstrap";
import Announce from "../components/Announce";
import SocialMedia from "../components/FooterContent/SocialMedia";
import Nave from "../components/Nave";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { color, order, size } from "../data";

const ProductList = () => {
  return (
    <Container fluid className="product-list">
      <Announce />
      <Nave />
      <h1>Dresses</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>

          <select name="color" id="1">
            {color.map((color) => (
              <option key={color.id} value="">
                {color.color}
              </option>
            ))}
          </select>

          <select name="size" id="2">
            {size.map((size) => (
              <option key={size.id} value="">
                {size.size}
              </option>
            ))}
          </select>
        </div>

        <div className="filter">
          <span className="filter-text">Sort Products:</span>

          <select name="order" id="3">
            {order.map((order) => (
              <option key={order.id} value="">
                {order.type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Products />
      <Newsletter />
      <SocialMedia />
    </Container>
  );
};

export default ProductList;

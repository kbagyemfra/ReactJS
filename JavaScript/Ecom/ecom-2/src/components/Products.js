import React from "react";
import { Container } from "react-bootstrap";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <Container fluid className="products">
      {popularProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;

import React from "react";
import { Container } from "react-bootstrap";

const CategoryItem = ({ item }) => {
  return (
    <Container className="category-item">
      <img src={item.img} alt="cat-img" />
      <div className="category-info">
        <h1>{item.title}</h1>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </Container>
  );
};

export default CategoryItem;

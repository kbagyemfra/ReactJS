import React from "react";
import { Container } from "react-bootstrap";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container fluid className="categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

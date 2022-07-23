import React from "react";
import { Container } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ product }) => {
  return (
    <Container className="product">
      <div className="circle"></div>
      <img src={product.img} alt="product-img" />
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </Container>
  );
};

export default Product;

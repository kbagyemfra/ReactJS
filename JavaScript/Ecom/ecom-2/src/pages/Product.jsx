import React from "react";
import { Container } from "react-bootstrap";
import Announce from "../components/Announce";
import SocialMedia from "../components/FooterContent/SocialMedia";
import Nave from "../components/Nave";
import Newsletter from "../components/Newsletter";
import { size } from "../data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
  return (
    <Container fluid className="product-page-container">
      <Announce />
      <Nave />

      <div className="wrapper">
        <div className="img-contain">
          <img src="img/fashion3.jpeg" alt="full-stack" />
        </div>
        <div className="info-contain">
          <h1 className="title">Simple Show Set Up</h1>
          <p className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            architecto consectetur ea voluptates maxime quidem repellat,
            excepturi, molestiae quaerat suscipit expedita assumenda mollitia
            similique corrupti necessitatibus possimus. Voluptates, nesciunt
            qui!
          </p>
          <span>$ 20</span>
          <div className="filter-container">
            <div className="filter">
              <span className="pick-color">Color</span>
              <div className="color" style={{ backgroundColor: "black" }}></div>
              <div className="color" style={{ backgroundColor: "green" }}></div>
              <div className="color" style={{ backgroundColor: "red" }}></div>
            </div>
            <div className="filter">
              <span className="size">Size</span>
              <select className="size-box" name="size" id="1">
                {size.map((size) => (
                  <option key={size.id} value="">
                    {size.size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Add Container */}
          <div className="add-container">
            <div className="amount-container">
              <RemoveIcon className="point" />
              <span className="amount">1</span>
              <AddIcon className="point" />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>

      <Newsletter />
      <SocialMedia />
    </Container>
  );
};

export default Product;

import React from "react";
import { Container, Col, Form, Nav, Navbar, Button } from "react-bootstrap";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { styled } from "@mui/material/styles";

const Nave = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container fluid className="nave">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* <Navbar.Brand className="center" href="#">
            Flare
          </Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          {/* <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 right"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}

          <Col className="center">
            <a href="#">Flare Inc.</a>{" "}
          </Col>
          <Col className="right">
            <Nav.Link className="right-text" href="#action1">
              Register
            </Nav.Link>
            <Nav.Link className="right-text" href="#action2">
              Sign In
            </Nav.Link>

            <span>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartRoundedIcon />
                </StyledBadge>
              </IconButton>
            </span>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default Nave;

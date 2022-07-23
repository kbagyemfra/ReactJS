import React from "react";
import { Container } from "react-bootstrap";
import CopyRight from "../components/FooterContent/CopyRight";
import SocialMedia from "../components/FooterContent/SocialMedia";
import Nave from "../components/Nave";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Nave />
      <Container fluid className="register-container">
        <h1>CREATE AN ACCOUNT</h1>
        <RegisterForm />
      </Container>
      <SocialMedia />
      <CopyRight />
    </>
  );
};

export default Register;

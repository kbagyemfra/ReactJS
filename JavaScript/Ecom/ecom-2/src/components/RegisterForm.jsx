import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const RegisterForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="wrapper">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Last Name */}
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Username */}
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* Email */}
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* Password */}
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please repeat password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Create</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;

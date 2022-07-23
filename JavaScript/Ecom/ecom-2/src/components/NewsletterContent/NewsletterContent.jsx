import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const NewsletterContent = () => {
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
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">First</InputGroup.Text>
              <Form.Control type="text" placeholder="First name" />
            </InputGroup>

            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            {/* <Form.Control.Feedback type="invalid">
              First Name Required
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Last</InputGroup.Text>
              <Form.Control required type="text" placeholder="Last name" />
            </InputGroup>

            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            {/* <Form.Control.Feedback type="invalid">
              Last Name Required
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">Email</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="example@gmail.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please use a valid Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {validated ? (
          <Button type="submit" className="btn btn-warning ">
            Submit form
          </Button>
        ) : (
          <Button type="submit" className="btn btn-primary">
            Subscribe
          </Button>
        )}
      </Form>
    </>
  );
};

export default NewsletterContent;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
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
    <div className="container">
      <h1>Sign In</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-muted">
          Forget Password? <a href="#">Reset Here</a>
        </Form.Text>
        <Form.Text className="text-muted">
          New User? <a href="#">Make Registration</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default LoginPage;

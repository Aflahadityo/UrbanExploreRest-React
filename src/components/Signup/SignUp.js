import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "Signup";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validasi input
    if (password !== confirmPassword) {
      setError("Password dan confirm password tidak sesuai");
      return;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      setError("Email tidak valid");
      return;
    }
    // Kirim data ke backend
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        // Redirect ke halaman lain atau tampilkan pesan sukses
      } else {
        // Tampilkan pesan error dari backend
        setError(data.message);
      }
    } catch (err) {
      // Tampilkan pesan error dari network
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      <p>
        Existing User? <Link to="/login">Login Now!</Link>
      </p>
    </div>
  );
};

export default Signup;
import React from "react";
import Textinput from "./Textinput";
import Button from "./Button";

import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "./Form";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <Textinput
        type="text"
        placeholder="Your Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textinput
        type="text"
        placeholder="Your Password"
        icon="alternate_email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>
      {error && <p className="error">Faild to login</p>}
      <div class="info">
        Don't have an account? <Link to="/singup">Signup</Link> instead.
      </div>
    </Form>
  );
}

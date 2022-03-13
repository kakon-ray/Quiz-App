import React from "react";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";
import LoginForm from "../LoginForm";

export default function login() {
  return (
    <div>
      <h1 className={classes.title}>Create an account</h1>
      <div class="column">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
}

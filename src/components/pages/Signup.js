import React from "react";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";
import SingupForm from "../SingupForm";

export default function Signup() {
  return (
    <div>
      <h1 className={classes.title}>Create an account</h1>
      <div class="column">
        <Illustration />
        <SingupForm />
      </div>
    </div>
  );
}

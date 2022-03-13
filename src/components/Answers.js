import React from "react";
import Checkbox from "./Checkbox";
import classes from "../styles/Answers.module.css";
// import checkBox from "../styles/checkBox.module.css";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Quiz One" />
    </div>
  );
}

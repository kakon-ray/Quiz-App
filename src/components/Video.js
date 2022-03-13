import React from "react";
import classes from "../styles/Video.module.css";
import templete from "../assets/images/3.jpg";

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Question</p>
        <p>Total Pints {noq * 5}</p>
      </div>
    </div>
  );
}

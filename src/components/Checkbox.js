import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <span className={`${className} `}>
      <input type="checkbox" {...rest} />
      <span className="padding-left">{text}</span>
    </span>
  );
}

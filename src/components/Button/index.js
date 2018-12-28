import React from "react";

export const Button = props => {
  return (
    <div>
      <button onClick={props.action}>Click me</button>
    </div>
  );
};

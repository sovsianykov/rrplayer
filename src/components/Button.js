import React from "react";

function MyButton({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
export default MyButton;

import React from "react";
import classNames from "classnames";
import Button from "react-bootstrap/Button";

function MyButton({ onClick, children }) {
    return (
        <button
            onClick={onClick}

        >
            {children}
        </button>
    );
}
export default MyButton;

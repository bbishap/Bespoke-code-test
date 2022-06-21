import React from "react";
import "./button.scss";

interface Props {
  onClick: () => void;
  children: string;
  type: "primary1" | "secondary" | "primary2";
  disabled?: boolean;
  className?: string;
}

const Button = (props: Props) => {
  const { type } = props;
  return (
    <button
      className={`button ${type === "secondary" ? "buttonSecondary" : ""} ${
        props.className
      }`}
      onClick={props.onClick}
      style={{
        backgroundColor:
          type === "primary1"
            ? "#23CFFD"
            : type === "primary2"
            ? "#24DD85"
            : "#ffffff",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;

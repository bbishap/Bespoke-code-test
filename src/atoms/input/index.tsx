import React, { KeyboardEventHandler } from "react";
import "./input.scss";
interface Props {
  type: "number" | "text";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input = (props: Props) => {
  const blockInvalid = (e: React.KeyboardEvent<HTMLElement>) => {
    if (props.type === "number") {
      ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    }
  };

  return (
    <input
      type={props.type}
      className="input"
      onKeyDown={blockInvalid}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;

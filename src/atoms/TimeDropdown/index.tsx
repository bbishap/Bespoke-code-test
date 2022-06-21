import React from "react";
import "./timeDropdown.scss";
interface Props {
  options: string[];
  className?: string;
  handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const TimeDropdown = (props: Props) => {
  return (
    <div>
      <select
        value={props.value}
        className={`wrapper ${props.className}`}
        onChange={props.handleSelect}
      >
        {props.options.map((option: string) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TimeDropdown;

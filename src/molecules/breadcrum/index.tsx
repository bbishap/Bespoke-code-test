import "./breadcrum.scss";
import IonIcon from "@reacticons/ionicons";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  breadcrum: ReactNode[];
}

const Breadcrum = (props: Props) => {
  return (
    <div className="breadcrum">
      <div className="breadcrum_left">
        <div className="breadcrum_icon">
          <img src="images/menu.png" alt="menu" />
        </div>
        <div className="breadcrum_title">{props.title}</div>
      </div>
      <ul className="breadcrum_list">
        <li className="breadcrum_item home">
          <IonIcon name="apps" />
        </li>
        {props.breadcrum.map((item: ReactNode, idx: number) => (
          <li className="breadcrum_item" key={idx * 3}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrum;

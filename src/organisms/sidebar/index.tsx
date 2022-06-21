import React from "react";
import Menu from "./menu";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_header">
        <div className="logo">
          <img src="images/logo.png" alt="Chiron" />
        </div>
      </div>
      <div className="sidebar_content">
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;

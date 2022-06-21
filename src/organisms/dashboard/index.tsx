import React, { ReactNode } from "react";
import Search from "../../atoms/search";
import "./dashboard.scss";
import Breadcrum from "../../molecules/breadcrum";

interface Props {
  children?: ReactNode;
  breadcrum: string[];
  title: string;
}

const Dashboard = (props: Props) => {
  return (
    <main className="dashboard_content">
      <Search />
      <Breadcrum {...props} />
      {props.children}
    </main>
  );
};

export default Dashboard;

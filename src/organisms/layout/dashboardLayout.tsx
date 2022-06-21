import { ReactNode } from "react";
import Dashboard from "../dashboard";
import Sidebar from "../sidebar";
import "./dashboardLayout.scss";

interface Props {
  title: string;
  breadcrum: string[];
  children?: ReactNode;
}

const DashboardLayout = (props: Props) => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Dashboard {...props} />
    </div>
  );
};

export default DashboardLayout;

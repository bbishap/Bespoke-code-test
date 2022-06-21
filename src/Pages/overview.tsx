import DashboardLayout from "../organisms/layout/dashboardLayout";

const Overview = () => {
  const breadcrum = ["Overview"];
  return (
    <DashboardLayout title="Overview" breadcrum={breadcrum}></DashboardLayout>
  );
};

export default Overview;

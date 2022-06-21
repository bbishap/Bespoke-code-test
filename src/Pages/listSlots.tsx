import DashboardLayout from "../organisms/layout/dashboardLayout";
import SearchFilter from "../molecules/searchFilter";
import Table from "../atoms/table";
import { useContext } from "react";
import { MyContext, Value } from "../App";

const ListSlots = () => {
  const breadcrum = ["Appointments", "List Slots"];
  const context = useContext(MyContext) as Value;

  return (
    <DashboardLayout title="List Slots" breadcrum={breadcrum}>
      <SearchFilter />
      <Table data={context.dataObject} />
    </DashboardLayout>
  );
};

export default ListSlots;

import DashboardLayout from "../organisms/layout/dashboardLayout";
import Tab from "../molecules/tabs";
import CreateBulkSlot from "../organisms/CreateBulkSlot";

const CreateSlots = () => {
  const breadcrum = ["Appointments", "Create Slots"];
  const tabsList = [
    {
      id: "1",
      label: "Create Bulk 15 Min. Slots",
      component: <CreateBulkSlot />,
    },
    {
      id: "2",
      label: "Create One Slot",
      component: <div>create single Slot</div>,
    },
  ];
  return (
    <DashboardLayout title="create slots" breadcrum={breadcrum}>
      <Tab tabsList={tabsList} />
    </DashboardLayout>
  );
};

export default CreateSlots;

import { ReactNode, SetStateAction, useState } from "react";
import "./tabs.scss";

interface Props {
  tabsList: Item[];
}

interface Item {
  id: string;
  label: string;
  component: ReactNode;
}

const Tab = (props: Props) => {
  const [currentTabId, setCurrentTabId] = useState("1");

  const handleRenderTab = (id: SetStateAction<string>) => {
    setCurrentTabId(id);
  };

  const getComponentById = () => {
    const currentTab = props.tabsList.filter(
      (item: Item) => item.id === currentTabId
    );
    return currentTab[0].component;
  };

  return (
    <div className="tabs">
      <div className="tabs_header">
        {props.tabsList.map((item: Item) => (
          <div
            className={`tabs_item ${item.id === currentTabId ? "active" : ""}`}
            onClick={() => handleRenderTab(item.id)}
            key={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tabs_body">{getComponentById()}</div>
    </div>
  );
};

export default Tab;

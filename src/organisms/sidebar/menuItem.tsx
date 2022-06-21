import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./submenu";

interface Props {
  menuItem: Menu;
  key: number;
}

interface Menu {
  id: number;
  title: string;
  icon: ReactElement;
  subMenu: boolean;
  url?: string;
  subMenus?: SubMenus[];
}

interface SubMenus {
  id: number;
  title: string;
  url: string;
}

const MenuItem = (props: Props) => {
  const { menuItem } = props;

  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMenuSelection = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <React.Fragment>
      <li onClick={handleMenuSelection}>
        {menuItem.icon}
        {menuItem.subMenu ? (
          <span>{menuItem.title}</span>
        ) : (
          <NavLink to={menuItem.url ? menuItem.url : ""}>
            {menuItem.title}
          </NavLink>
        )}
      </li>
      {menuItem.subMenu ? (
        <ul className={`submenu ${showSubMenu ? "show" : ""}`}>
          {props.menuItem?.subMenus?.length
            ? props.menuItem.subMenus.map((submenu: SubMenus) => (
                <SubMenu
                  handleMenuSelection={handleMenuSelection}
                  showSubMenu={showSubMenu}
                  submenu={submenu}
                  key={submenu.id}
                />
              ))
            : null}
        </ul>
      ) : null}
    </React.Fragment>
  );
};

export default MenuItem;

import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  submenu: Submenu;
  handleMenuSelection: () => void;
  showSubMenu?: boolean;
}

interface Submenu {
  url: string;
  title: string;
  id: number;
}

const SubMenu = (props: Props) => {
  const { submenu, handleMenuSelection } = props;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === submenu.url) {
      handleMenuSelection();
    }
  }, []);

  return (
    <li key={submenu.id}>
      <NavLink to={submenu.url}>{submenu.title}</NavLink>
    </li>
  );
};

export default SubMenu;

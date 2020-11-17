import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { MenuContainer } from "./index.style";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <AddCircleIcon color="action" fontSize="large" />
    </MenuContainer>
  );
};

export default Menu;

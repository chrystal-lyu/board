import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { Menu as MuiMenu, MenuItem, IconButton } from "@material-ui/core";
import { MenuContainer } from "./index.style";

const options = ["Text", "Image", "Container"];

const ITEM_HEIGHT = 48;

const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuContainer>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddIcon color="action" fontSize="large" />
      </IconButton>

      <MuiMenu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </MuiMenu>
    </MenuContainer>
  );
};

export default Menu;

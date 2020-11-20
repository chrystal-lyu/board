import React from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { OwnProps } from "./types";
import { Menu as MuiMenu, MenuItem, IconButton } from "@material-ui/core";
import { MenuContainer } from "./index.style";
import { addContainer } from "../../store/actions";
// import { RootState } from "../../store/reducers/rootReducer";

const options = ["Text", "Image", "Container"];

const ITEM_HEIGHT = 48;

const Menu: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();
  // const { containerId, componentId } = useSelector(
  //   (state: RootState) => state.edit
  // );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLElement>,
    type: string
  ) => {
    if (props.title === "Container") {
      console.log("should add", type, "to container");
    } else {
      console.log("should add", type, "to page");
      dispatch(addContainer(type))
    }
    setAnchorEl(null);
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
        <AddIcon color="primary" fontSize="large" />
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
            disabled={props.title === "Container" && option === "Container"}
            onClick={(event) => handleMenuItemClick(event, option)}
          >
            {option}
          </MenuItem>
        ))}
      </MuiMenu>
    </MenuContainer>
  );
};

export default Menu;

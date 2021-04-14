import React from "react";
import { StyledMenu } from "../CustomComponents/StyledComponents";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

const CustomMenu = ({ anchorEl, handleClose, logout }) => {
  const history = useHistory();
  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={() => history.push("/profile?activeOption=0")}>
        <ListItemText primary="My Account" />
      </MenuItem>

      <MenuItem onClick={() => history.push("/profile?activeOption=1")}>
        <ListItemText primary="Delivery Address" />
      </MenuItem>
      <MenuItem onClick={() => history.push("/profile?activeOption=2")}>
        <ListItemText primary="Orders" />
      </MenuItem>
      <MenuItem onClick={() => history.push("/profile?activeOption=3")}>
        <ListItemText primary="Reservations" />
      </MenuItem>
      <MenuItem onClick={() => history.push("/profile?activeOption=4")}>
        <ListItemText primary="Payment Method" />
      </MenuItem>
      <MenuItem onClick={() => history.push("/profile?activeOption=5")}>
        <ListItemText primary="Contact Method" />
      </MenuItem>
      <MenuItem onClick={logout}>
        <ListItemText primary="Logout" />
      </MenuItem>
    </StyledMenu>
  );
};

export default CustomMenu;

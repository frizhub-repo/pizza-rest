import React from "react";
import AuthModal from "../Auth/AuthModal";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import CustomMenu from "./CustomMenu";
import login from "../../Assets/images/login.png";
import "./NavbarStyles.css";
import { useLocation } from "react-router-dom";
import styles from "./styles";
import shopingBag from "Assets/images/shopingBag.png";
import { Badge, Menu, MenuItem } from "@material-ui/core";
import { useOrderContext } from "Context/OrderContext";
const useStyles = makeStyles(styles);

function Navbar({ showLinks = true }) {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  let { token, restaurant, customerData } = useRestaurantContext();
  const { pendingOrders } = useOrderContext();

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClickListItem = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleMenuItemClick = (orderId) => {
    setAnchorEl1(null);
    history.push(`/ordersreceived/${orderId}`);
  };

  return (
    <header className={`text-gray-700 body-font ${classes.containerClass}`}>
      <div
        className={`flex w-full  justify-content-between px-44 py-4 headerStyles ${classes.shadow}`}
      >
        <Link to="/">
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
            style={{ width: "80", height: "50px" }}
          />
        </Link>
        <div className={classes.divStyles}>
          {!token ? (
            <button onClick={handleClickOpen} className={classes.buttonStyles}>
              <img src={login} alt="" className={classes.imgStyle} />
              Sign In/Sign Up
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: "100%",
              }}
              onClick={handleClick}
            >
              <AccountCircleIcon
                fontSize="large"
                style={{ cursor: "pointer" }}
              />
              {customerData?.firstName} {customerData?.lastName}
            </div>
          )}
          <CustomMenu
            handleClose={handleCloseMenu}
            anchorEl={anchorEl}
            logout={logout}
          />
        </div>
      </div>
      {showLinks && (
        <div className=" flex w-full bg-green-500 flex-wrap py-3 px-3 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center activeLink navbarStyles">
            <Link
              to="/"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900 "
            >
              <p
                className={
                  location.pathname === "/" ? classes.selected : classes.hover
                }
              >
                HOME
              </p>
            </Link>
            <Link
              to="/menu/1"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900 "
            >
              <p
                className={
                  location.pathname === "/menu/1"
                    ? classes.selected
                    : classes.hover
                }
              >
                MENU
              </p>
            </Link>
            <Link
              to="/tableRes"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900 yes"
            >
              <p
                className={
                  location.pathname === "/tableRes"
                    ? classes.selected
                    : classes.hover
                }
              >
                TABLE RESERVATION
              </p>
            </Link>
            <Link
              to="/delivery"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              <p
                className={
                  location.pathname === "/delivery"
                    ? classes.selected
                    : classes.hover
                }
              >
                DELIVERY
              </p>
            </Link>
            <Link
              to="/contact"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              <p
                className={
                  location.pathname === "/contact"
                    ? classes.selected
                    : classes.hover
                }
              >
                CONTACT
              </p>
            </Link>
          </nav>
        </div>
      )}
      {pendingOrders?.length > 0 && (
        <>
          <Badge
            className={classes.trackOrderRoot}
            badgeContent={pendingOrders?.length}
            color="secondary"
            onClick={handleClickListItem}
          >
            <img src={shopingBag} className={classes.shopingBag} />
            <span>My Orders</span>
          </Badge>
          <Menu
            style={{ border: "1px solid #d3d4d5" }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="lock-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            {pendingOrders.map((order, index) => (
              <MenuItem
                key={order?._id}
                onClick={() => handleMenuItemClick(order?._id)}
                className={classes.menuItemRoot}
              >
                <div>
                  <span className={classes.orderId}>{order?.orderId}</span>{" "}
                  &nbsp;{" "}
                  <span
                    className={`${classes.statusRoot} ${
                      order?.status === "pending"
                        ? classes.pending
                        : order?.status === "accepted"
                        ? classes.accepted
                        : order?.status === "assigned" ||
                          order?.status === "pickedUp"
                        ? classes.assigned
                        : classes.requested
                    }`}
                  >
                    {order?.status}
                  </span>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
      <AuthModal open={open} handleClose={handleClose} />
    </header>
  );
}

export default Navbar;

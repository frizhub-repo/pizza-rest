import React from "react";
import AuthModal from "../Auth/AuthModal";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import CustomMenu from "./CustomMenu";
import login from "../../Assets/images/login.png";
import "./NavbarStyles.css";
import { useLocation } from "react-router-dom";
import styles from "./styles";
const useStyles = makeStyles(styles);

function Navbar({ showLinks = true }) {
  const location = useLocation();
  const classes = useStyles();
  let {
    token,
    restaurant,
    customerData: customer,
  } = useRestaurantContext();
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

  return (
    <header className="text-gray-700 body-font ">
      <div
        className={`flex w-full  justify-content-between px-44 py-4 ${classes.shadow}`}
      >
        <Link to="/">
          <img
            style={{ height: "50px" }}
            src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
            className="object-cover"
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
              <span>
                {customer?.firstName} {customer?.lastName}
              </span>
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center activeLink">
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
      <AuthModal open={open} handleClose={handleClose} />
    </header>
  );
}

export default Navbar;

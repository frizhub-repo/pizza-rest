import React from "react";
import AuthModal from "../Auth/AuthModal";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import CustomMenu from "./CustomMenu";
import login from "../../Assets/images/login.png";
import "./NavbarStyles.css";

const useStyles = makeStyles({
  divStyles: {
    color: "#62BA81",
    border: "2px solid #62BA81",
    borderRadius: "13px",
    width: "170px",
    height: "45px",
    marginLeft: "200px",
    outline: "none",
  },
  divStylesTwo: {
    color: "#62BA81",
    border: "2px solid #62BA81",
    borderRadius: "13px",
    width: "170px",
    height: "45px",
    marginLeft: "-65px",
    outline: "none",
    float: "left",
  },
  imgStyle: {
    width: "30px",
    height: "30px",
    overflow: "hidden",
    position: "relative",
    right: "40px",
    top: "24px",
  },
  buttonStyles: {
    position: "relative",
    bottom: "20px",
    left: "20px",
  },
});

function Navbar({ showLinks = true }) {
  const classes = useStyles();
  let { token, setToken, restaurant } = useRestaurantContext();
  console.log({ token });
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
          <div className={classes.divStylesTwo}>
            <p style={{ marginTop: "8px" }}>Logo</p>
          </div>
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
              }}
            >
              <AccountCircleIcon
                onClick={handleClick}
                fontSize="large"
                style={{ cursor: "pointer" }}
              />
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
              HOME
            </Link>
            <Link
              to="/menu/1"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900 "
            >
              MENU
            </Link>
            <Link
              to="/tableRes"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900 yes"
            >
              TABLE RESERVATION
            </Link>
            <Link
              to="/delivery"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              DELIVERY
            </Link>
            <Link
              to="/contact"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
      <AuthModal open={open} handleClose={handleClose} />
    </header>
  );
}

export default Navbar;

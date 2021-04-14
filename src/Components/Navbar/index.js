import React from "react";
import logo from "../../images/logo.png";
import AuthModal from "../Auth/AuthModal";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import CustomMenu from "./CustomMenu";

const useStyles = makeStyles({
  shadow: {
    boxShadow: "0 8px 6px -6px #808080",
  },
});

function Navbar({ showLinks = true }) {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);
  let { token, setToken, restaurant } = useRestaurantContext();
  console.log({ token });
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  // React.useEffect(() => {
  //     setToken(localStorage.getItem("token"));
  // });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
        <div className="w-25">
          <Link to="/">
            <img
              style={{ height: "50px" }}
              src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="flex-grow-1 d-flex justify-content-end">
          {!token ? (
            <button
              className="  bg-yellow-500 text-yellow-500 bg-opacity-50 border-2 border-yellow-500	 py-1 px-3   text-xs font-weight-bold"
              onClick={handleClickOpen}
            >
              Login/Signup
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/menu/1"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              Menu
            </Link>
            <Link
              to="/tableRes"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              Table reservation
            </Link>
            <Link
              to="/delivery"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              Order
            </Link>
            <Link
              to="/contact"
              className="mr-5 font-weight-bolder text-white hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      <AuthModal open={open} handleClose={handleClose} />
    </header>
  );
}

export default Navbar;

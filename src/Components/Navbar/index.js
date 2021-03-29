import React from "react";
import logo from "../../images/logo.png";
import AuthModal from "../Auth/AuthModal";
import { useRestaurantConetxt } from "../../Context/restaurantContext";
import { Link } from "react-router-dom";

function Navbar() {
    const [modalShow, setModalShow] = React.useState(false);
    let { token, setToken, restaurant } = useRestaurantConetxt();
    const logout = () => {
        window.localStorage.removeItem("token");
        window.location.reload();
    };
    React.useEffect(() => {
        setToken(localStorage.getItem("token"));
    });

    return (
        <header className="text-gray-700 body-font ">
            <div className=" flex w-full  justify-content-between px-44 py-4  ">
                <div className="w-25">
                    <img
                        style={{ height: "50px" }}
                        src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
                        className="object-cover"
                    />
                </div>
                <div className="flex-grow-1 d-flex justify-content-end">
                    {!token ? (
                        <button
                            className="  bg-yellow-500 text-yellow-500 bg-opacity-50 border-2 border-yellow-500	 py-1 px-3   text-xs font-weight-bold"
                            onClick={() => setModalShow(true)}
                        >
                            Login/Signup
                        </button>
                    ) : (
                        <button
                            className="  bg-yellow-500 text-yellow-500 bg-opacity-50 border-2 border-yellow-500	 py-1 px-3   text-xs font-weight-bold"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
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
            <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
        </header>
    );
}

export default Navbar;

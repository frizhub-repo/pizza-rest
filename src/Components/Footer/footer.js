import React from "react";
import { useStyles } from "./footerStyles";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.divStyles}>
      <footer
        className={classes.footerStyles}
        className="text-white bg-gray-500 px-24 body-font divide-2 divide-y divide-white"
      >
        <div
          className={classes.footerStyles}
          className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"
        >
          <div
            className={classes.footerStyles}
            className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
          >
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <label className={classes.labelStyles}>Starters</label>
            </a>
            <p className="mt-2 text-sm text-white font-weight-bold text-left">
              Follow us on <i className="fab fa-instagram"></i>{" "}
              <i className="fab fa-facebook-square"></i>{" "}
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white text-left tracking-widest text-sm mb-3">
                Quick links
              </h2>
              <nav className="list-none mb-10 text-left">
                <li>
                  <a className="text-white  text-left mb-3" href="/">
                    <i className="fas fa-arrow-right white-text"></i> Home
                  </a>
                </li>
                <li>
                  <a className="text-white text-left mb-3" href="/delivery">
                    <i className="fas fa-arrow-right white-text"></i> Delivery
                  </a>
                </li>
                <li>
                  <a className="text-white text-left mb-3" href="/tableRes">
                    {" "}
                    <i className="fas fa-arrow-right white-text"></i> Table
                    reservation
                  </a>
                </li>
                <li>
                  <a className="text-white text-left mb-3" href="/menu">
                    {" "}
                    <i className="fas fa-arrow-right white-text"></i> Menu
                  </a>
                </li>
                <li>
                  <a className="text-white text-left mb-3" href="/contact">
                    {" "}
                    <i className="fas fa-arrow-right white-text"></i> Contact us
                  </a>
                </li>
                <li>
                  <a className="text-white text-left mb-3" href="/#">
                    {" "}
                    <i className="fas fa-arrow-right white-text"></i> Privacy
                    Policy
                  </a>
                </li>
              </nav>
            </div>

            <div>
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 tetx-left">
                Contact us
              </h2>
              <nav className={`${classes.navStyles} list-none mb-10 text-left`}>
                <li>
                  <a className=" text-white text-left">
                    <i className="fas fa-map-marker-alt white-text"></i> Via
                    monti 12 Milan
                  </a>
                </li>
                <li>
                  <a className=" text-white text-left">
                    <i className="fas fa-phone white-text"></i> 33366677122
                  </a>
                </li>
                <li>
                  <a className=" text-white text-left">
                    <i className="far fa-envelope white-text"></i>{" "}
                    grandRestaurant@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-white text-left">
                    <i className="fas fa-globe white-text"></i> grandRest.com
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className={`${classes.footerStyles} "bg-gray-500"`}>
          <div className={classes.div2Styles}>
            <p
              className={`${classes.pStyles} text-gray-500 text-sm text-center sm:text-center`}
            >
              © 2020 Starter Cafe. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

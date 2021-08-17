import React from "react";
import { useStyles } from "./footerStyles";

function Footer() {
  const classes = useStyles();

  return (
    <footer
      className={`${classes.mainFooterStyle} px-24 body-font divide-2 divide-y divide-white`}
    >
      <div
        className={`${classes.greenBackground}} container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col`}
      ></div>
      <div className={classes.greenBackground}>
        <div className={classes.flex}></div>
      </div>
    </footer>
  );
}

export default Footer;

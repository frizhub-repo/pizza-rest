import React from "react";

function Footer() {
  return (
    <footer
      style={{ background: "#62BA81", height: "250px" }}
      className=" px-24 body-font divide-2 divide-y divide-white"
    >
      <div
        style={{ background: "#62BA81" }}
        className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"
      ></div>
      <div style={{ background: "#62BA81" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </footer>
  );
}

export default Footer;

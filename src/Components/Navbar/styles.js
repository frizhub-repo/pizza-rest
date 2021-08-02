const styles = {
  divStyles: {
    display: "flex",
    color: "#62BA81",
    border: "2px solid #62BA81",
    borderRadius: "13px",

    paddingRight: "5px",
    minHeight: "38px",
    maxHeight: "46px",

    outline: "none",
    fontWeight: "10px",
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
  },
  buttonStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  },
  hover: {
    "&:hover": {
      opacity: "100",
      cursor: "pointer",
      borderBottom: "2px solid white",
    },
  },
  selected: {
    opacity: "100",
    cursor: "pointer",
    borderBottom: "2px solid white",
  },
  pTextStyles: {
    marginTop: "8px",
    fontWeight: "bolder",
  },
  containerClass: {
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

export default styles;

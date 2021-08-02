const styles = {
  divStyles: {
    color: "#10B981",
    border: "2px solid #10B981",
    borderRadius: "13px",

    minWidth: "160px",
    minHeight: "38px",
    maxHeight: "46px",

    outline: "none",
    fontWeight: "10px",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
  },
  divStylesTwo: {
    color: "#10B981",
    border: "2px solid #10B981",
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
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
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
  },
};

export default styles;

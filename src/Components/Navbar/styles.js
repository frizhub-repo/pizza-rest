const styles = {
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
};

export default styles;

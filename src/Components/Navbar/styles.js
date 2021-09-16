const styles = {
  divStyles: {
    color: "#10B981",
    border: "2px solid #10B981",
    borderRadius: "13px",
    paddingRight: "5px",
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
  trackOrderRoot: {
    position: "fixed",
    bottom: 20,
    right: 25,
    zIndex: 3,
    backgroundColor: "#F59E0B",
    borderRadius: "30px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  menuItemRoot: {
    padding: "10px 20px",
  },
  orderBadge: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shopingBag: {
    width: "30px",
    marginRight: "10px",
  },
  trackOrderBtn: {
    borderRadius: "30px",
    padding: "10px 30px",
  },
  statusRoot: {
    borderRadius: "20px",
    padding: "4px 10px",
    textTransform: "capitalize",
    textAlign: "center",
  },
  accepted: {
    border: "1px solid #4caf50",
    color: "#4caf50",
  },
  pending: {
    border: "1px solid #ff9800",
    color: "#f57c00",
  },
  assigned: {
    color: "#007FFF",
    border: "1px solid #007FFF",
  },
  requested: {
    color: "#e25985",
    border: "1px solid #e25985",
  },
  orderId: {
    fontWeight: "500",
  },
};

export default styles;

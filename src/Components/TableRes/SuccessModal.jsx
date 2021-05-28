import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { makeStyles } from "@material-ui/styles";
import SuccessIcon from "../../Assets/IconComponents/SuccessIcon";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#F5873A",
    width: "100px",
    height: "40px",
    borderRadius: "6px",
    color: "#fff",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    padding: "40px",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  textColor: {
    color: "rgba(245, 158, 11, 1)",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});

export default function SuccessModal({
  show,
  handleClose,
  date,
  time,
  peopleCount,
}) {
  const { customerData: user } = useRestaurantContext();
  const classes = useStyles();
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        <div className={classes.img}>
          <SuccessIcon />
        </div>
        <p className={classes.heading}>Table Reservation Completed</p>
        <div className={classes.infoBox}>
          <label className={classes.textColor}>Details</label>
          <label>
            {date}
            {" ,"}
            {time}
            {" ,"}
            {peopleCount} Guests
          </label>
        </div>
        <div className={classes.infoBox}>
          <label className={classes.textColor}>Name</label>
          <label>
            {user.firstName} {user.lastName}
          </label>
        </div>
        <div className={classes.infoBox}>
          <label className={classes.textColor}>Status</label>
          <label>Pending</label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={classes.btn} onClick={handleClose}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
}

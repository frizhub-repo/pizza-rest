import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Box } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import EditIcon from "../../Assets/IconComponents/EditIcon";
import DeleteIcon from "../../Assets/IconComponents/DeleteIcon";
import { deleteAddress, editAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { deleteAddressById, updateAddressById } from "../../api/customers";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  container: {
    display: "flex",
    border: "1px solid rgba(225, 234, 247)",
    padding: "20px",
    boxShadow: "none",
  },
  deliveryBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "10px",
  },
  editBox: {
    width: "20%",
    display: "flex",
    borderLeft: "1px solid rgba(225, 234, 247)",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBox: {
    width: "20%",
    borderLeft: "1px solid rgba(225, 234, 247)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Address = ({ data }) => {
  const classes = useStyles();
  const { customerData: user } = useRestaurantContext();
  const dispatch = useDispatch();

  const deleteAddressHandler = async () => {
    try {
      await deleteAddressById(data?._id);
      dispatch(deleteAddress(data?._id));
      toast.success("Address Removed Successfully!");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Card display="flex" className={classes.container}>
      <Box className={classes.deliveryBox}>
        <label>{data?.name}</label>
        <label>{data?.addressLine1}</label>
        <label>
          {data?.zipOrPostalCode}, {data?.stateOrProvince}
        </label>
        <Box display="flex" flexDirection="column" mt="10px">
          <label style={{ textAlign: "start" }}>
            Phone: {data?.phoneNumber}
          </label>
          <label>Email: {user?.email}</label>
        </Box>
      </Box>
      <Box className={classes.deleteBox}>
        <Box style={{ cursor: "pointer" }} onClick={deleteAddressHandler}>
          <DeleteIcon />
        </Box>
      </Box>
      <Box className={classes.editBox}>
        <Box style={{ cursor: "pointer" }}>
          <EditIcon />
        </Box>
      </Box>
    </Card>
  );
};

export default Address;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Box } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import EditIcon from "../../Assets/IconComponents/EditIcon";
import DeleteIcon from "../../Assets/IconComponents/DeleteIcon";
import { deleteAddress, editAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { deleteAddressById, updateAddressById } from "../../api/customers";
import { toast } from "react-toastify";
import AddressModal from "../CustomComponents/AddressModal";

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
  const [loading, setLoading] = useState(false);
  const { customerData: user } = useRestaurantContext();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const deleteAddressHandler = async () => {
    try {
      await deleteAddressById(data?._id);
      dispatch(deleteAddress(data?._id));
      toast.success("Address Removed Successfully!");
    } catch (error) {
      console.log({ error });
    }
  };

  const editAddressHandler = async (payload) => {
    try {
      setLoading(true);
      await updateAddressById(data?._id, payload);
      dispatch(editAddress(data?._id, payload));
      setLoading(false);
      handleModalClose();
      toast.success("Address Updated Successfully!");
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
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
          <label style={{ textAlign: "start", textTransform: "capitalize" }}>
            Address Type: {data?.addressKey}
          </label>
        </Box>
      </Box>
      <Box className={classes.deleteBox}>
        <Box style={{ cursor: "pointer" }} onClick={deleteAddressHandler}>
          <DeleteIcon />
        </Box>
      </Box>
      <Box className={classes.editBox}>
        <Box style={{ cursor: "pointer" }} onClick={handleModalOpen}>
          <EditIcon />
        </Box>
      </Box>
      <AddressModal
        open={open}
        handleClose={handleModalClose}
        data={data}
        text="Edit"
        onSubmitHandler={editAddressHandler}
        loading={loading}
      />
    </Card>
  );
};

export default Address;

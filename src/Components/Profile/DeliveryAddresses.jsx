import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import AddressCard from "../CustomComponents/AddressCard";
import { getDeliveryAddressList } from "../../api/customers";
import { useDispatch } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { getAddressList } from "../../actions/customers";
import { useRestaurantContext } from "../../Context/restaurantContext";

const useStyles = makeStyles({
  headingBox: {
    padding: "10px 0",
    backgroundColor: "#F59E0B",
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "30px 30px 0 0",
  },
  container: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 0 30px 30px",
  },
});

const DeliveryAddresses = () => {
  const { customerData } = useRestaurantContext();
  const addresses = useSelector((state) => state.customers).addresses;
  const [loading, setLoading] = useState(false);
  console.log({ addresses });
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const res = await getDeliveryAddressList();
      dispatch(getAddressList(res?.data?.addresses));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div>
      <Box className={classes.headingBox}>Delivery Address</Box>
      <div className={classes.container}>
        {loading
          ? [...Array(5).keys()].map((i) => (
              <Skeleton
                variant="rect"
                height={120}
                width={"100%"}
                style={{
                  marginBottom: "20px",
                }}
              />
            ))
          : addresses?.length
          ? addresses.map((address) => <AddressCard data={address} />)
          : null}
      </div>
    </div>
  );
};

export default DeliveryAddresses;

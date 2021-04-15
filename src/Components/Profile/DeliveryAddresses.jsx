import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Address from "../CustomComponents/Address";
import { getDeliveryAddressList } from "../../api/customers";
import { useDispatch } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { getAddressList } from "../../actions/customers";

const useStyles = makeStyles({
  headingBox: {
    border: "1px solid rgba(218, 235, 240)",
    padding: "10px",
    background: "rgba(3, 202, 252,0.1)",
  },
});

const DeliveryAddresses = () => {
  //   const [addresses, setAddresses] = useState([]);
  const addresses = useSelector((state) => state.customers).addresses;
  const [loading, setLoading] = useState(false);
  console.log({ addresses });
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const res = await getDeliveryAddressList();
      dispatch(getAddressList(res?.data));
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
        ? addresses.map((address) => <Address data={address} />)
        : null}
    </div>
  );
};

export default DeliveryAddresses;

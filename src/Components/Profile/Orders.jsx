import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { getOrders } from "../../api/orders";
import Skeleton from "@material-ui/lab/Skeleton";
import OrderCard from "../CustomComponents/OrderCard";

const useStyles = makeStyles({
  headingBox: {
    border: "1px solid rgba(218, 235, 240)",
    padding: "10px",
    background: "rgba(3, 202, 252,0.1)",
  },
});

const Orders = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await getOrders();

      setOrders(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refetch]);

  return (
    <div>
      <Box className={classes.headingBox}>Orders</Box>
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
        : orders?.length
        ? orders?.map((order, index) => {
            return (
              <OrderCard
                key={order?._id}
                data={order}
                refetch={refetch}
                setRefetch={setRefetch}
              />
            );
          })
        : null}
    </div>
  );
};

export default Orders;

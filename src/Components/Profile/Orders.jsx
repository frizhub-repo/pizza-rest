import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { getOrders } from "../../api/orders";
import Skeleton from "@material-ui/lab/Skeleton";
import OrderCard from "../CustomComponents/OrderCard";

const useStyles = makeStyles({
  headingBox: {
    padding: "10px 0",
    backgroundColor: "#F59E0B",
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "30px 30px 0 0",
  },
  orderContainer: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 0 30px 30px",
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
      <div className={classes.orderContainer}>
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
    </div>
  );
};

export default Orders;

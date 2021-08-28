import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import OrderCard from "../CustomComponents/OrderCard";
import { useOrderContext } from "Context/OrderContext";

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
  const { orders } = useOrderContext();

  return (
    <div>
      <Box className={classes.headingBox}>Orders</Box>
      <div className={classes.orderContainer}>
        {!orders?.length
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
              return <OrderCard key={order?._id} data={order} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Orders;

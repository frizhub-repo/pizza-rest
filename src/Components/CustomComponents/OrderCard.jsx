import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Box, Grid, Button } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { createOrder } from "../../api/orders";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const useStyles = makeStyles({
  container: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0 0 30px 30px",
    boxShadow: "none",
  },
  total: {
    border: "1px solid rgba(245, 158, 11, 1)",
    background: "rgba(245, 158, 11, 0.1)",
  },
  reorderBtn: {
    border: "1px solid rgba(245, 158, 11, 1)",
    background: "rgba(245, 158, 11, 0.1)",
    marginRight: "10px",
    textTransform: "capitalize",
    "&:hover": {
      background: "rgba(245, 158, 11, 0.1)",
    },
  },
  feedbackBtn: {
    border: "1px solid rgba(218, 235, 240)",
    background: "rgba(3, 202, 252,0.1)",
    textTransform: "capitalize",
    "&:hover": {
      background: "rgba(3, 202, 252,0.1)",
    },
  },
  freeTxt: {
    color: "#10B981",
    fontWeight: "normal",
  },
  totalPriceRoot: {
    fontWeight: "bold",
    marginTop: "15px",
  },
});

const OrderCard = ({ data }) => {
  const classes = useStyles();
  const { restaurant } = useRestaurantContext();
  const [loading, setLoading] = useState(false);

  const createOrderHandler = async () => {
    try {
      setLoading(true);
      await createOrder({ products: extractProductIds(data?.products) });
      toast.success("Order created successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const extractProductIds = (products) => {
    const arr = [];
    products.forEach((product) => {
      arr.push({
        product: product?.product?._id,
        price: product?.product?.price,
        quantity: product?.quantity,
      });
    });
    return arr;
  };

  return (
    <Card className={classes.container}>
      <Box display="flex" width="100%">
        <img
          alt="ecommerce"
          className="lg:w-1/3 w-full h-24 object-cover object-center rounded"
          src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
        />
        <Box display="flex" flexDirection="column" ml="10px" width="100%">
          {data?.products?.length
            ? data?.products?.map((productObj) => (
                <Grid container>
                  <Grid item md={4}>
                    <label>{productObj?.product?.title}</label>
                  </Grid>
                  <Grid item md={4}>
                    <label>{productObj?.quantity}x</label>
                  </Grid>
                  <Grid item md={4}>
                    {productObj?.price > 0 ? (
                      <label>
                        {productObj?.price}
                        {productObj?.product?.currency}
                      </label>
                    ) : (
                      <label className={classes.freeTxt}>Free</label>
                    )}
                  </Grid>
                </Grid>
              ))
            : null}
          <Grid container className={classes.totalPriceRoot}>
            <Grid item md={8} className={classes.asd}>
              Total:
            </Grid>
            <Grid item md={4}>
              {data?.total}€
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt="20px" mb="20px">
        {/* <Box className={classes.total} padding="5px">
          <label>Total</label>
          <label style={{ marginLeft: "10px" }}>
            {data?.total}
            {data?.products?.[0]?.product?.currency}
          </label>
        </Box> */}
        <Button className={classes.reorderBtn} onClick={createOrderHandler}>
          {loading && (
            <Spinner
              animation="border"
              size="sm"
              style={{ marginRight: "10px" }}
            />
          )}
          Reorder
        </Button>
        <Button className={classes.feedbackBtn}>Feedback</Button>
      </Box>
      <hr />
    </Card>
  );
};

export default OrderCard;

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Box, Grid } from "@material-ui/core";
import { useRestaurantConetxt } from "../../Context/restaurantContext";

const useStyles = makeStyles({
  container: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  total: {
    border: "1px solid rgba(245, 158, 11, 1)",
    background: "rgba(245, 158, 11, 0.1)",
  },
});

const OrderCard = ({ data }) => {
  const classes = useStyles();
  const { restaurant } = useRestaurantConetxt();

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
                    <label>
                      {productObj?.product?.price}
                      {productObj?.product?.currency}
                    </label>
                  </Grid>
                </Grid>
              ))
            : null}
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt="20px">
        <Box className={classes.total} padding="5px">
          <label>Total</label>
          <label style={{ marginLeft: "10px" }}>
            {data?.total}
            {data?.products?.[0]?.product?.currency}
          </label>
        </Box>
      </Box>
    </Card>
  );
};

export default OrderCard;

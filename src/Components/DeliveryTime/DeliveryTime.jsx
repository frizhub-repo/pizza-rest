import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import { addAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { updateCustomerInfo } from "../../api/customers";
import { toast } from "react-toastify";
import { ReactHookFormSelect } from "../CustomComponents/StyledComponents";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  container: {},
  title: {
    fontWeight: "600",
    fontSize: "20px",
  },
  formContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    height: "40px",
    background: "rgba(16, 185, 129,0.3)",
    border: "1px solid rgba(16, 185, 129)",
    marginTop: "20px",
    "&:hover": {
      background: "rgba(16, 185, 129,0.3)",
    },
    color: "rgba(16, 185, 129)",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
});

const DeliveryTime = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const addDeliveryTimeHandler = async (data) => {
    try {
      debugger;
      setLoading(true);
      const obj = { time: data?.time, note: data?.note ? data?.note : "" };
      await updateCustomerInfo({ deliveryInfo: obj });
      setLoading(false);
      history.push("/");
      toast.success("Your preference added successfully!");
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  return (
    <Box className={classes.container}>
      <label className={classes.title}>Confirm Delivery Time</label>
      <form onSubmit={handleSubmit(addDeliveryTimeHandler)}>
        <Card className={classes.formContainer}>
          <label
            style={{ display: "flex", color: "#6969fd", fontWeight: "500" }}
          >
            Delivery Time
          </label>

          <ReactHookFormSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // name="addressKey"
            // ref={register({
            //   required: "Address type Required",
            // })}
            // label="Address Type"
            // labelWidth={100}
            name="time"
            inputRef={register}
            variant="outlined"
            margin="normal"
            control={control}
            error={!!errors?.time}
            defaultValue="as soon as possible"
          >
            <MenuItem value="as soon as possible">As soon as possible</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </ReactHookFormSelect>

          <Box
            mb="15px"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "7px",
            }}
          >
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              Leave a note for the restaurant with information they need to be
              aware of (eg"The intercom doesn't work). Do not
            </label>
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              include here any requests or warnings about any food allergies or
              intollerances.
            </label>
          </Box>

          <TextField
            id="outlined-multiline-static"
            name="note"
            multiline
            rows={8}
            variant="outlined"
            inputRef={register}
          />

          <Box mt="15px">
            <label
              style={{
                fontSize: "10px",
                display: "flex",
                color: "#6969fd",
                fontWeight: "500",
              }}
            >
              If you have food allergy or intolerance (or if someone you are
              ordering for has one). Click here
            </label>
          </Box>
        </Card>
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" className={classes.btn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DeliveryTime;

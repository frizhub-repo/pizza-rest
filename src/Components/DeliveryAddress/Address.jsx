import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress, Select } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import { addAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { addDeliveryAddress } from "../../api/customers";
import { toast } from "react-toastify";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { ReactHookFormSelect } from "../CustomComponents/StyledComponents";
import { useHistory } from "react-router-dom";

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

const Address = () => {
  const { register, handleSubmit, errors, control } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { refetchCustomerHandler } = useRestaurantContext();

  const addAddressHandler = async (data) => {
    try {
      debugger;
      setLoading(true);
      await addDeliveryAddress(data);
      dispatch(addAddress(data));
      refetchCustomerHandler();
      setLoading(false);
      history.push("/");
      toast.success("Address Added Successfully!");
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <label className={classes.title}>Confirm the data for Delivery</label>
      <form onSubmit={handleSubmit(addAddressHandler)}>
        <Card className={classes.formContainer}>
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            inputRef={register({
              required: "Name Required",
            })}
            error={errors.name ? true : false}
            helperText={errors?.name?.message}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            inputRef={register({
              required: "Phone Number Required",
            })}
            error={errors.phoneNumber ? true : false}
            helperText={errors?.phoneNumber?.message}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Address Line 1"
            name="addressLine1"
            variant="outlined"
            inputRef={register({
              required: "Address Line 1 Required",
            })}
            error={errors.addressLine1 ? true : false}
            helperText={errors?.addressLine1?.message}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Address Line 2"
            name="addressLine2"
            variant="outlined"
            inputRef={register}
            error={errors.addressLine2 ? true : false}
            helperText={errors?.addressLine2?.message}
            style={{ marginBottom: "20px" }}
          />
          <Box display="flex" mb="20px">
            <TextField
              id="outlined-basic"
              label="City"
              name="city"
              variant="outlined"
              inputRef={register({
                required: "City Required",
              })}
              error={errors.city ? true : false}
              helperText={errors?.city?.message}
              style={{ marginRight: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="State/Province"
              name="stateOrProvince"
              variant="outlined"
              inputRef={register({
                required: "State/Province Required",
              })}
              error={errors.stateOrProvince ? true : false}
              helperText={errors?.stateOrProvince?.message}
            />
          </Box>
          <Box display="flex" mb="4px">
            <TextField
              id="outlined-basic"
              label="Zip/Postal Code"
              name="zipOrPostalCode"
              variant="outlined"
              inputRef={register({
                required: "Zip/Postal Code Required",
              })}
              error={errors.zipOrPostalCode ? true : false}
              helperText={errors?.zipOrPostalCode?.message}
              style={{ marginRight: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="Country"
              name="country"
              variant="outlined"
              inputRef={register({
                required: "Country Required",
              })}
              error={errors.country ? true : false}
              helperText={errors?.country?.message}
            />
          </Box>

          <ReactHookFormSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // name="addressKey"
            // ref={register({
            //   required: "Address type Required",
            // })}
            label="Address Type"
            labelWidth={100}
            name="addressKey"
            inputRef={register}
            variant="outlined"
            margin="normal"
            control={control}
            error={!!errors?.addressKey}
            defaultValue="other"
          >
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="work">Work</MenuItem>
            <MenuItem value="other" selected>
              Other
            </MenuItem>
          </ReactHookFormSelect>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            multiline
            rows={5}
            style={{ marginTop: "12px" }}
            variant="outlined"
            inputRef={register}
            error={errors.message ? true : false}
            helperText={errors?.message?.message}
          />
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

export default Address;

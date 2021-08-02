import React from "react";
import { Box, Button, Card, CircularProgress } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/styles";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderAddress } from "../../actions";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
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
    background: "#F59E0B",
    borderRadius: "10px",
    marginTop: "20px",
    "&:hover": {
      background: "#F59E0B",
    },
    color: "#fff",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
  addAddressBtn: {
    height: "40px",
    border: "1px solid #F59E0B",
    borderRadius: "10px",
    marginTop: "20px",
    "&:hover": {
      border: "1px solid #F59E0B",
    },
    color: "#F59E0B",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
  radioGroupBtn: {
    marginBottom: "10px",
    "& .MuiButtonBase-root": {
      color: "#F59E0B",
    },
  },
  skeleton: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

const ChooseAddress = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const [isErr, setIsErr] = React.useState(false);

  const handleChange = (event) => {
    setIsErr(false);
    setValue(event.target.value);
  };
  const getCompleteAddress = (address) => {
    return `${address?.addressLine1} , ${address?.zipOrPostalCode} , 
      ${address?.city} , ${address?.stateOrProvince} , ${address?.country}`;
  };
  const { customerData } = useRestaurantContext();

  const handleSubmit = () => {
    if (value > -1) {
      dispatch(addOrderAddress(customerData.addresses[parseInt(value)]));
      history.push("/deliveryTime");
    } else {
      setIsErr(true);
    }
  };

  return (
    <Box>
      <label className={classes.title}>Choose your Address</label>
      {customerData?.addresses?.length ? (
        <Card className={classes.formContainer}>
          <RadioGroup
            value={value}
            onChange={handleChange}
            className={classes.radioGroupBtn}
          >
            {customerData?.addresses?.length
              ? customerData?.addresses?.map((address, index) => (
                  <FormControlLabel
                    value={index.toString()}
                    control={<Radio />}
                    label={getCompleteAddress(address)}
                    key={index}
                  />
                ))
              : null}
          </RadioGroup>
          {isErr && (
            <label style={{ color: "#f44336", fontSize: "0.75rem" }}>
              Please select one option
            </label>
          )}
        </Card>
      ) : (
        <div className={classes.skeleton}>
          <Skeleton variant="rect" width="100%" height="150px" />
        </div>
      )}
      <Box display="flex" justifyContent="space-between">
        <Button
          className={classes.addAddressBtn}
          onClick={() => history.push("/deliveryAddress")}
        >
          Add Delivery Address
        </Button>
        <Button onClick={handleSubmit} className={classes.btn}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default ChooseAddress;

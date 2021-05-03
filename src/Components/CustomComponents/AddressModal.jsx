import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Button,
  Box,
  TextField,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ReactHookFormSelect } from "../CustomComponents/StyledComponents";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
});

const AddressModal = ({
  open,
  handleClose,
  data,
  text,
  onSubmitHandler,
  loading,
}) => {
  const {
    name = "",
    phoneNumber = "",
    addressLine1 = "",
    addressLine2 = "",
    city = "",
    stateOrProvince = "",
    zipOrPostalCode = "",
    country = "",
    addressKey = "other",
  } = data;
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      name: name,
      phoneNumber: phoneNumber,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      stateOrProvince: stateOrProvince,
      zipOrPostalCode: zipOrPostalCode,
      country: country,
      addressKey: addressKey,
    },
  });
  const classes = useStyles();
  console.log({ errors });
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      scroll={"body"}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <DialogTitle id="form-dialog-title">{text} Address</DialogTitle>
        <DialogContent dividers className={classes.formContainer}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" type="submit">
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            {text}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddressModal;

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  txtField: {
    width: "100%",
    marginBottom: "10px",
  },
}));

export default function ChangePasswordDialog({ open, setOpen }) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen((open) => !open)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.txtField}
                label="Old password"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.txtField}
                label="New password"
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.txtField}
                label="Confirm password"
              />
              <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    background: "#ceebdb",
                    padding: "5px 25px",
                    fontSize: "25px",
                    color: "#67bf8f",
                    fontWeight: "600",
                  }}
                  onClick={() => setOpen((open) => !open)}
                >
                  Save
                </button>
              </Box>
            </form>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={() => setOpen((open) => !open)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setOpen((open) => !open)} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

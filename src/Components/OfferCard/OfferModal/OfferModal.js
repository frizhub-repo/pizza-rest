import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import classes from "./OfferModal.module.css";
import { makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles({
  root: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 30,
    width: 20,
    height: 20,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#EA9C0D",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 20,
      height: 34,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#EA9C0D",
    },
  },
});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      onClick={(event) => console.log(event.target.checked)}
      checked={props?.checked}
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function OfferModal({ handleOpenCloseModal, open, product }) {
  const [selected, setSelected] = React.useState();
  const { sizes } = product;

  console.log(sizes);
  return (
    <div>
      <Dialog
        onClose={handleOpenCloseModal}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        scroll="body"
        fullWidth={true}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleOpenCloseModal}
        >
          {product?.title}
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <span className={classes.selectVariations}>Select varaition</span>
            <div className={classes.variations}>
              <div className={classes.sizeRoot}>
                <StyledCheckbox />
                <div className={classes.sizeText}>
                  <span>Small</span>
                  <span>350€</span>
                </div>
              </div>
              <div className={classes.sizeRoot}>
                <StyledCheckbox />
                <div className={classes.sizeText}>
                  <span>Medium</span>
                  <span>350€</span>
                </div>
              </div>
              <div className={classes.sizeRoot}>
                <StyledCheckbox />
                <div className={classes.sizeText}>
                  <span>Large</span>
                  <span>350€</span>
                </div>
              </div>
            </div>
          </div>
          <span className={classes.selectVariations}>Select discount</span>
          {sizes.map((size) => (
            <div>
              {/* <Typography variant="h6" gutterBottom>
                {size?.title}
              </Typography> */}
              {size?.deliveryOffers?.map(({ offer, _id }) => (
                <Card
                  key={_id}
                  className={classes.cardRoot}
                  onClick={() => setSelected(_id)}
                >
                  <div className={classes.checkBoxRoot}>
                    <StyledCheckbox checked={selected === _id} />
                  </div>
                  <CardHeader
                    
                    avatar={
                      <Avatar
                        className={classes.avatar}
                        aria-label="recipe"
                        src={`${process.env.REACT_APP_API_BASE_URL}/${offer?.imageUrl}`}
                      >
                        R
                      </Avatar>
                    }
                    action={
                      <p>{`${offer?.discountPrice}${
                        offer?.discountType === "percentage" ? "%" : "$"
                      }`}</p>
                    }
                    title={offer?.title}
                    subheader={offer?.description}
                  />
                  {offer?.discountType === "bundle" && (
                    <CardContent className={classes.cardContentRoot}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            onClick={handleOpenCloseModal}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Grid, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProfileIcon from "../../Assets/IconComponents/ProfileIcon";
import { useRestaurantContext } from "../../Context/restaurantContext.js";
import Orders from "./Orders";
import Reservations from "./Reservations";
import DeliveryAddresses from "./DeliveryAddresses";
import MyAcount from "./MyAcount";
import Footer from "../Footer";
import ContactMethod from "./ContactMethod";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import { Skeleton } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { updateCustomerInfo, uploadTempLogo } from "../../api/customers";

const useStyles = makeStyles({
  leftGrid: {
    paddingRight: "16px",
  },
  profileBox: {
    marginBottom: "20px",
    padding: "14px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(196, 196, 196, 0.49)",
  },
  mainContainer: {
    paddingTop: "3rem",
    marginBottom: "80px",
  },
  textBox: {
    fontSize: "14px",
  },
  optionsBox: {
    border: "1px solid rgba(196, 196, 196, 0.49)",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    textAlign: "start",
    fontWeight: "500",
    color: "darkgrey",
    lineHeight: "36px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  activeOption: {
    cursor: "pointer",
    color: "#F59E0B",
  },
  option: {
    cursor: "pointer",
  },
  profileIconContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  profileImg: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    border: "1px solid #C4C4C4",
  },
  input: {
    display: "none",
  },
  uploadImgRoot: {
    position: "absolute",
    bottom: "-15px",
    right: "55px",
  },
  iconBtn: {
    padding: "5px",
    backgroundColor: "#EDEDED",
  },
  editIcon: {
    color: "#000",
  },
});

const Profile = () => {
  const classes = useStyles();
  const [activeOption, setActiveOption] = useState(0);
  const [uploadImgLoading, setUploadImgLoading] = useState(false);
  const { customerData: user, refetchCustomerHandler } = useRestaurantContext();
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    if (window.location.search) {
      const option = window.location.search.split("=")[1];
      setActiveOption(parseInt(option));
    }
  }, []);

  const uploadImage = async (event) => {
    setUploadImgLoading(true);
    try {
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
      const {
        data: { logoUrl },
      } = await uploadTempLogo(formData);
      const payload = { profilePhoto: logoUrl };
      const res = await updateCustomerInfo(payload);
      refetchCustomerHandler();
      console.log({ res });
      setUploadImgLoading(false);
    } catch (error) {
      setUploadImgLoading(false);
      console.log({ error });
    }
  };

  return (
    <div>
      <Navbar showLinks={false} />
      <section className={`px-48 ${classes.mainContainer}`}>
        <Grid container>
          <Grid item lg={3} md={4} className={classes.leftGrid}>
            <div className={classes.profileBox}>
              {Object.entries(user).length > 0 ? (
                <>
                  <div className={classes.profileIconContainer}>
                    {uploadImgLoading ? (
                      <Skeleton variant="circle" width="130px" height="130px" />
                    ) : user?.profilePhoto ? (
                      <img
                        className={classes.profileImg}
                        src={`${process.env.REACT_APP_API_BASE_URL}/${user?.profilePhoto}`}
                      />
                    ) : (
                      <ProfileIcon width="130" height="120" />
                    )}
                    <div className={classes.uploadImgRoot}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        onChange={uploadImage}
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          className={classes.iconBtn}
                        >
                          <EditIcon className={classes.editIcon} />
                        </IconButton>
                      </label>
                    </div>
                  </div>
                  <Box
                    mt="10px"
                    display="flex"
                    flexDirection="column"
                    className={classes.textBox}
                  >
                    <label
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "grey",
                        marginTop: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      {user?.firstName} {user?.lastName}
                    </label>
                    <label
                      style={{
                        fontSize: "17px",
                        fontWeight: "400",
                        color: "slategrey",
                        marginTop: "20px",
                      }}
                    >
                      <PhoneInTalkIcon /> {user?.phoneNumber}
                    </label>
                    <label
                      style={{
                        fontSize: "17px",
                        fontWeight: "400",
                        color: "slategrey",
                      }}
                    >
                      <EmailIcon /> {user?.email}
                    </label>
                    <label
                      style={{
                        fontSize: "17px",
                        fontWeight: "400",
                        color: "slategrey",
                      }}
                    >
                      {user?.address}
                    </label>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          color: "slategrey",
                        }}
                      >
                        Fidelity Card Points
                      </label>
                      <label
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          color: "slategrey",
                        }}
                      >
                        25pts
                      </label>
                    </div>
                  </Box>
                </>
              ) : (
                <Skeleton variant="rect" width="100%" height="320px" />
              )}
            </div>
            <div className={classes.optionsBox}>
              <label
                className={
                  activeOption === 0 ? classes.activeOption : classes.option
                }
                onClick={() => setActiveOption(0)}
              >
                My Account
              </label>
              <label
                onClick={() => setActiveOption(1)}
                className={
                  activeOption === 1 ? classes.activeOption : classes.option
                }
              >
                Delivery Address
              </label>
              <label
                onClick={() => setActiveOption(2)}
                className={
                  activeOption === 2 ? classes.activeOption : classes.option
                }
              >
                Orders
              </label>
              <label
                onClick={() => setActiveOption(3)}
                className={
                  activeOption === 3 ? classes.activeOption : classes.option
                }
              >
                Reservations
              </label>
              <label
                onClick={() => setActiveOption(4)}
                className={
                  activeOption === 4 ? classes.activeOption : classes.option
                }
              >
                Payment Method
              </label>
              <label
                onClick={() => setActiveOption(5)}
                className={
                  activeOption === 5 ? classes.activeOption : classes.option
                }
              >
                Contact Method
              </label>
              <label
                onClick={logout}
                className={
                  activeOption === 6 ? classes.activeOption : classes.option
                }
              >
                logout
              </label>
            </div>
          </Grid>
          <Grid item lg={9} md={8}>
            {activeOption === 0 && (
              <MyAcount
                user={user}
                refetchCustomerHandler={refetchCustomerHandler}
              />
            )}
            {activeOption === 1 && <DeliveryAddresses />}
            {activeOption === 2 && <Orders />}
            {activeOption === 3 && <Reservations />}
            {activeOption === 5 && <ContactMethod />}
          </Grid>
        </Grid>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;

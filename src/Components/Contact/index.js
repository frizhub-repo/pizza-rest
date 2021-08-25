import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useForm } from "react-hook-form";
import CardMedia from "@material-ui/core/CardMedia";
import { toast } from "react-toastify";
import Hero from "../Home/Hero";
import { useStyles } from "../TableRes/TableResStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import Typography from "@material-ui/core/Typography";
import map from "../../images/map.jpg";
import { addContactUs } from "../../api/customers";
import { CircularProgress } from "@material-ui/core";
import { useRestaurantContext } from "../../Context/restaurantContext";
import Header from "Components/Home/Header";
import contactPageHeaderImg from "Assets/images/contactPageHeader.png";

function Contact() {
  let { restaurant } = useRestaurantContext();

  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const addContactUsHandler = async (data) => {
    try {
      setLoading(true);
      await addContactUs(data);
      toast.success("Your query has been submitted successfully!");
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Contacts"
        url={contactPageHeaderImg}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <div>
        <div className={classes.headerStyle}>
          <Header backgroundColor={"#F59E0B"} text="Keep in touch" />
        </div>
        <Card className={`${classes.root5} ${classes.extraStyle8}`}>
          <CardContent>
            <form
              className={classes.mapDivStyles}
              onSubmit={handleSubmit(addContactUsHandler)}
            >
              <div className={classes.upperDiv}>
                <div className={classes.innerDiv}>
                  <div className={classes.flexStyles}>
                    <Card
                      className={`${classes.innnerCard} ${classes.nameStyles}`}
                    >
                      <CardContent>
                        {" "}
                        <Typography className={classes.typostyles2}>
                          NAME
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      className={`${classes.innnerCard} ${classes.nameDivStyles}`}
                    >
                      <input
                        className="ip"
                        ref={register}
                        name="name"
                        placeholder="John Doe"
                      />
                      {/* <CardContent>
                        <Card
                          className={`${classes.innnerCard} ${classes.nameDivStyles} ${classes.nameDiv2Styles}`}
                        >
                          <CardContent>
                            <Typography className={classes.typostyles3}>
                              Dawood Javeed
                            </Typography>
                            <input />
                          </CardContent>
                        </Card>
                        
                      </CardContent> */}
                    </Card>
                  </div>
                  <div className={classes.flexStyles}>
                    <Card
                      className={`${classes.innnerCard} ${classes.emailStyles}`}
                    >
                      <CardContent>
                        <Typography className={classes.typostyles2}>
                          EMAIL
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      className={`${classes.innnerCard} ${classes.emailDivStyles} `}
                    >
                      <input
                        className="ip"
                        ref={register}
                        name="email"
                        placeholder="johndoe@gmail.com"
                      />

                      {/* <CardContent>
                        <Card
                          className={`${classes.innnerCard} ${classes.emailDivStyles} ${classes.emailDiv2Styles}`}
                        >
                          <CardContent>
                            <Typography className={classes.typostyles3}>
                              developmentliesinhearts@gmail.com
                            </Typography>
                          </CardContent>
                        </Card>
                      </CardContent> */}
                    </Card>
                  </div>
                </div>
                <div className={classes.flexStyles}>
                  <Card
                    className={`${classes.innnerCard} ${classes.messageStyles}`}
                  >
                    <CardContent>
                      <Typography className={classes.typostyles2}>
                        MESSAGE
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    className={`${classes.innnerCard} ${classes.messageDivStyles}`}
                  >
                    <input
                      className="ip"
                      ref={register}
                      name="message"
                      placeholder="Hi! This is a message"
                    />

                    {/* <CardContent>
                      <Card
                        className={`${classes.innnerCard} ${classes.messageDivStyles} ${classes.messageDiv2Styles}`}
                      >
                        <CardContent>
                          <Typography className={classes.typostyles3}>
                            text
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardContent> */}
                  </Card>
                </div>
                <button className={`${classes.buttonCard}`} type="submit">
                  {loading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      style={{ marginRight: "8px" }}
                    />
                  )}
                  <b>
                    <Typography className={classes.typostyles2}>
                      SUBMIT
                    </Typography>
                  </b>
                </button>
              </div>
              <div className={classes.addressStyles}>
                <div className={classes.googlemapRoot}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="map"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    className={classes.googlemap}
                  ></iframe>
                </div>

                <Card className={`${classes.addressCard}`}>
                  <CardContent>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Address:</span> Vis
                      ciccio gialli Milan Italy
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Email:</span>{" "}
                      starters@cafe.com
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Phone:</span>{" "}
                      33344455566
                    </Typography>
                    <Typography className={classes.typostyles7}>
                      <span className={classes.pStyles}>Email:</span>{" "}
                      starters@cafe.com
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;

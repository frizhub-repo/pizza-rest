import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./TableResStyles";
import Logo from "../../images/logo.png";
import like from "../../images/like.png";
import chat from "../../images/chat.png";
import Reviews from "Components/CustomComponents/Reviews";

export default function RestaurantReviews({ restaurant }) {
  const { restaurant: restaurantObj, placeData } = restaurant;

  const classes = useStyles();

  return (
    <div className={classes.textDivStyles}>
      <div className={classes.avatarStyles}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {restaurantObj?.name ?? "Uncle Sammy"}
        </Typography>
        <img src={Logo} />
        <Typography
          variant="h5"
          component="h2"
          className={`${classes.title} ${classes.title2}`}
        >
          {restaurantObj?.slogan ?? "The real taste is here!"}
        </Typography>
      </div>

      <div className={classes.h1Styles}>
        <h1>THIS RESTAURANT GAINED A REPUTATION OF</h1>
        <div className={classes.imgDivContainer}>
          <img src={like} className={classes.imgStyles} />
          <p className={classes.getStars}>{placeData?.rating}</p>
          <p className={classes.getStarsSlash}>|</p>5
        </div>

        <div className={classes.imgDivContainer}>
          WITH
          <img src={chat} className={classes.imgStyles} />
          {placeData?.user_ratings_total} REVIEWS
        </div>
        <div className={classes.reviews}>
          <Reviews placeData={placeData} />
        </div>
        {/* <div className={classes.cardContainer}>
          {placeData?.reviews?.map((review) => (
            <>
              <Card className={classes.root7}>
                <div className={classes.cardContentStyles}>
                  <div className={classes.avatarDivStyles}>
                    <ImageAvatars img={review?.profile_photo_url} />
                    <div className={classes.forflex}>
                      <div
                        className={`${classes.h1Styles} ${classes.divNewStyles}`}
                      >
                        <h1>VOTED</h1>
                      </div>
                      <div className={`${classes.imgDivContainer} `}>
                        <img src={like} className={classes.imgStyles} />
                        <p className={classes.getStars}>{review?.rating}</p>
                        <p className={classes.getStarsSlash}>|</p>5
                      </div>
                    </div>
                  </div>
                  {review?.text && (
                    <div>
                      <div className={classes.lineStyles}></div>
                      <p className={classes.reviewTxt}>{review?.text}</p>
                    </div>
                  )}
                  <span className={classes.authorName}>
                    -{review?.author_name}-
                  </span>
                </div>
              </Card>
              <br />
            </>
          ))}
        </div> */}
      </div>
    </div>
  );
}

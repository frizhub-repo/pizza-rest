import { Card, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./TableResStyles";
import Logo from "../../images/logo.png";
import like from "../../images/like.png";
import chat from "../../images/chat.png";
import ImageAvatars from "../Avatar/Avatar";
import { Carousel } from "react-bootstrap";
import { Skeleton } from "@material-ui/lab";
import leftCarouselIcon from "Assets/images/leftCarouselIcon.png";
import rightCarouselArror from "Assets/images/rightCarouselArror.png";

export default function RestaurantReviews({ restaurant }) {
  const { restaurant: restaurantObj, placeData } = restaurant;

  const classes = useStyles();

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);
  const [carouselItemCount, setCarouselItemCount] = React.useState(3);

  React.useEffect(() => {
    setCarouselItemCount(placeData?.reviews?.length);
  }, [placeData?.reviews]);

  function toggleCarousel(direction) {
    const [min, max] = [0, carouselItemCount - 1];

    if (direction === "next") {
      if (index === max) setIndex(0);
      else setIndex(index + 1);
    } else if (direction === "prev") {
      if (index === 0) setIndex(max);
      else setIndex(index - 1);
    }

    setDirection(direction);
  }

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
          <Carousel
            fade
            indicators={false}
            controls={false}
            activeIndex={index}
            direction={direction}
          >
            {placeData?.reviews?.length > 0 ? (
              placeData?.reviews?.map((review) => {
                return (
                  <Carousel.Item interval={5000}>
                    <div className="d-flex justify-content-between">
                      <a
                        className={classes.carouselIcon}
                        onClick={() => toggleCarousel("prev")}
                      >
                        <img
                          src={leftCarouselIcon}
                          className={classes.carouselIconWidth}
                        />
                      </a>

                      <div className={classes.carouselContent}>
                        <img
                          src={review?.profile_photo_url}
                          style={{ width: "300px" }}
                          className="mb-3"
                        />
                        <p className={classes.carouselMessage}>
                          ‘’{review.text}’’
                        </p>
                        <p className={classes.reviewAuthorName}>
                          -{review?.author_name}-
                        </p>
                      </div>

                      <a
                        className={classes.carouselIcon}
                        onClick={() => toggleCarousel("next")}
                      >
                        <img
                          src={rightCarouselArror}
                          className={classes.carouselIconWidth}
                        />
                      </a>
                    </div>
                  </Carousel.Item>
                );
              })
            ) : (
              <Skeleton variant="rect" height={350} />
            )}
          </Carousel>
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

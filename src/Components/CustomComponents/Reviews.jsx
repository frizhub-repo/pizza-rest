import React from "react";
import { Carousel } from "react-bootstrap";
import { Skeleton } from "@material-ui/lab";
import leftCarouselIcon from "Assets/images/leftCarouselIcon.png";
import rightCarouselArror from "Assets/images/rightCarouselArror.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  carouselIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselIconWidth: {
    width: "30px !important",
  },
  carouselContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  carouselMessage: {
    width: "70%",
  },
  reviewAuthorName: {
    color: "#000",
    fontStyle: "italic",
  },
  skeleton: {
    borderRadius: "50%",
  },
  profilePhoto: {
    width: "300px",
  },
});

export default function Reviews({ placeData }) {
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
    <Carousel
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
                    className={`mb-3 ${classes.profilePhoto}`}
                  />
                  <p className={classes.carouselMessage}>‘’{review.text}’’</p>
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
        <Skeleton variant="rect" height={370} className={classes.skeleton} />
      )}
    </Carousel>
  );
}

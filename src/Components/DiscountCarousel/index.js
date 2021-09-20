import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import styles from "Components/Home/styles";
import ArrowBackIcon from "Assets/IconComponent/ArrowBackIcon";
import { ArrowForwardIcon } from "Assets/IconComponent/ArrowForwardIcon";
import { Skeleton } from "@material-ui/lab";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";

const useStyles = makeStyles(styles);

export default function DiscountCarousel({
  isTableResPage = false,
  discounts,
  setSelectedOffer,
  selectedOffer,
}) {
  const classes = useStyles();

  const handleChangeReservationOffer = (event, offer) => {
    if (event?.target?.checked) {
      setSelectedOffer(offer);
    } else {
      setSelectedOffer({});
    }
  };

  return (
    <div>
      {discounts?.length ? (
        <Carousel
          className={`carouselRoot ${isTableResPage && classes.rmvSpacing}`}
          swipeable={true}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.forwardArrow}
            >
              <ArrowBackIcon />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.backwordArrow}
            >
              <ArrowForwardIcon />
            </button>
          )}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className={classes.indiExtra}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className={classes.indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {discounts?.map((discount) => (
            <div className={classes.carouselDiv}>
              <div
                className={`${classes.carousel} ${
                  isTableResPage && classes.rmvCarouselSpacing
                }`}
              >
                <div
                  style={{
                    width: "40%",
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    display: "flex",
                  }}
                >
                  <img
                    alt="Offer"
                    src={`${process.env.REACT_APP_API_BASE_URL}/${discount?.imageUrl}`}
                    style={{
                      borderTopLeftRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      backgroundSize: "cover",
                      backgroundPositionX: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    background: "#F59E0B",
                    color: "#fff",
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                    padding: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    className={`${classes.discountTitle} ${
                      isTableResPage && classes.rmvdiscountTitleFont
                    }`}
                  >
                    {discount?.title}
                  </Typography>
                  <Typography variant="h4">{discount?.description}</Typography>
                  {discount?.items?.length ? (
                    <>
                      <Divider className={classes.discountDivider} />
                      <div className="discount-custom-scroll">
                        {discount?.items?.map((item) => (
                          <Typography
                            variant="h5"
                            className={classes.titleSpacing}
                          >
                            {item}
                          </Typography>
                        ))}
                      </div>
                    </>
                  ) : null}
                  <div style={{ position: "relative" }}>
                    {discount?.discountPrice ? (
                      <>
                        <Divider />
                        <Typography variant="h4">
                          €{discount?.discountPrice}
                        </Typography>
                      </>
                    ) : null}
                    <FormControlLabel
                      className={classes.iconRoot}
                      onClick={(event) =>
                        handleChangeReservationOffer(event, discount)
                      }
                      control={
                        <Checkbox
                          checked={selectedOffer?._id === discount?._id}
                          icon={
                            <AddCircleOutlineSharpIcon
                              className={classes.iconStyle}
                            />
                          }
                          checkedIcon={
                            <CheckCircleOutlineIcon
                              className={classes.iconStyle}
                            />
                          }
                        />
                      }
                    ></FormControlLabel>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Skeleton
          variant="rect"
          height={400}
          className={classes.skeletongSpaing}
        />
      )}
    </div>
  );
}

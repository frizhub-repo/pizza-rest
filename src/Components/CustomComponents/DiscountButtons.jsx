import { CardContent, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { getHotDeals } from "api/customers";
import OfferCard from "Components/OfferCard";
import React from "react";

const useStyles = makeStyles({
  container: {
    color: "#000",
    padding: "20px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "500px",
  },
  discountText: {
    cursor: "pointer",
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "42px",
    paddingBottom: "5px",
    color: "rgba(245, 158, 11, 0.5)",
  },
  selectedText: {
    color: "#10B981",
    borderBottom: "7px solid #10B981",
    zIndex: 1,
  },
  dividerRoot: {
    position: "absolute",
    bottom: 0,
  },
  divider: {
    width: "500px",
    height: "7px",
    backgroundColor: "rgba(245, 158, 11, 0.5)",
  },
  cardSpacing: {
    padding: "16px 16px 16px 130px",
    height: "700px",
    marginRight: "5px",
  },
  skeleton: {
    marginTop: "10px",
    borderRadius: "30px",
  },
});

const DiscountButtons = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [discountList, setDiscountList] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getHotDealsFn = async () => {
    setLoading(true);
    try {
      const res = await getHotDeals();
      setDiscountList(res?.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getHotDealsFn();
  }, []);

  const handleActiveStep = (value) => setActiveStep(value);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.dividerRoot}>
            <Divider className={classes.divider} />
          </div>
          <span
            className={`${classes.discountText} ${
              activeStep === 0 && classes.selectedText
            }`}
            onClick={() => handleActiveStep(0)}
          >
            Bundle
          </span>
          <span
            className={`${classes.discountText} ${
              activeStep === 1 && classes.selectedText
            }`}
            onClick={() => handleActiveStep(1)}
          >
            Flat
          </span>
          <span
            className={`${classes.discountText} ${
              activeStep === 2 && classes.selectedText
            }`}
            onClick={() => handleActiveStep(2)}
          >
            %
          </span>
        </div>
      </div>
      <CardContent className={`${classes.cardSpacing} custom-scroll-product`}>
        {loading ? (
          <div>
            {[1, 2, 3, 4].map(() => (
              <Skeleton
                variant="rect"
                className={classes.skeleton}
                width="100%"
                height={150}
              />
            ))}
          </div>
        ) : (
          <div>
            {activeStep === 0 &&
              discountList?.bundled?.length > 0 &&
              discountList?.bundled?.map(({ product, offer, size }) => (
                <OfferCard product={product} offer={offer} size={size} />
              ))}
            {activeStep === 1 &&
              discountList?.flat?.length > 0 &&
              discountList?.flat?.map(({ product, offer, size }) => (
                <OfferCard product={product} offer={offer} size={size} />
              ))}
            {activeStep === 2 &&
              discountList?.percentage?.length > 0 &&
              discountList?.percentage?.map(({ product, offer, size }) => (
                <OfferCard product={product} offer={offer} size={size} />
              ))}
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default DiscountButtons;

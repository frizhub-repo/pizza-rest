import { CardContent, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { getHotDeals } from "api/customers";
import OfferCard from "Components/OfferCard";
import React from "react";
import classes from "./DiscountButtons.module.css";

const DiscountButtons = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [discountList, setDiscountList] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getHotDealsFn = async () => {
    setLoading(true);
    try {
      const res = await getHotDeals();
      setDiscountList(res?.data);
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
            {[1, 2, 3, 4].map((val, index) => (
              <Skeleton
                key={index}
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

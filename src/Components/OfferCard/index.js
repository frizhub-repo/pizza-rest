import React from "react";
import classes from "./OfferCard.module.css";
import { Typography, Divider } from "@material-ui/core";

import AdditionalInfo from "./AdditionalInfo";
import classNames from "classnames";
import { addCurrency, addItem, setTotal } from "../../actions";
import { useDispatch } from "react-redux";

const OfferCard = ({ product, marginBottom = "20px" }) => {
  const disp = useDispatch();
  const restaurant = {
    logoUrl:
      "https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg",
  };

  const addToCart = () => {
    const productObj = {
      product: product._id,
      name: product.title,
      price: product.sizes[0].price,
      quantity: 1,
    };
    disp(addItem(productObj));
    disp(setTotal(product.sizes[0].price));
    disp(addCurrency(product.currency));
  };

  return (
    <div className={classes.prdContainer} style={{ marginBottom }}>
      <div className={classes.imgPrdContainer}>
        <img
          src={
            product?.images?.length
              ? `${process.env.REACT_APP_API_BASE_URL}/${product?.images?.[0]}`
              : `${process.env.REACT_APP_API_BASE_URL}/${restaurant?.logoUrl}`
          }
          className={classes.prdImg}
        />
        <div className={classes.prdPrice}>
          <span className={classes.textFont}>Bundle</span>
        </div>
      </div>
      <div className={classes.mainPrdContainer}>
        <div className={classNames(classes.tb, classes.th)}>
          <Typography variant="h6" className={classes.overflowText}>
            {product?.title}
          </Typography>
        </div>
        <div className={classNames(classes.tb, classes.th)}>
          <Typography>Description: {product?.description}</Typography>
        </div>
        <div className={classNames(classes.tb, classes.th)}>
          <Typography>Allergeni: {product?.description}</Typography>
        </div>

        <div className={classes.additionalInfoContainer}>
          <AdditionalInfo title="VEGAN" value="25/08/2021" />
          <AdditionalInfo title="GLUTTEN-FREE" value="1" />
          <AdditionalInfo title="SPICY" value="100" />
        </div>
      </div>
      <div
        className={classes.actionsPrdContainer}
        title="Add to cart"
        onClick={addToCart}
      >
        <span>+</span>
      </div>
    </div>
  );
};

export default OfferCard;

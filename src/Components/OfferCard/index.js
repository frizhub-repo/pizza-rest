import React from "react";
import classes from "./OfferCard.module.css";
import { Typography, Divider } from "@material-ui/core";
import Descriptions from "./Descriptions";
import spicy from "../../images/hot.png";
import vegan from "../../images/vegan.png";
import glutenFree from "../../images/gluten.png";
import AdditionalInfo from "./AdditionalInfo";
import FoodType from "./FoodType";
import classNames from "classnames";
import { addCurrency, addItem, setTotal } from "../../actions";
import { useDispatch } from "react-redux";
import img from "../../Assets/images/shopping-basket.png";

const OfferCard = ({ product, marginBottom = "20px" }) => {
  const disp = useDispatch();
  console.log({ title: product?.title });
  const restaurant = {
    logoUrl:
      "https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg",
  };
  // Add to cart items
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
    <div
      className={classes.prdContainer}
      style={{ marginBottom, color: "#000" }}
    >
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
          <span className={classes.textFont}>{product?.sizes[0]?.price} €</span>
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
        {/* <div className={classNames(classes.tb, classes.th)}>
          <Typography>Allergeni: {product?.description}</Typography>
        </div> */}
        <Descriptions
          title="Allergeni"
          arr={product?.allergies}
          isAllergy={true}
          classes={classes}
        />

        {/* <div className={classes.additionalInfoContainer}>
          <AdditionalInfo title="VEGAN" value="25/08/2021" />
          <AdditionalInfo title="GLUTTEN-FREE" value="1" />
          <AdditionalInfo title="SPICY" value="100" />
        </div> */}
        <div className={classes.additionalInfoContainer}>
          <FoodType
            src={vegan}
            title="VEGAN"
            isSelected={product?.foodType?.vegan}
            classes={classes}
          />
          <FoodType
            src={glutenFree}
            title="GLUTEN-FREE"
            isSelected={product?.foodType?.glutenFree}
            classes={classes}
          />
          <FoodType
            src={spicy}
            title="SPICY"
            isSelected={product?.foodType?.spicy}
            classes={classes}
          />
        </div>
      </div>
      <div
        className={classes.actionsPrdContainer}
        title="Add to cart"
        onClick={addToCart}
      >
        <img src={img} />
      </div>
    </div>
  );
};

export default OfferCard;

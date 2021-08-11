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
import { isEmpty } from "utils/common";
import { offerExpire, notFound, total_Disocunt } from "utils/messages";
import { toast } from "react-toastify";

const OfferCard = ({
  product,
  showBorder = false,
  marginBottom = "20px",
  offer = {},
  size = {},
}) => {
  const [price, setPrice] = React.useState(0);
  const [productSize, setProdctSize] = React.useState(null);

  const disp = useDispatch();
  const restaurant = {
    logoUrl:
      "https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg",
  };
  // Add to cart items
  const addToCart = () => {
    try {
      const isDiscount = isEmpty(offer) ? false : offer.discountType;

      isDiscount && validateOffer(offer);

      const productObj = {
        product: product._id,
        name: product.title,
        price: price,
        originalPrice: size?.price,
        quantity: 1,
        size: productSize,
        isDiscount,
        offer,
        bundledProduct: offer?.bundledProduct ?? [],
      };
      disp(addItem(productObj));
      disp(setTotal(price));
      disp(addCurrency(product.currency));
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error while adding product");
    }
  };

  function validateOffer(offer) {
    if (!offer?.isActivated || offer.isDeleted) {
      throw Error(notFound("Offer"));
    }
    if (offer.totalDiscount === 0) {
      throw Error(total_Disocunt);
    }
    if (Date.now() > new Date(offer.endDate)) {
      throw Error(offerExpire);
    }
  }

  const calculateDiscountedPrice = () => {
    if (isEmpty(offer)) {
      setPrice(product?.sizes[0]?.price);
    } else {
      if (offer?.discountType === "flat") {
        setPrice(size?.price - offer?.discountPrice);
      } else if (offer?.discountType === "percentage") {
        setPrice(size?.price - (size?.price * offer?.discountPrice) / 100);
      } else {
        setPrice(size?.price);
      }
    }
  };

  React.useEffect(() => {
    calculateDiscountedPrice();
    setProdctSize(size);
  }, [size]);

  return (
    <div
      className={classes.prdContainer}
      style={{ marginBottom, color: "#000", position: "relative" }}
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

        <div className={classes.priceTag}>
          {isEmpty(offer) ? (
            <span>€{price}</span>
          ) : offer?.discountType === "bundle" ? (
            <span>€{size?.price}</span>
          ) : (
            <div>
              <span className={classes.priceTextDecoration}>
                €{size?.price}
              </span>
              <span>€{price}</span>
            </div>
          )}
        </div>
        <div className={classes.prdPrice}>
          <div className={classes.additionInfoImgContainer}>
            <img src={vegan} className={classes.additionInfoImg} />
          </div>
          <div className={classes.additionInfoImgContainer}>
            <img src={glutenFree} className={classes.additionInfoImg} />
          </div>
          <div className={classes.additionInfoImgContainer}>
            <img src={spicy} className={classes.additionInfoImg} />
          </div>
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
        {product?.sizes?.length > 1 && (
          <div className={classes.additionalInfoContainer}>
            {product?.sizes?.map((sizeObj) => (
              <FoodType
                sizeObj={sizeObj}
                classes={classes}
                selectedSize={productSize}
                setSelectedSize={setProdctSize}
                offer={offer}
                setPrice={setPrice}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className={classes.actionsPrdContainer}
        title="Add to cart"
        onClick={addToCart}
        style={{
          border: showBorder && "2px solid #cb0e0e",
        }}
      >
        <img src={img} />
      </div>
    </div>
  );
};

export default OfferCard;

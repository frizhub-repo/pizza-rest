import React from "react";
import classes from "./OfferCard.module.css";
import { Typography, Divider } from "@material-ui/core";
import Descriptions from "./Descriptions";
import spicy from "../../images/hot.png";
import vegan from "../../images/vegan.png";
import glutenFree from "../../images/gluten.png";
import AdditionalInfo from "./AdditionalInfo";
import { createDiscountStats } from "api/public";
import FoodType from "./FoodType";
import classNames from "classnames";
import { addCurrency, addItem, setTotal } from "../../actions";
import { useDispatch } from "react-redux";
import img from "../../Assets/images/shopping-basket.png";
import { isEmpty } from "utils/common";
import messages from "utils/messages";
import { toast } from "react-toastify";
import { useRestaurantContext } from "Context/restaurantContext";

const OfferCard = ({
  product,
  showBorder = false,
  marginBottom = "20px",
  offer = {},
  size = {},
  setDiscountList,
  discountList,
  isDelivery = true,
}) => {
  const [price, setPrice] = React.useState(0);
  const [productSize, setProdctSize] = React.useState(null);
  const { restaurant, customerData: { _id: customerId } = {} } =
    useRestaurantContext();

  const disp = useDispatch();
  const discountedPrice = price > 0 ? price : 0;
  // Add to cart items
  const addToCart = async () => {
    if (!isDelivery) return;
    try {
      const isDiscount = isEmpty(offer) ? false : offer.discountType;

      isDiscount && validateOffer(offer);

      const productObj = {
        product: product._id,
        name: product.title,
        price: discountedPrice,
        originalPrice: size?.price,
        quantity: 1,
        size: productSize,
        isDiscount,
        offer,
        bundledProduct: offer?.bundledProduct ?? [],
      };
      disp(addItem(productObj));
      disp(setTotal(discountedPrice));
      disp(addCurrency(product.currency));
      if (!isEmpty(offer)) {
        let discount_stat_click = {
          type: "click",
          discountType: "DeliveryDiscount",
          discount: offer._id,
        };
        await createDiscountStats(discount_stat_click);
      }
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
      throw Error(messages.notFound("Offer"));
    }
    if (offer.totalDiscount === 0) {
      throw Error(messages.total_Disocunt);
    }
    if (Date.now() > new Date(offer.endDate)) {
      throw Error(messages.offerExpire);
    }

    const value =
      offer?.discountType === "bundle" ? "bundled" : offer?.discountType;
    let updatedDiscountList = [];
    for (const discount of discountList[value]) {
      if (discount.offer._id === offer?._id) {
        let customerExist = false;
        const updateCustomerUsage = offer?.customerUsage?.map(
          ({ customer, usage }) => {
            if (customer === customerId) {
              if (
                offer?.maxNoOfUsage === usage ||
                offer?.maxNoOfUsage < usage + 1
              ) {
                throw Error(messages.maximumNoOfUsage);
              }
              customerExist = true;
              return { usage: usage + 1, customer };
            } else {
              return { customer, usage };
            }
          }
        );
        if (!customerExist) {
          updateCustomerUsage.push({ customer: customerId, usage: 1 });
        }

        updatedDiscountList.push({
          ...discount,
          offer: {
            ...discount.offer,
            customerUsage: updateCustomerUsage,
            totalDiscount: discount.offer.totalDiscount - 1,
          },
        });
      } else {
        updatedDiscountList.push(discount);
      }
    }
    setDiscountList({
      ...discountList,
      [value]: updatedDiscountList,
    });
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
    if (size) {
      calculateDiscountedPrice();
      setProdctSize(size);
    }
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
              : `${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`
          }
          alt="Product"
          className={classes.prdImg}
        />
        {isEmpty(offer) ? null : (
          <div className={classes.priceTagContainer}>
            <span className={classes.priceText}>
              {offer?.discountType === "bundle"
                ? "1x" + offer?.bundledProduct?.length
                : offer?.discountType === "percentage"
                ? "-" + offer?.discountPrice + "%"
                : "-" + Math.round((size?.price - price) * 100) / 100 + "€"}
            </span>
          </div>
        )}

        <div className={classes.priceTag}>
          {isEmpty(offer) ? (
            <span>€{discountedPrice}</span>
          ) : offer?.discountType === "bundle" ? (
            <span>€{size?.price}</span>
          ) : (
            <div>
              <span className={classes.priceTextDecoration}>
                €{size?.price}
              </span>
              <span>€{discountedPrice}</span>
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
          <Typography className="wrapTextIntoOneLine">
            Description: {product?.description}
          </Typography>
        </div>
        <Descriptions
          title="Allergeni"
          arr={product?.allergies}
          isAllergy={true}
          classes={classes}
        />
        <Descriptions
          title="Ingredients"
          arr={product?.ingredients}
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

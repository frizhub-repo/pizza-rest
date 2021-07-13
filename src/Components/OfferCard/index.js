import React from "react";
import classes from "./OfferCard.module.css";
import { Typography, Divider } from "@material-ui/core";
import crossIcon from "../../Assets/images/googlelog.png";
import editIcon from "../../Assets/images/googlelog.png";
import AdditionalInfo from "./AdditionalInfo";
import Descriptions from "./Descriptions";
import { Popconfirm } from "antd";
import classNames from "classnames";

const OfferCard = ({ product, marginBottom = "20px" }) => {
  const restaurant = {
    logoUrl:
      "https://www.shutterstock.com/image-vector/discount-offer-tag-icon-shopping-coupon-1208529259",
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
        <Descriptions
          title="Offer Items"
          arr={product?.allergies}
          isAllergy={true}
        />
        <div className={classes.additionalInfoContainer}>
          <AdditionalInfo title="End date" value="25/08/2021" />
          <AdditionalInfo title="# for user" value="1" />
          <AdditionalInfo title="# Total" value="100" />
        </div>
      </div>
      <div className={classes.actionsPrdContainer}>
        <span className={classes.cp}>
          <img src={editIcon} className={classes.actionImg} />
        </span>
        <Divider className={classes.actionDivider} />
        <Popconfirm
          title={`Are you sure to want to delete this product?`}
          okText="Yes"
          cancelText="No"
        >
          <span className={classes.cp}>
            <img src={crossIcon} className={classes.actionImg} />
          </span>
        </Popconfirm>
      </div>
    </div>
  );
};

export default OfferCard;

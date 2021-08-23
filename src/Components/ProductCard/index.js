import React from "react";
import classes from "./ProductCard.module.css";
import { Typography } from "@material-ui/core";
import spicy from "Assets/images/hot.png";
import vegan from "Assets/images/vegan.png";
import glutenFree from "Assets/images/gluten-free.png";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import Allergies from "./Allergies";

const ProductCard = ({ product, marginBottom = "20px" }) => {
  return (
    <div className={classes.prdContainer} style={{ marginBottom }}>
      <div className={classes.imgPrdContainer}>
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/${product?.images?.[0]}`}
          className={classes.prdImg}
        />
        <div className={classes.prdPrice}>
          <span className={classes.priceTag}>
            {product?.currency}
            {product?.sizes[0]?.price}
          </span>
        </div>
      </div>
      <div className={classes.mainPrdContainer}>
        <div
          className={`${classes.tb} ${classes.th} ${classes.borderTopRightRadius}`}
        >
          <Typography variant="h6" className={classes.overflowText}>
            {product?.title}
          </Typography>
        </div>
        <div className={`${classes.tb} ${classes.th}`}>
          <Typography>Ingredients: {product?.description}</Typography>
        </div>
        <Allergies
          title="Allergies"
          arr={product?.allergies}
          isAllergy={true}
        />
        <div className={classes.additionalInfoContainer}>
          <ProductAdditionalInfo
            src={vegan}
            title="VEGAN"
            isSelected={product?.foodType?.vegan}
          />
          <ProductAdditionalInfo
            src={glutenFree}
            title="GLUTEN-FREE"
            isSelected={product?.foodType?.glutenFree}
          />
          <ProductAdditionalInfo
            src={spicy}
            title="SPICY"
            isSelected={product?.foodType?.spicy}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

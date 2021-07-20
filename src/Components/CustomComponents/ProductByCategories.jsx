import React from "react";
import OfferCard from "../OfferCard/index";

const ProductByCategories = ({ item, isProductAddedToCart }) => {
  return (
    <div>
      {item?.products?.length
        ? item?.products?.map((product) => (
            <OfferCard
              product={product}
              showBorder={isProductAddedToCart(product._id)}
            />
          ))
        : null}
    </div>
  );
};

export default ProductByCategories;

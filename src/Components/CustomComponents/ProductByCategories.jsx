import React from "react";
import OfferCard from "../OfferCard/index";

const ProductByCategories = ({ products, isProductAddedToCart }) => {
  return (
    <div>
      {products?.length
        ? products?.map((product) => (
            <OfferCard
              product={product}
              showBorder={isProductAddedToCart(product._id)}
              size={product?.sizes[0]}
            />
          ))
        : null}
    </div>
  );
};

export default ProductByCategories;

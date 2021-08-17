import OfferCard from "../OfferCard/index";
import React from "react";

const ListProducts = ({ products }) => {
  return (
    <div>
      {products?.length
        ? products?.map((product) => (
            <OfferCard
              product={product}
              size={product?.sizes[0]}
              isDelivery={false}
            />
          ))
        : null}
    </div>
  );
};

export default ListProducts;

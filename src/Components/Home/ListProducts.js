import OfferCard from "../OfferCard/index";
import React from "react";

const ListProducts = ({ products }) => {
  return (
    <div>
      {products?.length
        ? products?.map((product) => <OfferCard product={product} />)
        : null}
    </div>
  );
};

export default ListProducts;

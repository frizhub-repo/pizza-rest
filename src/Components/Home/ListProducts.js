import React from "react";
import ProductCard from "Components/ProductCard";

const ListProducts = ({ products }) => {
  return (
    <div>
      {products?.length
        ? products?.map((product) => <ProductCard product={product} />)
        : null}
    </div>
  );
};

export default ListProducts;

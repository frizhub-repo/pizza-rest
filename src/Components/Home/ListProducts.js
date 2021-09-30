import React from "react";
import ProductCard from "Components/ProductCard";

const ListProducts = ({ products }) => {
  return (
    <div>
      {products?.length ? (
        products?.map((product) => <ProductCard product={product} />)
      ) : (
        <span>This menu don't have any products</span>
      )}
    </div>
  );
};

export default ListProducts;

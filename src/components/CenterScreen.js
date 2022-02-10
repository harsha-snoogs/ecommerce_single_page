import React from "react";
import Card from "./Card";

function CenterScreen(props) {
  const { productData, filteredData } = props;
  console.log(productData);

  return (
    <>
      <div>Products</div>
      <div className="row row-cols-1 row-cols-md-4 g-4 border">
        {productData.map((product) => <Card key={product.productId} product={product} />)}
      </div>
    </>
  );
}

export default CenterScreen;

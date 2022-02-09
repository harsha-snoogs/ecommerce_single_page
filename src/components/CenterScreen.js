import React from "react";
import Card from "./Card";

function CenterScreen(props) {
  const { productData } = props;
  console.log(productData);

  return (
    <>
      <div>Products</div>
      <div className="row row-cols-1 row-cols-md-4 g-4 border">
        {productData.map((product, index) => <Card key={index} product={product} />)}
      </div>
    </>
  );
}

export default CenterScreen;

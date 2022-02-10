import React, { useEffect, useState } from "react";
import Card from "./Card";


function CenterScreen(props) {
  const { productData, filteredData } = props;
  
  const [mainData, setMainData] = useState(productData);

  useEffect(() => {
    if (filteredData.length !== 0) {
      setMainData(filteredData);
    } else {
      setMainData(productData);
    }
  }, [productData, filteredData]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {mainData.map((product) => (
          <Card key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
}

export default CenterScreen;

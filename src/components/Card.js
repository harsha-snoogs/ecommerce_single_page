import React from "react";

function Card(props) {
  const { product } = props;

  let mrpPrice =
    product.price !== product.mrp ? (
      <span className="text-decoration-line-through fs-6 text-secondary fw-light">{`Rs.${product.mrp}`}</span>
    ) : (
      ""
    );
 
  return (
    <div className="col">
      <div className="card h-100 shadow-sm p-3 mb-3 bg-body rounded">
        <img src={product.searchImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className="card-text">{product.additionalInfo}</p>
        </div>
        <div className="card-footer" style={{border: "none"}}>
          <span className="fw-bolder">{`Rs.${product.price}`}</span> {mrpPrice} <span className="text-danger">{product.discountDisplayLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

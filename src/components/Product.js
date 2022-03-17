import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product.slug} className="card">
      <Link to={`/product/${product.slug}`}>
      <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/${product.slug}`}>
          <h2>{product.name}</h2>
      </Link>
      <div className="card-body">

        <Rating rating={product.rating} numReviews={product.numReviews} />

        <div className="price"><strong>${product.pice}</strong></div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

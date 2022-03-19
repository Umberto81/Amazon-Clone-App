import axios from "axios";
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;


  const addToCartHandler = async (item) => {
        //checks if the item exists into the shopping cart
        const itemExists = cartItems.find((x) => x._id === product._id);
        const quantity = itemExists ? itemExists.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product out of stock");
      return;
    }
    ctxDispatch({
      type: "CART-ADD-ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? <Button variant="light" disbled>Out of Stock</Button>
        :
        <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
      }
        
      </Card.Body>
    </Card>
  );
}

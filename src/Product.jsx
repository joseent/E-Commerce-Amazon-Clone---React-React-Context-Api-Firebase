import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        image,
        title,
        price,
        rating
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <img src={image} alt="product-img" />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


export default function CheckoutProduct({id,title,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket = () =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id
    })
  }

  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt="product"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {title}
        </p>
        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating)
            .fill()
            .map((_,i)=>(
              <p key={id* i}>⭐</p>
            ))
          }</div>
        <button onClick={removeFromBasket}>Remove to basket</button>
      </div>
    </div>
  );
}

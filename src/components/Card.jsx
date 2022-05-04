import React from "react";
import style from "./Card.module.css";

function Card({ cartItem, quantity }) {
  return (
    <article>
      <p className={style.cardTitle}>{cartItem.title}</p>
      <img src={cartItem.thumbnailUrl} alt="img" />
      {quantity && (
        <p>
          Quantité : <span className={style.quantity}>{quantity}</span>
        </p>
      )}
    </article>
  );
}

export default Card;

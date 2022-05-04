import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cart/action";
import Card from "../../components/Card";
import style from "./Cart.module.css";

function Cart() {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleEmptyButton = () => {
    dispatch(emptyCart());
  };

  // Obtenir la quantité par id
  var quantityArray = cart.reduce(function (obj, b) {
    obj[b.id] = ++obj[b.id] || 1;
    return obj;
  }, {});

  // Obtenir un tableau sans doublons
  const uniques = cart.filter((value, index, self) => index === self.findIndex((t) => t.id === value.id));

  return (
    <main>
      <div className={style.btnContainer}>
        <button
          className={style.emptyButton}
          onClick={() => {
            handleEmptyButton();
          }}>
          Vider le panier
        </button>
      </div>

      <section className={style.section}>
        {!cart.length ? (
          <h1>Panier vide</h1>
        ) : (
          uniques.map((cartItem, index) => {
            const quantity = quantityArray[cartItem.id];
            return (
              <div key={index} className={style.card}>
                <Card quantity={quantity} cartItem={cartItem} key={cartItem.id} />
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Cart;

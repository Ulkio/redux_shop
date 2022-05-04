import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/cart/action";
import { loadItems } from "../../redux/items/action";
import Card from "../../components/Card";
import style from "./Home.module.css";

function Home() {
  const { items } = useSelector((state) => state.itemsReducer);
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  const handlePlusButton = (item) => {
    dispatch(addItemToCart(item));
  };

  const nextPage = () => {
    if (pagination < items.length - 9) {
      setPagination(pagination + 9);
    }
  };

  const prevPage = () => {
    if (pagination > 0) {
      setPagination(pagination - 9);
    }
  };

  return (
    <main>
      <div className={style.paginationContainer}>
        <button
          onClick={() => {
            prevPage();
          }}
          className={style.pagination}>
          <img src="/assets/img/arrow-left.svg" alt="left" />
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          className={style.pagination}>
          <img src="/assets/img/arrow-right.svg" alt="right" />
        </button>
      </div>

      <section className={style.section}>
        {items.map((item) => {
          return (
            item.id > pagination &&
            item.id < pagination + 10 && (
              <div key={item.id} className={style.card}>
                <Card cartItem={item} />
                <img
                  className={style.addButton}
                  onClick={() => {
                    handlePlusButton(item);
                  }}
                  src="/assets/img/plus-circle.svg"
                  alt="addtocart"
                />
              </div>
            )
          );
        })}
      </section>
    </main>
  );
}

export default Home;

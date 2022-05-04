import { ADD_ITEM_TO_CART, EMPTY_CART } from "../type";

export const addItemToCart = (data) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: data,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

import { ADD_ITEM_TO_CART, EMPTY_CART, REMOVE_ITEM_FROM_CART } from "../type";

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_ITEM_FROM_CART:
      const id = action.payload.id;
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== id),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default cartReducer;

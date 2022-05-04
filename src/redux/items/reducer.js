import { LOAD_ITEMS } from "../type";

const INITIAL_STATE = {
  items: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        items: [...action.payload],
      };
    default:
      return state;
  }
};

export default itemsReducer;

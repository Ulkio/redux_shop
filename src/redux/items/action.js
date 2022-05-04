import { getAllItems } from "../../api/api";
import { LOAD_ITEMS } from "../type";

export const loadItems = () => async (dispatch) => {
  const data = await getAllItems();
  return dispatch({
    type: LOAD_ITEMS,
    payload: data,
  });
};

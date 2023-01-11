// reducer always containes initial state
// reducer is a arrow function which takes state and action as a parameter

import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
  ],
};
export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:payload};
    default:
      return state;
  }
};

export const selectedProductReducer = (state={}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return {...state,...payload};
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
    default:
      return state;
  }
};



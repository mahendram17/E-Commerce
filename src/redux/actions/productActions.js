// action is function which always return an Object
// action always have type and payload 
import { ActionTypes } from "../constants/action-types"
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS, // constants from action-types.js file
        payload:products

    }
}

export const selectedProducts=(products)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS, // constants from action-types.js file
        payload:products

    }
}
export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };


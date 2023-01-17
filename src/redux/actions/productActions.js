// action is function which always return an Object
// action always have type and payload 
import FakeStoreApi from "../../apis/FakeStoreApi"
import { ActionTypes } from "../constants/action-types"

export const fetchProducts =  ()=> async (dispatch)=>{
        const response = await FakeStoreApi.get('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data}) 
}

export const fetchProduct =  (id)=> async (dispatch)=>{
    const response = await FakeStoreApi.get(`/products/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data}) 
}

export const addToCartProduct= (id)=> async (dispatch)=>{
    const response = await FakeStoreApi.get(`/products/${id}`)
    console.log("Inside add to cart",response)
    dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data}) 
}
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


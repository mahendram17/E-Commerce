import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProduct,removeSelectedProduct , addToCartProduct} from '../redux/actions/productActions'
import { Audio } from 'react-loader-spinner'
export default function () {
    const product=useSelector((state)=>state.product)
    const { image, title, price, category, description } = product;
    const {productId}=useParams(); // to get id which is in url
  
    const dispatch=useDispatch();
    console.log("single product",product)

// const productDetailURL='https://fakestoreapi.com/products/'
//     const fetchProductDetail=async ()=>{
//         const response=await axios.get(productDetailURL+''+productId).catch((err)=>{
//             console.log(err)
//         })
       
//       dispatch(selectedProducts(response.data))
       
//     }
    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
          dispatch(removeSelectedProduct());
        };
      }, [productId]);
  return (
   
    <div className="ui grid container">
        <br></br>
    {Object.keys(product).length === 0 ? (
      <div><Audio/></div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content" onClick={()=>dispatch(addToCartProduct({productId}))}>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

  
  )
}

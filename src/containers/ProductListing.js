import React,{ useEffect, useState }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { Audio } from 'react-loader-spinner'

import { setProducts } from '../redux/actions/productActions'
export default function () {
  const [load,setLoad]=useState(null)
    const products=useSelector((state)=>state)
    const dispatch=useDispatch();
    console.log("products are :",products)
const baseProductUrl='https://fakestoreapi.com/products'
    const fetchProducts=async ()=>{
        const response=await axios.get(baseProductUrl).catch((err)=>{
            console.log(err)
        })
        //console.log("data response :",response.data)
      
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("All Products",products)
  return (
    <div className='ui grid container'>
        <br></br>
       <ProductComponent/>
        </div>
  )
}

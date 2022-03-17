import React, { useEffect, useReducer, useState } from 'react'
//import data from '../data';
import Product from '../components/Product';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) =>{
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}
      case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
      case 'FETC_FAIL':
        return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}
export default function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true, 
    error: ''
  });

  useEffect(() => {
    const fetchData = async () =>{
      dispatch({type: "FETCH_REQUEST"});
      try {
        const result = await axios.get("/api/products");
        dispatch({type: "FETCH_SUCCESS", payload: result.data})
      } catch (error) {
        dispatch({type: "FETCH_FAIL", payload: error.message});
      }
      //setProducts(result.data);
    }
    fetchData();

  }, [])
  
  return (
    <div className="row center">
          {
          loading ? (<div>Loading...</div>) : error ? (<div>Error</div>) : 
          (products.map((product) => (
            <Product key={product.slug} product={product}></Product>
          )))
          }
          ;
        </div>
  )
}

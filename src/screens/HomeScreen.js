import React, { useEffect, useReducer } from 'react'
import Product from '../components/Product';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Col, Row } from 'react-bootstrap';

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
    }
    fetchData();

  }, [])
  
  return (
    <div className="products">
      <Row>
          {
          loading ? (<div>Loading...</div>) : error ? (<div>Error</div>) : 
          (products.map((product) => (
            <Col  key={product.slug} sm={6} md={4} lg={3} className='b-3'>

            <Product key={product.slug} product={product}></Product>
            </Col>

            )))
          }
          ;
          </Row>
        </div>
  )
}

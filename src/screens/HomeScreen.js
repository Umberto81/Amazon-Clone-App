import React, { useEffect, useState } from 'react'
//import data from '../data';
import Product from '../components/Product';
import axios from 'axios';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get("/api/products");
      setProducts(result.data);
    }
    fetchData();

  }, [])
  
  return (
    <div className="row center">
          {products.map((product) => (
            <Product key={product.slug} product={product}></Product>
          ))}
          ;
        </div>
  )
}

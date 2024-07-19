import React from 'react'
import { useParams } from 'react-router-dom';
import ProductMainCategory from './ProductMainCategory';

const CategoryDetail = () => {
    const { name } = useParams();
  return (
    <>
    <div style={{marginTop:'16px'}}>
    <ProductMainCategory/>
    <div style={{color:'#9C2946'}}>
        <h1>{name} Details</h1>
    </div>
    </div>
   
    </>
  )
}

export default CategoryDetail

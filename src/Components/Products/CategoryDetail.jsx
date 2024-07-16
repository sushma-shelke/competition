import React from 'react'
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const { name } = useParams();
  return (
    <div style={{color:'#9C2946'}}>
        <h1>{name} Details</h1>
    </div>
  )
}

export default CategoryDetail

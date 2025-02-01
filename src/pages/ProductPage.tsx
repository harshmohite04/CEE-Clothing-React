import React from 'react'
import Header from '../components/Header'
import { BreadCrums } from '../components/BreadCrums'
import ProductCard from '../components/ProductCard'
function ProductPage() {
  return (
    <div>
        <Header/>
        <BreadCrums/>
        <ProductCard/>
    </div>
  )
}

export default ProductPage
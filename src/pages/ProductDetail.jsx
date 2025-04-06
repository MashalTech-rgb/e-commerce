import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import BreadcrumbItems from '../components/Breadscrumb'
import ProductCard from '../components/ProductCards'
import Description from '../components/Description'
import RelatedProducts from '../components/RelatedProduct'

const ProductDetail = () => {
  return (
    <>
      <Header/>
      <BreadcrumbItems/>
      <ProductCard/>
      <Description/>
      <RelatedProducts/>
      <Footer/>
    </>
  )
}

export default ProductDetail
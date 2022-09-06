import React from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProduct from '../components/home/FeaturedProduct'

const HomePage = () => {
  return (
    <>
      <FeaturedProduct/>
      <Collection/>
      <Categories/>
    </>
  )
}

export default HomePage

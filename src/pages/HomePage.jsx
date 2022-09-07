import React from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProduct from '../components/home/FeaturedProduct'
import NewArrival from '../components/home/NewArrival'

const HomePage = () => {
  return (
    <>
      <FeaturedProduct/>
      <NewArrival/>
      <Collection/>
      <Categories/>
    </>
  )
}

export default HomePage

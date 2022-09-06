import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
// import AppURL from '../../api/AppURL';
// import axios from 'axios'
// import CollectionLoading from '../PlaceHolder/CollectionLoading';
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <>
      <Container>
        <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>

        <Row>
          <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
            <Card className="image-box card w-100">
              <img className="center w-75" src='https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q' />   
              <Card.Body> 
              {/* <p className="product-name-on-card">{FeaturedList.title}</p> */}
              {/* <p className="product-price-on-card">Price : ${FeaturedList.price}</p>*/}
            </Card.Body> 
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  )
}

export default Collection

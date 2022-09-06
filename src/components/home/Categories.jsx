import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

const Categories = () => {
  return (
    <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55">
                <h2> CATEGORIES</h2>
                <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>
                <Col key={1} xl={8} lg={8} md={2} ms={12} xs={12}>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} ms={6} xs={6}>
                            <Card className="h-100 w-100 text-center">
                                <Card.Body>
                                    <img className="center" src='https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q' /> 
                                    <h5 className='category-name'>Mobile</h5>  
                                    {/* <p className="product-price-on-card">Price : ${FeaturedList.price}</p>*/}
                                </Card.Body> 
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} ms={6} xs={6}>
                            <Card className="h-100 w-100 text-center">
                                <Card.Body>
                                    <img className="center" src='https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q' /> 
                                    <h5 className='category-name'>Mobile</h5>  
                                    {/* <p className="product-price-on-card">Price : ${FeaturedList.price}</p>*/}
                                </Card.Body> 
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Categories

import React, { Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const NewArrival = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Fragment>
      <Container className='text-center' fluid={true}>
        <div className='section-title text-center mb-55'>
          <h2>
            New Arrival
          </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>

        <Row>
        <Slider {...settings}>
          <div>
          <Card className="image-box card">
              <img className="center" src='https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q' />   
              <Card.Body> 
              {/* <p className="product-name-on-card">{FeaturedList.title}</p> */}
              {/* <p className="product-price-on-card">Price : ${FeaturedList.price}</p>*/}
            </Card.Body> 
            </Card>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
        </Row>

      </Container>
    </Fragment>
  )
}

export default NewArrival

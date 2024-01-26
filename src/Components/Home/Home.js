import React from 'react'
import './Home.css'
import Logo from '../../assets/WhyLogo.svg'
import HomeImage from '../../assets/Home/AI.png'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div id='home' className='home d-flex align-items-center'>
      <div className='home-bg'></div>
      <Row className='home-content w-100 mx-0'>
        <Col className='col-12 col-lg-6 d-flex align-items-center justifu-content-center '>
          <Container className='text-center'>
            <Image src={Logo} className='img-fluid home-logo mb-3 wow animate__fadeInUp' data-wow-delay=".5s" alt="logo" />
            <h3 className='mb-5 wow animate__fadeInUp' data-wow-delay=".8s">Build Intelligence</h3>
            <p className='px-lg-4 wow animate__fadeInUp' data-wow-delay="1s">Crafting Futuristic Custom Software Solutions with Advanced AI Integration</p>
          </Container>
        </Col>
        <Col className='col-12 col-lg-6 d-none d-lg-block px-0'>
          <Image src={HomeImage} className='img-fluid wow animate__fadeInRight' data-wow-duration="1.2s" />
        </Col>
      </Row>
    </div>
  )
}

export default Home
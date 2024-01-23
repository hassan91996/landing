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
            <Image src={Logo} className='img-fluid home-logo mb-3' alt="logo" />
            <h3 className='mb-5'>Build Intelligence</h3>
            <p className='px-lg-4'>Crafting Futuristic Custom Software Solutions with Advanced AI Integration</p>
          </Container>
        </Col>
        <Col className='col-12 col-lg-6 d-none d-lg-block px-0'>
          <Image src={HomeImage} className='img-fluid' />
        </Col>
      </Row>
    </div>
  )
}

export default Home
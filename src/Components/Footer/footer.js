import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './footer.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='Footer mt-4'>
            <div className='footer-bg'></div>
            <Container className=''>
                <div className='footer-top-border'></div>
                <Row className='py-4 justify-content-between px-3'>
                    <Col className='col-12 col-lg-6 text-center text-lg-start wow animate__fadeInLeft' data-wow-delay=".4s">
                        <Image src={Logo} className='img-fluid footer-logo mb-4' />
                        <p>InBots.ai© 2024. All Rights Reserved. Terms and Conditions apply</p>
                    </Col>
                    <Col className='col-12 col-lg-4 text-center text-lg-start wow animate__fadeInRight' data-wow-delay=".4s">
                        <h5 className='mb-3'>Legal</h5>
                        <ul><li className='justify-content-center justify-content-lg-start'><Link to="/policy" target="_blank">Privacy Policy</Link></li></ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
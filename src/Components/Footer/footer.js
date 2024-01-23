import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './footer.css'
import Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='Footer mt-4'>
            <Container className=''>
                <div className='footer-top-border'></div>
                <Row className='justify-content-between py-4'>
                    <Col className='col-12 col-lg-6 text-center'>
                        <Image src={Logo} className='img-fluid footer-logo mb-4'/>
                        <p className='mb-0'>InBots.ai© 2024. All Rights Reserved. Terms and Conditions apply</p>
                    </Col>
                    <Col className='col-12 col-lg-4 text-center text-lg-start mt-4 mt-lg-0'>
                        <h5>Legal</h5>
                        <ul className='d-flex flex-column align-items-center align-items-lg-start'>
                            <li><a href='#'>Terms & Conditions</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Help Center</a></li>
                            <li><a href='#'>Support</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
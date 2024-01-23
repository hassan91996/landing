import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './footer.css'
import Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className='Footer mt-4'>
            <div className='footer-bg'></div>
            <Container className=''>
                <div className='footer-top-border'></div>
                <div className='text-center py-5'>
                    <Image src={Logo} className='img-fluid footer-logo mb-5' />
                    <p>InBots.ai© 2024. All Rights Reserved. Terms and Conditions apply</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
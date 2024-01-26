import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div id='about' className='about-con py-5'>
            <Container className='pb-5 mb-5'>
                <div className='col-12 col-lg-8 text-lg-start mt-5 pt-5'>
                    <h1 className='mb-4 pt-5 wow animate__fadeInUp' data-wow-delay=".2s">About Us</h1>
                    <h4 className='wow animate__fadeInUp' data-wow-delay=".4s">InBots stands at the forefront of technological innovation, specializing in bespoke software solutions enhanced by artificial intelligence. We leverage AI to streamline development processes, ensuring efficient, cutting-edge results for every project.</h4>
                </div>
            </Container>
        </div>
    )
}

export default About
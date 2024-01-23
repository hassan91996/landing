import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div id='about' className='about-con py-5'>
            <Container className='pb-5 mb-5'>
                <div className='col-12 col-lg-8 text-lg-start'>
                    <h1 className='mb-4 mb-lg-5'>About Us</h1>
                    <h4>InBots stands at the forefront of technological innovation, specializing in bespoke software solutions enhanced by artificial intelligence. We leverage AI to streamline development processes, ensuring efficient, cutting-edge results for every project.</h4>
                </div>
            </Container>
        </div>
    )
}

export default About
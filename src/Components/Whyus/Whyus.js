import React from 'react'
import './Whyus.css'
import { Container, Image } from 'react-bootstrap'
import WhyLogo from '../../assets/WhyLogo.svg'

const Whyus = () => {
    return (
        <div id='whyus' className='Why-con py-3 py-lg-5 my-4 my-lg-5'>
            <div className='why-bg'></div>
            <Container className='py-3 text-center why-data'>
                <h1 className='mb-3 mb-lg-5'>Why choosing</h1>
                <Image src={WhyLogo} className='why-logo mb-4 img-fluid'  alt='logo'/>
                  <h3 className='py-3 py-lg-4'>At InBots, we don't just develop software; we innovate solutions. Our AI-driven approach sets us apart, ensuring each project is a blend of technical excellence and forward-thinking. Trust us to deliver solutions that are not only effective but also ahead of their time.</h3>
            </Container>
        </div>
    )
}

export default Whyus
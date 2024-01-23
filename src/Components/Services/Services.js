import React from 'react'
import './Services.css'
import { Container, Image } from 'react-bootstrap'
import TopImage from '../../assets/Services/smartphone_mockup_hand_robot.png'
import BootomImage from '../../assets/Services/data analytics.png'

const Services = () => {
    return (
        <div id='services' className='services-con my-4'>
            <div className='top-img d-none d-lg-block'>
                <Image src={TopImage} className='img-fluid' alt='topImage' />
            </div>
            <div className='bottom-img d-none d-lg-block'>
                <Image src={BootomImage} className='img-fluid' alt='bootomImage' />
            </div>
            <Container className=''>
                <div className='Col-12 col-xl-9 col-xxl-8 text-center text-lg-start'>
                    <h1 className='mb-4'>Services</h1>
                    <div className='service-con my-4 my-lg-5 pb-1'>
                        <div className='service-header'>
                            AI-Driven Software Development
                        </div>
                        <p className='my-4'>Experience the synergy of human creativity and AI efficiency. Our software development is supercharged by AI algorithms, enabling faster, smarter, and more reliable solutions.</p>

                    </div>
                    <div className='service-con my-4 my-lg-5 pb-1'>
                        <div className='service-header'>
                            Cloud Solutions & Integration
                        </div>
                        <p className='my-4'>
                            Elevate your operations with our AI-enhanced cloud services. Enjoy seamless cloud integration, optimized for performance, security, and scalability.</p>
                    </div>
                    <div className='service-con my-4 my-lg-5 pb-1'>
                        <div className='service-header'>
                            Mobile & Web Application Development
                        </div>
                        <p className='my-4'>
                            In the digital realm, your presence must be impactful. We create responsive, AI-optimized web and mobile applications that offer compelling user experiences and drive engagement.
                        </p>
                    </div>
                    <div className='service-con my-4 my-lg-5 pb-1'>
                        <div className='service-header'>
                            Data Analytics & Business Intelligence
                        </div>
                        <p className='my-4'>
                            Turn data into strategic insights. Our AI-driven analytics services empower you with actionable intelligence for informed decision-making
                        </p>
                    </div>
                    <div className='service-con my-4 my-lg-5 pb-1'>
                        <div className='service-header'>
                            IoT and Smart Technology Integration
                        </div>
                        <p className='my-4'>
                            Harness the power of IoT with AI. We blend smart technology with AI algorithms for more connected, efficient, and intelligent operations
                        </p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Services
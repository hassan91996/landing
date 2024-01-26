import React from 'react'
import './Policy.css'
import { Container, Image } from 'react-bootstrap'
import WhyLogo from '../../assets/WhyLogo.svg'

const Policy = () => {
    return (
        <div  className='Why-con py-3 py-lg-5 my-4 my-lg-5'>
            <div className='why-bg'></div>
            <Container className='py-3 text-center why-data'>
                <h1 className='mb-3 mb-lg-5'>Privacy Policy</h1>
                <Image src={WhyLogo} className='why-logo mb-4 img-fluid' alt='logo' />
                <h3 className='py-3 py-lg-4'>We collect basic personal information such as your name and email address solely for the purpose of setting up and managing your account. Rest assured, your data is kept secure and confidential with us, and under no circumstances do we sell or trade your personal information to third parties.</h3>
            </Container>
        </div>
    )
}

export default Policy
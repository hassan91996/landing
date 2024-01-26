import React from 'react'
import Home from '../Components/Home/Home'
import About from '../Components/About/about'
import Services from '../Components/Services/Services'
import Whyus from '../Components/Whyus/Whyus'
import Contact from '../Components/Contact/contact'

const Landing = () => {
    return (
        <div>
            <Home />
            <About />
            <Services />
            <Whyus />
            <Contact />
        </div>
    )
}

export default Landing
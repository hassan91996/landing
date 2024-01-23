import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import './header.css'
import { useEffect, useState } from 'react';

function Header() {
    const [bgcolor, setbgcolor] = useState('transparent');
    const navTo = (e, ele) => {
        e.preventDefault();
        var targetElement = document.getElementById(ele);
        var offset = targetElement.offsetTop - 100;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > 100) {
                setbgcolor('#fff')
            } else {
                setbgcolor('transparent')
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar style={{ background: bgcolor }} collapseOnSelect expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand onClick={(e) => navTo(e, 'home')} href="#home">
                    <Image src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-lg-end me-lg-5' id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link onClick={(e) => navTo(e, 'home')} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'about')} href="#about">About Us</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'services')} href="#services">Services</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'whyus')} href="#whyus">Why choosing InBots?</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'contact')} href="#contact" className='d-lg-none'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="#contact" onClick={(e) => navTo(e, 'contact')} className='d-none d-lg-block Contact-link'>Contact Us</Nav.Link>
            </Container>
        </Navbar>
    );
}
export default Header;
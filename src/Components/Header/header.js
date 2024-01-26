import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import './header.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bgcolor, setbgcolor] = useState('transparent');
    const [scrollToDiv, setscrollToDiv] = useState(false);
    const [targetEl, settargetEl] = useState('');
    const navTo = (e, ele) => {
        if (e) {
            e.preventDefault();
        }
        if (location.pathname !== '/') {
            navigate('/')
            setscrollToDiv(true)
            settargetEl(ele)
        }
        else {
            var targetElement = document.getElementById(ele);
            var offset = targetElement.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            let navlinks = document.querySelectorAll('.navbar-nav .nav-link')
            navlinks.forEach(ele => {
                ele.classList.remove('active')
            })
            let nav = document.querySelector(`.navbar-nav [href="/#${ele}"]`);
            nav.classList.add('active')
            if (scrollToDiv) {
                setTimeout(() => {
                    var targetElement = document.getElementById(ele);
                    var offset = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                    setscrollToDiv(false)
                    settargetEl('')
                }, 300);
            }

        }
    }
    useEffect(() => {
        if (scrollToDiv) {
            navTo(null, targetEl)
        }
        // eslint-disable-next-line 
    }, [navigate])
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
                <Navbar.Brand as={Link} to="#home" onClick={(e) => navTo(e, 'home')}>
                    <Image src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-lg-end me-lg-5' id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link onClick={(e) => navTo(e, 'home')} as={Link} to="#home">Home</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'about')} as={Link} to="#about">About Us</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'services')} as={Link} to="#services">Services</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'whyus')} as={Link} to="#whyus">Why choosing InBots?</Nav.Link>
                        <Nav.Link onClick={(e) => navTo(e, 'contact')} as={Link} to="#contact" className='d-lg-none'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to="#contact" onClick={(e) => navTo(e, 'contact')} className='d-none d-lg-block Contact-link'>Contact Us</Nav.Link>
            </Container>
        </Navbar>
    );
}
export default Header;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    return (
        <Container fluid className="bg-primary">
            <Container>
                <Navbar bg="dark" expand="md">
                    <Navbar.Brand href="/"><img src="logo.png"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Button variant="warning" className="enquire bg-secondary"><Nav.Link href="/contact">Contact</Nav.Link></Button>
                        </Nav>
                    </Navbar.Collapse>                    
                </Navbar>
            </Container>
        </Container>
    )
}

export default Navigation;
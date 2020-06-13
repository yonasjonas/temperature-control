import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'


const Navigation = () => {
    return (
        <Navbar bg="dark" expand="md">
            <Navbar.Brand href="/">Temperature control</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">  
                    <Nav.Link href="/">Home</Nav.Link> 
                    <Nav.Link href="/product">Product</Nav.Link>                            
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button variant="warning" className="enquire secondary">Enquire</Button>
        </Navbar>
    )
}

export default Navigation;
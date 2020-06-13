import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Boxes = () => {
    return (
        <Container fluid className="footer mt-4 mb-4">
            <Container className="p-3">
                <Row className="customsize">
                    <Col md="3">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>

                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>

                    </Col>
                    <Col md="3">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Product</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>

                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>




                    </Col>
                    <Col md="3">
                        <h1>24/7</h1>
                        <h2>Technical Support</h2>
                    </Col>
                    <Col md="3">
                        <h1>24/7</h1>
                        <h2>Technical Support</h2>
                    </Col>
                </Row>
            </Container>
        </Container>


    )
}

export default Boxes;
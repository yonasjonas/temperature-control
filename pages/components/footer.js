import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Boxes = () => {
    return (
        <Container fluid className="footer mt-4 mb-4">
            <Container className="p-3">
                <Row className="customsize">
                    <Col md="4">
                        <h4>About Us</h4>                         
                        <p>Temperature Control Ltd.</p>
                        <p>Suite 8 Grange Road</p>
                        <p>Office Park, Grange Road</p>
                        <p>Rathfarnham, Dublin 16</p>                        
                        <p>01-000-0000</p>
                        <p>info@tempcontrol.ie</p>
                    </Col>
                    <Col md="3">

                        <h4>Quick Links</h4>
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

                    <Col md="5">
                        <h4>Frontline Workers</h4>
                        <p>10% of profit goes to Matter hospital Covid-19 charity</p>
                        <a href="https://www.materfoundation.ie/"><img className="charityimage" src="matterfound.png"/></a>
                    </Col>

                </Row>

            </Container>
            <p className="text-center m-2 pb-3 copyright color-secondary">Copyright © 2020. Temperature Control Ltd.  All Rights Reserved.</p>
        </Container>


    )
}

export default Boxes;
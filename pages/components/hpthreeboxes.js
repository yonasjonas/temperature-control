import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Boxes = () => {
    return (
        <Container className="container hpthreeboxes mt-4 mb-4">
            <Row>
                <Col md="4">
                    <h1>24/7</h1>
                    <h2>Technical Support</h2>
                </Col>
                <Col md="4">
                    <h1>24/7</h1>
                    <h2>Technical Support</h2>
                </Col>
                <Col md="4">
                    <h1>24/7</h1>
                    <h2>Technical Support</h2>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Boxes;
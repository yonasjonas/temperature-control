import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TopInfo = () => {
    return (
        <Container fluid className="container-fluid bg-secondary">
            <Container className="">
                <Row>
                    <Col md="6" xs="0">

                    </Col>
                    <Col md="3" xs="6">
                    <a href="mailto:info@website.ie">info@website.ie</a> 

                    </Col>
                    <Col md="3" xs="6">
                        <a href="tel:0035301000000"> +353 1-000-00-00</a>

                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default TopInfo;
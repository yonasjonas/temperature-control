import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock, faBell } from '@fortawesome/free-solid-svg-icons'


const Boxes = () => {
    return (
        <Container className="container hpthreeboxes mt-4 mb-3 pt-3 mb-4 border-secondary">
            <Row>
                <Col sm="4">
                    <FontAwesomeIcon className="color-secondary" icon={faCoffee} size="xs" />
                    <h3>24/7</h3>
                    <h6>Trained staff is ready to help</h6>
                </Col>
                <Col sm="4" className="border-left border-right border-secondary">
                    <FontAwesomeIcon className="color-secondary" icon={faClock} size="xs" />
                    <h3>Local Supplier</h3>
                    <h6>We are based in Dublin</h6>
                </Col>
                <Col sm="4">
                    <FontAwesomeIcon className="color-secondary" icon={faBell} size="xs" />
                    <h3>10 years Experience</h3>
                    <h6>Technical Support</h6>
                </Col>
            </Row>
        </Container>

    )
}

export default Boxes;
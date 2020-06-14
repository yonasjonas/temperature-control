import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AboutTextHP = () => {
    return (
        <Container className="container mt-4 pt-3 p-1 border-top border-secondary">
            <Row>
                <Col md="6">
                    <h1 className="mb-3">About Temperature control</h1>
                    <p>Shenzhen TGW Technology Co.,Ltd is the leading access control solution provider for vehicle intelligent parking system, license plate recognition recognition system and pedestrian access control turnstile and face recognition terminals. Founded in 2001, TGW is committed to the development of smart parking systems, continuously analyzing and solving problems in existing requirment and potential demand, and is committed to meeting the new functional requirements in security industry.</p>
                </Col>
                <Col md="6">
                    <img className="aboutimg" src="aboutus2.jpg" />
                </Col>
                
            </Row>
        </Container>
        
    )
}

export default AboutTextHP;
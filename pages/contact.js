import Navigation from './components/navigation.js';
import Head from 'next/head';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './components/form.js';
import TopInfo from './components/topinfo.js';
import Breadcrumbs from './components/breadcrumbs';
 
export default function Contact() {
    return (

        <>
            <Head>
                <title>Contact us</title>
            </Head>
            <TopInfo/>
            <Navigation />
            <Breadcrumbs pageName="Contact Us"/>
            <Container className="contactpage">
                <Row>
                    <Col md={6}>
                        <Form/>
                    </Col >
                    <Col md={6}>
                                              
                        <h2 className="font-weight-bold mt-1">Temperature Control Ltd.</h2>
                        <p>Suite 8 Grange Road, Office Park, Grange Road</p>
                        <p>Rathfarnham, Dublin 16</p>                        
                        <p>Phone: <a href="tel:01-000-0000">01-000-0000</a></p>
                        <p>Email: <a href="mailto:info@tempcontrol.ie"></a>info@tempcontrol.ie</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.5786286013063!2d-6.267408084351056!3d53.3328975834199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ea074772005%3A0x181fe22e3ef3f5e4!2sDamascus%20Gate%20Restaurant!5e0!3m2!1sen!2sie!4v1592157525976!5m2!1sen!2sie" width="100%" height="315" frameBorder="0" allowFullscreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Col >
                </Row>
            </Container>
            <Footer />
        </>
    )
}
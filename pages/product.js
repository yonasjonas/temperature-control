import Navigation from './components/navigation.js';
import Head from 'next/head';
import Footer from './components/footer.js';
import Gallery from './components/gallery.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductRight from './components/productrighticons';
import Breadcrumbs from './components/breadcrumbs';
import TopInfo from './components/topinfo.js';


export default function Product() {
    return (

        <>
            <Head>
                <title>Infrared Temperature Measuring Terminal</title>
            </Head>
            <TopInfo />
            <Navigation />

            <Breadcrumbs pageName="aa" />
            <Container>
                <Row>
                    <Col lg="6"><Gallery /></Col>
                    <Col lg="6"><ProductRight /></Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}
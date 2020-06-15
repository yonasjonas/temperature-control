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
    
    
    //console.log('width: ' + {width} + ' ~ height: '  + {height})
    return (       

        <>
       {/*  <div>width: {width} ~ height: {height}</div> */}
            <Head>
                <title>Infrared Temperature Measuring Terminal</title>
            </Head>
            <TopInfo />
            <Navigation />

            <Breadcrumbs pageName="Product" />
            <Container className="ProductPage">
                <Row>
                    <Col lg="6"><Gallery /></Col>
                    <Col lg="6"><ProductRight /></Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
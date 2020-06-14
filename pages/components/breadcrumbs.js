import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';

export default function Breadcrumbs(props) {

    return (

        <Breadcrumb>

            <Container className="">
                <Container>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{props.pageName}</Breadcrumb.Item>
                </Container >
            </Container >
        </Breadcrumb >

    )
};

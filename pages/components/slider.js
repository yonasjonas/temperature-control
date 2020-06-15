import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {


    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 customsizeh350"
                    src="1.jpg"
                    alt="Built-in Infrared Temperature Camera Face Recognition Terminal"
                />
                <Carousel.Caption>
                    <h3>Built-in Infrared Temperature Camera Face Recognition Terminal</h3>
                    <p>Suitable for office areas, hotels, access gates, office buildings, schools, shopping malls, shops, communities, public service and management projects and other places where face access control is required.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 customsizeh350"
                    src="2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Human body temperature detection using thermal imaging.
                        With access control attendance function.
                    </h3>
                    <p>Automatic alarm when human body temperature is higher than 37.3 ℃ (customisable temperature value).</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 customsizeh350"
                    src="3.jpg"
                    alt="Third slide"
                />

<Carousel.Caption>
                    <h3>Built-in Infrared Temperature Camera Face Recognition Terminal</h3>
                    <p>Suitable for office areas, hotels, access gates, office buildings, schools, shopping malls, shops, communities, public service and management projects and other places where face access control is required.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
}

export default ControlledCarousel;
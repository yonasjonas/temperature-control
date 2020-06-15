import Container from 'react-bootstrap/Container';



    


export default function ProductRight() {
    const { height, width } = useWindowDimensions();

    setTimeout(() => {
        //const screen = window.outerWidth;
        //console.log(screen)        
    }, 1200);
    
    
    return (      
       
        
        <div>
            <Container>
            {(width >= 768) ? '<h3 className="mt-3 mb-3">Built-in Infrared Temperature Camera Face Recognition Terminal</h3>' : null }
                <p>
                    Suitable for office areas, hotels, access gates, office buildings, schools, shopping malls, shops, communities, public service and management projects and other places where face access control is required.
                </p>
                <img className="mt-3 mb-3" src="info.png" />
                </Container>
        </div>
    )
}
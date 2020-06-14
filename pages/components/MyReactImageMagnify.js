import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import { withStyles } from "@material-ui/core/styles";




const styles = theme => ({
    root: {}
});






class MyReactImageMagnify extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            bigImage: 'p1.jpg',
        };
        this.imgChange = this.imgChange.bind(this);

        

    } 
    imgChange() {
        const imgone = document.querySelector('.image-gallery-thumbnails-container button:nth-child(1)');
        const imgtwo = document.querySelector('.image-gallery-thumbnails-container button:nth-child(2)');
    
        imgone.onClick={navClose}
            
        imgtwo.addEventListener("click", function () {
            this.setState({
                bigImage: 'p2.jpg'
            });
            console.log('hey')
        })        
    }          
    
    
    
  

    render() {
        
        
        return (
            <ReactImageMagnify 
                {...{
                    smallImage: {
                        alt: "Wrist watch by Ted Baker London",
                        isFluidWidth: true,
                        src: this.state.bigImage
                    },
                    largeImage: {
                        src: this.state.bigImage,
                        width: 750,
                        height: 750
                    },
                    enlargedImagePortalId: "myPortal"
                }}
            />
        );
    }
}



export default withStyles(styles)(MyReactImageMagnify);

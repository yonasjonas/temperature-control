import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
//import "react-image-gallery/styles/css/image-gallery.css";



class MyImageGallery extends Component {
    


    render() {
        const properties = {
            thumbnailPosition: "bottom",
            useBrowserFullscreen: false,
            showPlayButton: false,
            items: [
                {
                    original: "p1.jpg",
                    thumbnail: "ps1.jpg"
                },
                {
                    original: "p2.jpg",
                    thumbnail: "ps2.jpg"
                },
                {
                    original: "p3.jpg",
                    thumbnail: "ps3.jpg"
                },
                {
                    original: "p4.jpg",
                    thumbnail: "ps4.jpg"
                },
            ]
        };

        return <ImageGallery {...properties} />;
    }
}

export default MyImageGallery;

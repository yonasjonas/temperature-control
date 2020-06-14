import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import MyImageGallery from "./MyImageGallery";
import Container from 'react-bootstrap/Container';


const Gallery = () => {
    return (



        <Container>

            <MyImageGallery />
            <div id="myPortal" />
        </Container>



    );
}

export default Gallery
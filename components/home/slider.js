import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../assets/images/home-slide/image1.jpg";
import image2 from "../../assets/images/home-slide/image2.jpg";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="apeservice" />
          <Carousel.Caption bsPrefix="text-light carousel-caption">
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="apeservice" />

          <Carousel.Caption bsPrefix="text-light carousel-caption">
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
}

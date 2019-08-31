import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/product-slide/slide-01.jpg";
import image2 from "../../assets/images/product-slide/slide-02.jpg";
import image3 from "../../assets/images/product-slide/slide-03.jpg";
import image4 from "../../assets/images/product-slide/slide-04.jpg";
import image5 from "../../assets/images/product-slide/slide-05.jpg";
import image6 from "../../assets/images/product-slide/slide-06.jpg";
import image7 from "../../assets/images/product-slide/slide-07.jpg";
import image8 from "../../assets/images/product-slide/slide-08.jpg";


const left = <span aria-hidden="true" className="carousel-control-prev-icon bg-success" />;

export default class Slider extends React.Component {
  render() {
    return (
      <Row className="align-items-center">
        <Col xs="0" md="1">

        </Col>
        <Col>
          <Carousel nextIcon={left} controls={false}>
            <Carousel.Item>
              <img className="img-fluid" src={image1} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image2} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image3} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image4} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image5} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image6} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image7} alt="apeservice" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={image8} alt="apeservice" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs="0" md="1">
          {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
        </Col>
      </Row>

    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import client1 from "../../assets/images/client/client-1.png";
import client2 from "../../assets/images/client/client-2.jpg";
import client3 from "../../assets/images/client/client-3.jpg";
import client4 from "../../assets/images/client/client-4.png";
import client5 from "../../assets/images/client/client-5.jpg";
import client6 from "../../assets/images/client/client-6.jpg";
import client7 from "../../assets/images/client/client-7.jpg";
import client8 from "../../assets/images/client/client-8.jpg";
import client9 from "../../assets/images/client/client-9.jpg";
import client10 from "../../assets/images/client/client-10.jpg";
import client11 from "../../assets/images/client/client-11.jpg";

export default class Client extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      autoplay: true
      // slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="px-3">
            <img className="border img-fluid" src={client1} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client2} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client3} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client4} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client5} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client6} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client7} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client8} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client9} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client10} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client11} alt="" />
          </div>
          <div className="px-3">
            <img className="border img-fluid" src={client11} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

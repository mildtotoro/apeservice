import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../assets/images/home-slide/image1.jpg";
import image2 from "../../assets/images/home-slide/image2.jpg";
import image3 from "../../assets/images/home-slide/image3.jpg";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="ape service รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ ขายน้ำยาแอร์และอะไหล่" />
          <Carousel.Caption bsPrefix="text-light carousel-caption">
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="ape service รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ ขายน้ำยาแอร์และอะไหล่" />

          <Carousel.Caption bsPrefix="text-light carousel-caption bg-primary p-0 p-md-1">
            <div className="d-none d-lg-block">
              <h1 className="">APE Service</h1>
              <h2 >รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ <br />ขายน้ำยาแอร์และอะไหล่ โทร 02-749-1230-2</h2>
            </div>
            <div className="d-none d-md-block d-lg-none">
              <h3 className="">APE Service</h3>
              <h5 >รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ ขายน้ำยาแอร์และอะไหล่ <br />โทร 02-749-1230-2</h5>
            </div>
            <div className="d-block d-md-none">
              <h5 className="mb-0">APE Service</h5>
              <p className="mb-0">รับออกแบบ ติดตั้ง จำหน่าย<br />เครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์<br />ขายน้ำยาแอร์และอะไหล่ <br />โทร 02-749-1230-2</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="ape service รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ ขายน้ำยาแอร์และอะไหล่" />

          <Carousel.Caption bsPrefix="text-light carousel-caption bg-primary p-0 p-md-1">
            <div className="d-none d-lg-block">
              <h1 className="">APE Service</h1>
              <h2 >รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ <br />ขายน้ำยาแอร์และอะไหล่ โทร 02-749-1230-2</h2>
            </div>
            <div className="d-none d-md-block d-lg-none">
              <h3 className="">APE Service</h3>
              <h5 >รับออกแบบ ติดตั้ง จำหน่ายเครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์ ขายน้ำยาแอร์และอะไหล่ <br />โทร 02-749-1230-2</h5>
            </div>
            <div className="d-block d-md-none">
              <h5 className="mb-0">APE Service</h5>
              <p className="mb-0">รับออกแบบ ติดตั้ง จำหน่าย<br />เครื่องปรับอากาศ บริการล้าง-ซ่อมแอร์<br />ขายน้ำยาแอร์และอะไหล่ <br />โทร 02-749-1230-2</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel >
    );
  }
}

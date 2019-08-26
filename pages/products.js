import React from "react";
import Layout from "../components/layouts/Layout";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import Slider from "../components/products/slider";
import product1 from '../assets/images/homeair/homeair1.jpg';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
export default function products() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col className="text-center">
            <div className="border p-3 mt-5 bg-primary">
              <Slider></Slider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="py-5">
            <div className="py-3 h4 font-weight-light">
              <div className="d-flex flex-row">
                <div className="p-2">ยี่ห้อ</div>
                <div className="p-2">
                  <button className="btn btn-outline-primary">Aamena</button> <button className="btn btn-outline-primary">Daikin</button> <button className="btn btn-outline-primary">To</button>
                </div>
                <div className="p-2">
                  เรียงโดย
                </div>
                <div className="p-2">
                  <select className="d-inline-block form-control">
                    <option>Default select</option>
                    <option value="">ราคา จากน้อยไปมาก</option>
                    <option value="">ราคา จากมากไปน้อย</option>
                  </select>
                </div>
                <div className="p-2"></div>
                <div className="p-2"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="product border">
                  <div className="row">
                    <div className="col d-flex position-relative">
                      <span className="badge badge-secondary">New</span>

                      <div className="brand"><img src="" alt="" /></div>
                      <img className="img-fluid align-self-center" src={product1} alt="" />
                      <span className="btn-catalog text-dark">
                        <a href="#catalog">Catalog</a>
                      </span>

                    </div>
                    <div className="col p-2 p-lg-4">
                      <h4 className="name">GEMINI 42TEVGB</h4>
                      <div className="btu pb-1">25,100 BTU/H</div>
                      <div className="price">
                        ฿ 10,500
                        <span className="old-price pl-3 pt-2 h6">฿ 11,500</span>
                      </div>
                      <p className="h6 pt-2">
                        rem aliquam porro repellendus harum quae accusantium eius iste. Ipsa quis eveniet saepe.
                      </p>
                      <div className="">
                        <FontAwesomeIcon className="h5 mb-0 pr-2" icon={faFacebookMessenger} />
                        <a href="#f">สอบถาม/สั่งซื้อสินค้า </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

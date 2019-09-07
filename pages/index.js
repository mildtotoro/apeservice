import React from "react";
import Layout from "../components/layouts/Layout";
import Slider from "../components/home/slider";
import Client from "../components/home/Client";
import { Container, Row, Col } from "react-bootstrap";
import homeAir from "../assets/images/Residentail.jpg";
import partner1 from "../assets/images/partners/daikin.jpg";
import partner2 from "../assets/images/partners/carrier.jpg";
import partner3 from "../assets/images/partners/uniaire.jpg";
import commercialAir from "../assets/images/Commercial.jpg";
import logo from "../assets/images/ape-service-logo.png";
import article1 from "../assets/images/home-service.jpg";
import leftArticle from "../assets/images/left-article.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSqare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

function Home() {
  return (
    <div className="App">
      <Layout>
        <Slider />
        <Container className="pt-4 pb-5">
          <Row>
            <Col lg="10" className="mx-auto text-center py-5">
              <h2>บริษัท เอ พี อี เซอร์วิส จำกัด</h2>
              <p>
                จากประสบการณ์ในงานระบบปรับอากาศ ระบบระบายอากาศกว่า 23ปี
                บริษัทฯมีความเชี่ยวชาญด้านแอร์บ้านและแอร์เชิงพาณิชย์
                เพื่อรองรับกับการพัฒนาประสิทธิภาพ ของงานระบบ, การประหยัดพลังงาน
                และ อนุรักษ์ทรัพยากรสิ่งแวดล้อม
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">เครื่องปรับอากาศสำหรับที่พักอาศัย</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempore iste, quibusdam architecto quas cum dolorum
                animi ex expedita, non officia voluptatibus, error ratione
                numquam eum ipsam placeat id aut.
              </h6>
              <div className="text-center">
                <Link href="/products">
                  <a>
                    <img className="img-fluid" src={homeAir} alt="apeservice homeair" />
                  </a>
                </Link>
              </div>
              <div className="text-right">
                <Link href="/products">
                  <a className="text-right">ดูเพิ่มเติม ></a>
                </Link>
              </div>
            </Col>
            <Col>
              <h3 className="text-center">เครื่องปรับอากาศเชิงพาณิชย์</h3>
              <h6>
                จัดหาจำหน่ายติดตั้งเครื่องปรับอากาศทุกชนิด, ทุกยี่ห้อ
                จำหน่ายอะไหล่-น้ำยาแอร์ทุกชนิด, ทุกยี่ห้อ จัดหาและติดตั้งระบบ
                AIR CONDITION CHILLER SYSTEM ติดตั้งระบบจ่ายลมเย็น, ท่อส่งลม ,
                ท่อส่งน้ำ และ PUMP ติดตั้งระบบดูดระบายควัน/กลิ่น และ BLOWER
                ติดตั้งท่อ DUCT WORK ทุกชนิด ระบบหัวกระจายน้ำดับเพลิง SPRINKLER
                งานหุ้มฉนวน และ งานหุ้ม JACKET
              </h6>
              <div className="text-center">
                <a href="#1">
                  <img
                    width="443px"
                    className="img-fluid"
                    src={commercialAir}
                    alt="apeservice commercial air"
                  />
                </a>
              </div>
              <div className="text-right">
                <a className="text-right" href="#a">
                  ดูเพิ่มเติม >
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-home py-5 my-5">
          <Container>
            <Row className="">
              <Col xs="12" className="text-center">
                <h1 className="pb-4 text-light">พาร์ทเนอร์</h1>
              </Col>
            </Row>
            <Row>
              <Col className="p-0 p-lg-3">
                <a href="https://www.daikin.co.th/" target="_blank">
                  <img className="img-fluid p-2 border" src={partner1} alt="apeservice partner daikin" />
                </a>
              </Col>
              <Col className="p-0 p-lg-3">
                <a href="http://www.carrier.co.th" target="_blank">
                  <img className="img-fluid p-2 border" src={partner2} alt="apeservice partner carrier" />
                </a>

              </Col>
              <Col className="p-0 p-lg-3">
                <a href="https://uni-aire.com/th/" target="_blank">
                  <img className="img-fluid p-2 border" src={partner3} alt="apeservice partner uni-aire" />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-5">
          <Container>
            <Row>
              <Col>
                <h2 className="pb-4">บริการและการซ่อมบำรุง</h2>
              </Col>
              <Col>
                <h2 className="pb-4 d-none d-lg-block">บทความ</h2>
              </Col>
            </Row>
            <Row className="justify-content-center mb-4">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <img className="img-fluid border p-2 mb-4" src={leftArticle} alt="ape service" />
                  </Col>
                  <Col lg="7">
                    <a className="text-dark font-weight-light" href="#r"><span className="h5">&bull; </span>  รายละเอียดการล้างเครื่องปรับอากาศต่อครั้ง</a><br />
                    <a className="text-dark font-weight-light" href="#r"><span className="h5">&bull; </span> รายละเอียดการล้างเครื่องปรับอากาศรายปี</a><br />
                    <a className="text-dark font-weight-light" href="#e">
                      <span className="h5">&bull; </span> อัตราค่าบริการล้างเครื่องปรับอากาศ ต่อครั้ง/รายปี
                    </a><br />
                    <a className="text-dark font-weight-light" href="#e"><span className="h5">&bull; </span> อัตราค่าบริการติดตั้งเครื่องปรับอากาศ</a>
                  </Col>
                </Row>
              </Col>
              {/* <div className="w-100"></div> */}
              <Col className="d-lg-none d-flex">
                <Row className="justify-content-left mr-auto pt-4">
                  <Col>
                    <div className="mr-auto ">
                      <h2 className="pb-4">บทความ</h2>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <img className="img-fluid border p-2 mb-4" src={article1} alt="ape service" />
                  </Col>
                  <Col lg="7">
                    <a className="text-dark font-weight-light" href="#r"><span className="h5">&bull; </span>การเลือกขนาดของเครื่องปรับอากาศให้เหมาะสมกับพื้นที่ใช้งาน</a><br />
                    <a className="text-dark font-weight-light" href="#r"><span className="h5">&bull; </span>เคล็ดลับการประหยัดพลังงาน</a><br />
                    <a className="text-dark font-weight-light" href="#e">
                      <span className="h5">&bull; </span>การปรับอากาศ แนวคิด และ มูลเหตุ</a><br />
                    <a className="text-dark font-weight-light" href="#e"><span className="h5">&bull; </span>ความรู้เบื้องต้นเกี่ยวกับเครื่องปรับอากาศ</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div />
        <Container className="py-5 ">
          <Row>
            <Col>
              <h2 className="pb-4">ลูกค้าของเรา</h2>
              <Client />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Home;

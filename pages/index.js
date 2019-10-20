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
              <p className="font-weight-light" style={{ fontSize: '17px' }}>
                จากประสบการณ์ในงานระบบปรับอากาศ ระบบระบายอากาศกว่า 23ปี
                บริษัทฯมีความเชี่ยวชาญด้านแอร์บ้านและแอร์เชิงพาณิชย์
                เพื่อรองรับกับการพัฒนาประสิทธิภาพ ของงานระบบ, การประหยัดพลังงาน
                และ อนุรักษ์ทรัพยากรสิ่งแวดล้อม
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h3 className="text-center">เครื่องปรับอากาศสำหรับที่พักอาศัย</h3>
              <h5 className="font-weight-light" style={{ fontSize: '15px' }}>
                - เทคโนโลยี Design ใหม่<br />
                - เย็นเร็วทันใจ<br />
                - เงียบ ประหยัดพลังงาน<br />
                - เพิ่มอากาศบริสุทธิ์<br />
                - เป็นมิตรกับสิ่งแวดล้อม<br />
                - นวัฒกรรมใหม่ R-32<br />
                - เทคโนโลยีสารเคลือบคอยล์เย็น Aqua Resin ปิดกันฝุ่น<br />
                - Inverter เย็นสะอาดและประหยัดพลังงาน<br />
                - ระบบทำความสะอาดแผงคอยล์เย็นอัตโนมัติ<br />
              </h5>
              <div className="text-center">
                <div className="d-none d-md-block" style={{ height: '111px' }}></div>
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
            <Col xs={12} md={6}>
              <h3 className="text-center pt-5 p-md-0">เครื่องปรับอากาศเชิงพาณิชย์</h3>
              <h5 className="font-weight-light" style={{ fontSize: '15px' }}>
                - แบบแขวนใต้ฝ้า ติดตั้งในพื้นที่ที่มีเพดานสูง พื้นที่แคบ กระจายความเย็นทั่วถึง<br />
                - แบบฝังในฝ้า ความเย็นกระจายรอบทิศทาง ปรับเข้ากับพื้นที่ติดตั้งได้ทุกพื้นที่<br />
                - แบบตู้ตั้ง ติดตั้งได้หลากหลาย พื้นที่ตรงกลาง หรือชิดกำแพง<br />
                - แบบต่อท่อลม ซ่อนคอล์เย็นไว้ในฝ้า ส่งลมเย็นผ่านท่อลม ที่ต่อไปยังพื้นที่ต่าง ๆ
                ออกแบบเพื่อใช้งานในพื้นที่จำกัด<br />
                - เครื่องปรับอากาศแบบต่อท่อลมระบายความร้อนด้วยอากาศ<br />
                - เครื่องปรับอากาศแบบต่อท่อลมระบายความร้อนด้วยน้ำ<br />
                - เครื่องระบายความร้อนด้วยอากาศ<br />
                - เครื่องระบายความร้อนด้วยน้ำ<br />
                - เครื่องทำน้ำเย็นระบายความร้อนด้วยอากาศ<br />
                - เครื่องทำน้ำเย็นระบายความร้อนด้วยน้ำ<br />
                - ระบบ VRV , VRF<br />
                - ใช้ในอุตสาหกรรม<br />
                - ประหยังพลังงาน ประหยัดพื้นที่<br />
                - รูปลักษณ์สวยงาม<br />
                - ทนทาน ดูแลรักษาง่าย<br />
              </h5>
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
                <Link href="/showcase">
                  <a className="text-right">ดูเพิ่มเติม ></a>
                </Link>
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
              <Col xs="12" lg="6">
                <h2 className="pb-4">บริการและการซ่อมบำรุง</h2>
              </Col>
              <Col xs="12" lg="6">
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
                    <Link href="/service/per-time-maintenance">
                      <a className="text-dark font-weight-light"><span className="h5">&bull; </span>  รายละเอียดการล้างเครื่องปรับอากาศต่อครั้ง</a>
                    </Link><br />
                    <Link href="/service/yearly-maintenance">
                      <a className="text-dark font-weight-light">
                        <span className="h5">&bull; </span> รายละเอียดการล้างเครื่องปรับอากาศรายปี
                        </a>
                    </Link><br />
                    <Link href="/service/service-rates">
                      <a className="text-dark font-weight-light">
                        <span className="h5">&bull; </span> อัตราค่าบริการล้างเครื่องปรับอากาศ ต่อครั้ง/รายปี
                    </a>
                    </Link><br />
                    <Link href="/service/setup-rates">
                      <a className="text-dark font-weight-light"><span className="h5">&bull; </span> อัตราค่าบริการติดตั้งเครื่องปรับอากาศ</a>
                    </Link>
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
                    <Link href="/articles/how-to-choose-btu">
                      <a className="text-dark font-weight-light"><span className="h5">&bull; </span>การเลือกขนาดของเครื่องปรับอากาศให้เหมาะสมกับพื้นที่ใช้งาน</a>
                    </Link><br />
                    <Link href="/articles/energy-saving">
                      <a className="text-dark font-weight-light"><span className="h5">&bull; </span>เคล็ดลับการประหยัดพลังงาน</a>
                    </Link><br />
                    <Link href="/articles/air-conditioner-problams-solutions">
                      <a className="text-dark font-weight-light">
                        <span className="h5">&bull; </span>อาการขัดข้องของเครื่องปรับอากาศและวิธีแก้ไข</a>
                    </Link><br />
                    <Link href="/articles/air-conditioner-knowledge-2">
                      <a className="text-dark font-weight-light" href="#e">
                        <span className="h5">&bull; </span>การปรับอากาศ แนวคิด และ มูลเหตุ</a>
                    </Link><br />
                    <Link href="/articles/air-conditioner-knowledge">
                      <a className="text-dark font-weight-light"><span className="h5">&bull; </span>ความรู้เบื้องต้นเกี่ยวกับเครื่องปรับอากาศ</a>
                    </Link>
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

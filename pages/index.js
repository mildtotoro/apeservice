import React from "react";
import "../styles/app.scss";
import Layout from "../components/layouts/Layout";
import Slider from "../components/home/slider";
import Client from "../components/home/Client";
import { Container, Row, Col } from "react-bootstrap";
import homeAir from "../assets/images/Residentail.jpg";
import commercialAir from "../assets/images/Commercial.jpg";
import logo from "../assets/images/ape-service-logo.png";
import article1 from "../assets/images/homeair/homeair1.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="App">
      <Layout>
        <Slider />
        <Container className="pt-4 pb-5">
          <Row>
            <Col lg="10" className="mx-auto text-center py-5">
              <h2>บริษัท เอ พี อี เซอร์วิส จำกัด</h2>
              <h4>
                สามารถโทรสอบถามได้ที่เบอร์ 02-222-2222 หรือ
                {/* <FontAwesomeIcon icon="coffee" /> */}
                <br />
                Facebook{" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/pg/%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%99%E0%B8%B1%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B9%86%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-2223337804401717/about/?ref=page_internal"
                  className="h4"
                >
                  แอร์บ้าน แอร์แขวน แอร์ผนัง ราคาส่งถูกๆ,แอร์โรงงาน-ทุกระบบ
                </a>
              </h4>
              <p>
                จากประสบการณ์ในงานระบบปรับอากาศ ระบบระบายอากาศกว่า 23ปี
                บริษัทฯมีความเชี่ยวชาญด้านแอร์บ้านและแอร์เชิงพาณิชย์
                เพื่อรองรับกับการพัฒนาประสิทธิภาพ ของงานระบบ , การประหยัดพลังงาน
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
                <a href="#w">
                  <img className="img-fluid" src={homeAir} alt="" />
                </a>
              </div>
              <div className="text-right">
                <a className="text-right" href="#w">
                  ดูเพิ่มเติม >
                </a>
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
                  <img className="img-fluid" src={commercialAir} alt="" />
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
        <div className="py-5">
          <Container>
            <Row>
              <Col>
                <h2>บริการและการซ่อมบำรุง</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10}>
                <Row>
                  <Col md={5} lg={4}>
                    <img className="img-fluid" src={article1} alt="" />
                  </Col>
                  <Col md={7} lg={8}>
                    <a href="#r">รายละเอียดการล้างเครื่องปรับอากาศต่อครั้ง</a>
                    <a href="#r">รายละเอียดการล้างเครื่องปรับอากาศรายปี</a>
                    <a href="#e">
                      อัตราค่าบริการล้างเครื่องปรับอากาศ ต่อครั้ง/รายปี
                    </a>
                    <a href="#e">อัตราค่าบริการติดตั้งเครื่องปรับอากาศ</a>
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
              <h2>ลูกค้าของเรา</h2>
              <Client />
            </Col>
          </Row>
        </Container>

        <div
          className="bg-dark text-light pt-5"
          style={{ paddingBottom: "150px" }}
        >
          <div className="footer container ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <img src={logo} className="img-fluid" alt="ape service" />
                <p>
                  บริษัท เอ พี อี เซอร์วิส จำกัด
                  <br />
                  รับบริการล้างแอร์ ซ่อม ย้าย และติดตั้งแอร์ใหม่ แอร์บ้านราคาถูก
                  คุณภาพดี <br />
                  จำหน่ายเครื่องปรับอากาศ แอร์บ้าน
                  แอร์เชิงพาณิช(สอบถามได้ที่เบอร์ 02-749-1230-2 หรือ
                  02-749-1230-2 ) ทุกยี่ห้อ ทุกรุ่น
                  <br />
                  ราคาปลีก-ส่ง
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h5>สินค้าเครื่องปรับอากาศ</h5>
                <ul style={{ listStyleType: "none" }} className="pl-1">
                  <li>
                    <a href="#f">แอร์ Amena</a>
                  </li>

                  <li>
                    <a href="#f">แอร์ Amena</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Carrier</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Central Air</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Casper</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Daikin</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Eminent</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Fujitsu</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Gree</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Haier</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ LG</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Mitsubishi Electric</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Mitsubishi HeavyDuty</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Panasonic</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Sharp</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Samsung</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Star Aire</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Trane</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ Toshiba</a>
                  </li>
                  <li>
                    <a href="#f">แอร์ TCL</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h5>การบริการ</h5>
                บริการของเรา ติดตั้งแอร์ ย้ายแอร์ ล้างแอร์ เติมน้ำยาแอร์
                ซ่อมแอร์ เปลี่ยนอะไหล่แอร์
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                facebook shopee lazada Tel
                <h5>ที่ตั้ง</h5>
                <p>
                  เปิดบริการ วันจันทร์-อาทิตย์ เวลา 8:30 - 18.00น. <br />
                  เบอร์ร้าน 02-749-1230-2
                </p>
                <p>
                  พื้นที่ให้บริการ กรุงเทพ และปริมนฑน กาญจนบุรี
                  ให้บริการและติดติ้งโดยผู้ชำนาญการ ประสบการณ์มากกว่า 23 ปี
                  ล้างแอร์บ้าน มาตรฐาน สะอาดชัวร์ บริการตรวจเช็ค ซ่อม ย้าย
                  ล้างแอร์บ้าน ทุกชนิด แอร์ไม่เย็น แอร์น้ำหยด แอร์รั่ว
                  ซ่อมแอร์ทุกยี่ห้อ ซ่อมได้ทุกอาการ
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;

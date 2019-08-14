import React from 'react';
import './assets/style/App.scss';
import Layout from './components/layouts/Layout'
import Slider from './components/home/slider'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import homeAir from './assets/images/Residentail.jpg';
import commercialAir from './assets/images/Commercial.jpg';


function App() {
  return (

    <div className="App">
      <Layout>
        <Slider></Slider>
        <Container>
          <Row>
            <Col lg="10" className="mx-auto text-center py-5">
              <h2>บริษัท เอ พี อี เซอร์วิส จำกัด</h2>
              <p>
                จากประสบการณ์ในงานระบบปรับอากาศ ระบบระบายอากาศกว่า 23ปี
                บริษัทฯมีความเชี่ยวชาญด้านแอร์บ้านและแอร์เชิงพาณิชย์ เพื่อรองรับกับการพัฒนาประสิทธิภาพ ของงานระบบ ,
                การประหยัดพลังงาน และ อนุรักษ์ทรัพยากรสิ่งแวดล้อม
            </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center">เครื่องปรับอากาศสำหรับที่พักอาศัย</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore iste, quibusdam architecto quas cum dolorum animi ex expedita, non officia voluptatibus, error ratione numquam eum ipsam placeat id aut.
            </h6>
              <div className="text-center">
                <img className="img-fluid" src={homeAir} alt="" />
              </div>
              <div className="text-right">
                <a className="text-right" href="#">ดูเพิ่มเติม ></a>

              </div>
            </Col>
            <Col>
              <h3 className="text-center">เครื่องปรับอากาศเชิงพาณิชย์</h3>
              <h6>
                จัดหาจำหน่ายติดตั้งเครื่องปรับอากาศทุกชนิด, ทุกยี่ห้อ
                จำหน่ายอะไหล่-น้ำยาแอร์ทุกชนิด, ทุกยี่ห้อ
                จัดหาและติดตั้งระบบ AIR CONDITION CHILLER SYSTEM
                ติดตั้งระบบจ่ายลมเย็น, ท่อส่งลม , ท่อส่งน้ำ และ PUMP
                ติดตั้งระบบดูดระบายควัน/กลิ่น และ BLOWER
                ติดตั้งท่อ DUCT WORK ทุกชนิด
                ระบบหัวกระจายน้ำดับเพลิง SPRINKLER
                งานหุ้มฉนวน และ งานหุ้ม JACKET
            </h6>
              <div className="text-center">
                <img className="img-fluid" src={commercialAir} alt="" />
              </div>
              <div className="text-right">
                <a className="text-right" href="#">ดูเพิ่มเติม ></a>

              </div>

            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
            <h1>ลูกค้าของเรา</h1>

            </Col>
          </Row>
        </Container>
        <Container >
           <Row>
          <Col>
            <h1>บริการและการซ่อมบำรุง</h1>
            <Carousel className="p-5">
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={homeAir} />
                  <Card.Body>
                    <Card.Text>
                      1Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={homeAir} />
                  <Card.Body>
                    <Card.Text>
                      2Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col>
          </Col>
        </Row>
        </Container>
       
      </Layout>
    </div>


  );
}

export default App;

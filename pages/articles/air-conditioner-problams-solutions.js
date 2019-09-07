import React from "react";
import Layout from "../../components/layouts/Layout";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function airConditionerProblamsSolutions() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="pb-3">อาการขัดข้องของเครื่องปรับอากาศและวิธีแก้ไข</h2>
            <div>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h4 className="mb-0">เครื่องปรับอากาศไม่เย็น</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>ปริมาณลมจ่ายสูงเกินไป หรือปริมาณลมจ่ายน้อยเกินไป</td>
                            <td><ol>
                              <li>ตรวจสอบแผงกรองอากาศว่าอุดตันหรือไม่</li>
                              <li>ความเร็วของพัดลมต่ำกว่าข้อกำหนดหรือไม่ หรือตรวจสอบสายพานสลิป</li>
                              <li>ให้ดูว่าลมไปออกห้องอื่น  ๆ มากเกินไปหรือไม่</li>
                              <li>ตรวจสอบท่อลมอ่อนว่าฉีกขาดหรือไม่</li>
                              <li>ตรวจสอบว่ามีลมรั่วที่รอยต่อระหว่างคอหัวจ่ายกับท่อลมหรือไม่</li>
                              <li>ตรวจสอบความสกปรกของแผงกรองอากาศ</li>
                              <li>ตรวจสอบความสกปรกของคอล์ยทำความเย็น</li>
                              <li>ตรวจสอบความเร็วรอบของพัดลม</li>
                            </ol></td>
                          </tr>
                          <tr>
                            <td>อุณหภูมิลมจ่ายมากหรือน้อยเกินไป</td>
                            <td><ol>
                              <li>ตรวจสอบท่อลมกลับว่า  รั่วและดูดลมร้อนเข้ามาหรือไม่</li>
                              <li>ตรวจสอบในช่องฝ้าหรือในจั่ว ว่ามีรอยรั่วให้ลมร้อนเข้าได้หรือไม่ ในกรณีที่ดูดลมกลับเหนือฝ้า</li>
                              <li>ตรวจสอบ  fresh  air  เข้ามามากเกินไปไม่</li>
                            </ol></td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h4 className="mb-0">เครื่องปรับอากาศไม่ทำงาน</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1. ติดตั้งสายไฟไม่ถูกต้อง</td>
                            <td>1. ตรวจสอบการติดตั้งสายไฟใหม่</td>
                          </tr>
                          <tr>
                            <td>2. แรงดันไฟฟ้าไม่ถูกต้อง</td>
                            <td>2. ตรวจสอบแรงดันไฟฟ้า</td>
                          </tr>
                          <tr>
                            <td>3. ฟิวส์ขาด  หรือไม่มีฟิวส์</td>
                            <td>3. เปลี่ยนหรือใส่ฟิวส์ใหม่</td>
                          </tr>
                          <tr>
                            <td>4. สายไฟขาดหรือหลวม</td>
                            <td>4. หาตำแหน่งที่ไฟฟ้าลัดวงจร</td>
                          </tr>
                        </tbody>
                      </table>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h4 className="mb-0">พัดลมและคอมเพรสเซอร์ไม่ทำงาน</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.  ระบบจ่ายไฟฟ้าจากภายนอกถูกตัด</td>
                            <td>1.  ทำการซ่อมอุปกรณ์ในแผงจ่ายไฟ</td>
                          </tr>
                          <tr>
                            <td>
                              2.  ต่อสายไฟฟ้าเข้าเครื่องผิด</td>
                            <td>
                              2.  ต่อสายไฟฟ้าเข้าเครื่องให้ถูกต้อง</td>
                          </tr>
                          <tr>
                            <td>3.  ฟิวส์ขาด</td>
                            <td>3.  ให้เปลี่ยนหรือใส่ฟิวส์ใหม่</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h4 className="mb-0">น้ำรั่ว</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.  ท่อน้ำทิ้งติดตั้งไม่ถูกวิธี</td>
                            <td>1.  ติดตั้งท่อน้ำทิ้งให้ถูกต้อง</td>
                          </tr>
                          <tr>
                            <td>
                              2.  ท่อน้ำยาไม่หุ้มฉนวน หรือหุ้มไม่เรียบร้อย</td>
                            <td>
                              2.  หุ้มฉนวนท่อน้ำทิ้งให้เรียบร้อย</td>
                          </tr>
                          <tr>
                            <td>3.  ท่อระบายน้ำอุดตัน</td>
                            <td>3.  ทำความสะอาดท่อระบายน้ำ</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <h4 className="mb-0">น้ำหยดจากเครื่องเป่าลมเย็น</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.  การติดตั้งเครื่องเป่าลมเย็นไม่ได้ระดับ</td>
                            <td>1.  ติดตั้งเครื่องเป่าลมเย็นให้ได้ระดับ และทำให้ถาดน้ำลาดลงไปตามทิศทางการไหล</td>
                          </tr>
                          <tr>
                            <td>2.  ปลายท่อที่ต่อกับถาดน้ำทิ้ง  มีสิ่งสกปรกอุดตันอยู่ เช่นตะไคร่น้ำ</td>
                            <td>2.  ให้ทำความสะอาดท่อน้ำทิ้งและถาดน้ำทิ้ง</td>
                          </tr>
                          <tr>
                            <td>3.  ถาดน้ำทิ้งรั่ว</td>
                            <td>3.  อุดรอยรั่วที่ถาดน้ำทิ้ง</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <h4 className="mb-0">น้ำแข็งเกาะ  หรือตัวเครื่องมีการหมุนเวียนอากาศน้อย</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.  ตัวกรองอากาศสกปรก</td>
                            <td>1.  ทำความสะอาดตัวกรองอากาศ</td>
                          </tr>
                          <tr>
                            <td>2.  ตัวคอยล์ที่ทำความเย็นสกปรก</td>
                            <td>2.  ทำความสะอาดตัวคอยล์เย็น</td>
                          </tr>
                          <tr>
                            <td>3.  ตะแกรงมีสิ่งแปลกปลอมติดอยู่ด้านใน</td>
                            <td>3.  ตรวจสอบตะแกรงไม่ให้มีสิ่งแปลกปลอมติดอยู่ด้านใน</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <h4 className="mb-0">ระบบของเครื่องทำงาน แต่อากาศไม่เย็น</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>น้ำยาทำความเย็นไม่พอ</td>
                            <td>เติมน้ำยาทำความเย็น</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <h4>พัดลมทำงานเสียงดัง</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <table class="table">
                        <thead>
                          <tr>
                            <th>สาเหตุ</th>
                            <th>วิธีการแก้ไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.  มีสิ่งแปลกปลอมเข้าไปในพัดลม  หรือพัดลมไปปะทะกับสิ่งวัตถุอื่น</td>
                            <td>1.  ตรวจสอบหาสิ่งแปลกปลอมที่อยู่ในพัดลม และหาตำแหน่งช่องว่างของพัดลม</td>
                          </tr>
                          <tr>
                            <td>2.  เกิดจากพัดลมหรือมอเตอร์พัดลมหลวม</td>
                            <td>2.  ขันน๊อตพัดลมให้แน่น</td>
                          </tr>
                          <tr>
                            <td>3.  ใบพัดลมบิดงอหรือไม่สมดุลกัน</td>
                            <td>3.  ตรวจสอบใบพัดลม  ถ้าไม่สามารถซ่อมได้ให้เปลี่ยนใหม่</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

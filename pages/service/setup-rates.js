import React from "react";
import Layout from "../../components/layouts/Layout";

export default function setupRates() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div>
              <h2 className="py-5">อัตราค่าบริการติดตั้งเครื่องปรับอากาศ</h2>
              <h4>อัตราค่าบริการติดตั้งเครื่องปรับอากาศ แบบติดผนัง (Wall Type)</h4>
              <div className="table-responsive pb-2 pb-md-3 pb-lg-5">
                <table className="table">
                  <thead className="bg-info text-light">
                    <tr>
                      <th>ขนาดเครื่องปรับอากาศ</th>
                      <th>ท่อน้ำยา</th>
                      <th>สายไฟฟ้า</th>
                      <th>เบรกเกอร์</th>
                      <th>ค่าติดตั้ง</th>
                      <th>หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">8,000 - 12,000 BTU/hr</td>
                      <td>4 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>2,500</td>
                      <td>เฉพาะมีท่อให้</td>
                    </tr>
                    <tr className="a">
                      <td className="text-left">12,001 - 24,000 BTU/hr</td>
                      <td>4 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>3,000</td>
                      <td>เฉพาะมีท่อให้</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>อัตราค่าบริการติดตั้งเครื่องปรับอากาศ แบบแขวนใต้ฝา (Ceiling Type)</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-info text-light">
                    <tr>
                      <th>ขนาดเครื่องปรับอากาศ</th>
                      <th>ท่อน้ำยา</th>
                      <th>สายไฟฟ้า</th>
                      <th>เบรกเกอร์</th>
                      <th>ค่าติดตั้ง</th>
                      <th>หมายเหตุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">10,000 - 20,000 BTU/hr</td>
                      <td>5 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>3,000</td>
                      <td>-</td>
                    </tr>
                    <tr className="a">
                      <td className="text-left">20,001 - 30,000 BTU/hr</td>
                      <td>5 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>3,500</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td className="text-left">30,001 - 36,000 BTU/hr</td>
                      <td>5 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>3,800</td>
                      <td>-</td>
                    </tr>
                    <tr className="a">
                      <td className="text-left">36,001 - 48,000 BTU/hr</td>
                      <td>5 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>4,500</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td className="text-left">48,001 - 60,000 BTU/hr</td>
                      <td>5 เมตร</td>
                      <td>15 เมตร</td>
                      <td>1 ชุด</td>
                      <td>6,000</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="">
                หมายเหตุ
              <ul>
                  <li>ในกรณีมีแอร์เก่าอยู่แล้ว ต้องการล้างทำความสะอาดก่อนการติดตั้ง เพิ่ม 200 บาท</li>
                  <li>เมื่อมีอุปกรณ์เพิ่มเติมเกินกว่าที่กำหนดคิดราคาเพิ่ม
                    <ul>
                      <li>
                        ขาแขวน CONDENSING UNIT 350 บาท/ชุด
                      </li>
                      <li>ท่อน้ำยาและอุปกรณ์หุ้มท่อ 300 บาท/เมตร</li>
                      <li>สายไฟ 35 บาท/เมตร</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

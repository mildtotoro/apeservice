import React from "react";
import logo from "../../assets/images/ape-service-logo.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div
        className="bg-dark text-light pt-5"
        style={{ paddingBottom: "150px" }}
      >
        <div className="footer container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <img src={logo} className="img-fluid mb-3" alt="ape service" />
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
              <p>
                พื้นที่ให้บริการ กรุงเทพ และปริมนฑน กาญจนบุรี
                ให้บริการและติดติ้งโดยผู้ชำนาญการ ประสบการณ์มากกว่า 23 ปี
                ล้างแอร์บ้าน มาตรฐาน สะอาดชัวร์ บริการตรวจเช็ค ซ่อม ย้าย
                ล้างแอร์บ้าน ทุกชนิด แอร์ไม่เย็น แอร์น้ำหยด แอร์รั่ว
                ซ่อมแอร์ทุกยี่ห้อ ซ่อมได้ทุกอาการ
                </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h5>สินค้าเครื่องปรับอากาศ</h5>
              <ul style={{ listStyleType: "none" }} className="pl-1">
                <li>
                  <a className="text-light" href="#f">แอร์ Amena</a>
                </li>

                <li>
                  <a className="text-light" href="#f">แอร์ Amena</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Carrier</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Central Air</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Casper</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Daikin</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Eminent</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Fujitsu</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Gree</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Haier</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ LG</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Mitsubishi Electric</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Mitsubishi HeavyDuty</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Panasonic</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Sharp</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Samsung</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Star Aire</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Trane</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ Toshiba</a>
                </li>
                <li>
                  <a className="text-light" href="#f">แอร์ TCL</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <h5>การบริการ</h5>
              <div>ติดตั้งแอร์</div>
              <div>ย้ายแอร์ </div>
              <div>ล้างแอร์ </div>
              <div>เติมน้ำยาแอร์</div>
              <div>ซ่อมแอร์ </div>
              <div>เปลี่ยนอะไหล่แอร์</div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              facebook shopee lazada
                <h5>ที่ตั้ง</h5>
              <p>
                เปิดบริการ วันจันทร์-อาทิตย์ เวลา 8:30 - 18.00น. <br />
                เบอร์ร้าน 02-749-1230-2 หรือ เบอร์โทรศัพท์ 081-889-6696
                  <br />
                apeservice@apeservice.co.th
                </p>
              <p>
                111 Lasalle 28, Sukumvit 105 Rd, Bangna, Bangna, Bangkok 10260
                Tel 02-749-1230-2 AUTO, 081-889-6696
                </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

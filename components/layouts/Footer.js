import React from "react";
import logo from "../../assets/images/ape-service-logo-red.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

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
                พื้นที่ให้บริการ กรุงเทพ ปริมณฑน และจังหวัดกาญจนบุรี
                ให้บริการและติดติ้งโดยผู้ชำนาญการ ประสบการณ์มากกว่า 23 ปี
                ล้างแอร์บ้าน มาตรฐาน สะอาดชัวร์ บริการตรวจเช็ค ซ่อม ย้าย
                ล้างแอร์บ้าน ทุกชนิด แอร์ไม่เย็น แอร์น้ำหยด แอร์รั่ว
                ซ่อมแอร์ทุกยี่ห้อ ซ่อมได้ทุกอาการ
                </p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <h5>พาร์ทเนอร์</h5>
              <ul style={{ listStyleType: "none" }} className="pl-1">
                <li>
                  <a className="text-light" href="hhttp://www.carrier.co.th" target="_blank">แอร์ Carrier</a>
                </li>
                <li>
                  <a className="text-light" href="https://www.daikin.co.th" target="_blank">แอร์ Daikin</a>
                </li>
                <li>
                  <a className="text-light" href="https://uni-aire.com/th" target="_blank">แอร์ Uni-aire</a>
                </li>
              </ul>

              <h5 className="pt-3">การบริการ</h5>
              <div>ติดตั้งแอร์</div>
              <div>ย้ายแอร์ </div>
              <div>ล้างแอร์ </div>
              <div>เติมน้ำยาแอร์</div>
              <div>ซ่อมแอร์ </div>
              <div>เปลี่ยนอะไหล่แอร์</div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="pt-4 p-md-0">ที่ตั้ง</h5>
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
              <div>
                <a className="text-light" style={{ height: '23px', overflow: "hidden" }} target="_blank" href="https://www.facebook.com/pg/%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%99%E0%B8%B1%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B9%86%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-2223337804401717/about/?ref=page_internal">
                  <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
                </a>
                <span className="px-1"></span>
                <a className="text-light" style={{ height: '23px', overflow: "hidden" }} href="https://www.messenger.com/t/2223337804401717" target="_blank">
                  <FontAwesomeIcon size="2x" icon={faFacebookMessenger} />
                </a>
                {/* <span className="px-2 d-none d-lg-inline-block">|</span> */}
                {/* <div className="d-block d-lg-none"></div> */}

                {/* <a className="text-light " target="_blank" href="#shopee">Shopee</a>
                <span className="px-1"></span>
                <a className="text-light " target="_blank" href="#3">Lazada</a>
                <span className="px-1"></span> */}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-4 p-md-0">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fpg%2F%25E0%25B9%2581%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B9%258C%25E0%25B8%259A%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%2599-%25E0%25B9%2581%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B9%258C%25E0%25B9%2581%25E0%25B8%2582%25E0%25B8%25A7%25E0%25B8%2599-%25E0%25B9%2581%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B9%258C%25E0%25B8%259C%25E0%25B8%2599%25E0%25B8%25B1%25E0%25B8%2587-%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%2584%25E0%25B8%25B2%25E0%25B8%25AA%25E0%25B9%2588%25E0%25B8%2587%25E0%25B8%2596%25E0%25B8%25B9%25E0%25B8%2581%25E0%25B9%2586%25E0%25B9%2581%25E0%25B8%25AD%25E0%25B8%25A3%25E0%25B9%258C%25E0%25B9%2582%25E0%25B8%25A3%25E0%25B8%2587%25E0%25B8%2587%25E0%25B8%25B2%25E0%25B8%2599-%25E0%25B8%2597%25E0%25B8%25B8%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%25B0%25E0%25B8%259A%25E0%25B8%259A-2223337804401717%2Fabout%2F%3Fref%3Dpage_internal&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=2484471585118599"
                width="340" height="400"
                style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media">

              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

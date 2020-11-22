import React from "react";
import Layout from "../components/layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

export default function contactUs() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="pb-4">ติดต่อเรา</h2>
          </div>

        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <p className="h5 font-weight-light">
              บริษัท เอ พี อี เซอร์วิส จำกัด<br />
              111 Lasalle 28, Sukumvit 105 Rd, Bangna, Bangna, Bangkok 10260
           <br />
              <table className="mt-5">
                <tr>
                  <td>Tel.</td>
                  <td>
                    <a className="" href="tel: 02-749-1230-2"> 02-749-1230-2 </a>
                    <a className="" href="tel: 081-889-6696"> 081-889-6696 </a>
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <a className="" href="mailto: apeservice@apeservice.co.th?subject=ติดต่อสอบถาม" target="_blank"> apeservice@apeservice.co.th</a>
                  </td>
                </tr>
              </table>
            </p>
            <p>
              <a className="mr-3" style={{ height: '23px', overflow: "hidden" }} target="_blank" href="https://www.facebook.com/pg/%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%99-%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%99%E0%B8%B1%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B9%86%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-2223337804401717/about/?ref=page_internal">
                <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
              </a>
              <a className="mr-3" style={{ height: '23px', overflow: "hidden" }} href="https://www.messenger.com/t/2223337804401717" target="_blank">
                <FontAwesomeIcon size="2x" icon={faFacebookMessenger} />
              </a>
              {/* <a className="mr-3" style={{ height: '23px', overflow: "hidden" }} href="https://www.messenger.com/t/2223337804401717" target="_blank">
                Shopee
              </a>
              <a className="mr-3" style={{ height: '23px', overflow: "hidden" }} href="https://www.messenger.com/t/2223337804401717" target="_blank">
                Lazada
              </a> */}
            </p>
          </div>
          <div className="col-12 col-md-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0731070803811!2d100.6155114182648!3d13.66105364041024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a074c22320a1%3A0x2c6a522140bd9927!2zMTExIOC4i-C4reC4oiDguKXguLLguIvguLLguKUgMjgg4LmB4LiC4Lin4LiHIOC4muC4suC4h-C4meC4siDguYDguILguJXguJrguLLguIfguJnguLIg4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4LijIDEwMjcw!5e0!3m2!1sth!2sth!4v1568539931252!5m2!1sth!2sth" width="600" height="450" frameborder="0" style={{ 'border': '0' }} allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </Layout >
  );
}

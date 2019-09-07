import React from "react";
import Layout from "../../components/layouts/Layout";

export default function yearlyMaintenanceDetail() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>รายละเอียดการล้างเครื่องปรับอากาศรายปี</h2>
            <div>
              <div>
                <p>เมื่อท่านให้ความไว้วางใจ  จะส่งช่างที่มือฝีมือและคุณภาพเข้าไปทำการตรวจเช็คและทำประวัติของเครื่องปรับอากาศทุกเครื่อง  ตรวจสอบพร้อมเสนอและสรุปผลงาน  ผลการตรวจเช็คสภาพของเครื่องปรับอากาศให้ทราบทุกครั้ง  โดยมีรายละเอียดแต่ละครั้งดังต่อไปนี้</p>
                <h2>&nbsp; &nbsp; &nbsp;ล้างใหญ่ คอลย์เย็น (Fan coil)</h2>
                <ol>
                  <li>ล้างทำความสะอาด Fancoila&nbsp; ด้วยปั้มน้ำแรงดันสูง</li>
                  <li>ดูดและเป่าทำความสะอาดระบบท่อน้ำทิ้งด้วย (Blower)</li>
                  <li>ล้างทำความสะอาดแผ่นกรองอากาศ  (Filter)</li>
                  <li>ตรวจเช็คจุดต่อสายไฟภายในระบบ  และยึดสกรูสายไฟให้แน่นหนา</li>
                </ol>
                <h2>&nbsp; &nbsp; &nbsp; ล้างใหญ่ คอลย์ร้อน (Condensing)</h2>
                <ol>
                  <li>ล้างทำความสะอาดแผงครีบคอนเดนซิ่งด้วยปั้มน้ำแรงดันสูงและเป่าด้วย Blower</li>
                  <li>ตรวจสอบการทำงานของมอเตอร์ระบายความร้อน</li>
                  <li>ตรวจเช็คจุดต่อสายไฟภายในระบบ  และยึดสกรูสายไฟให้แน่นหนา</li>
                  <li>ตรวจวัดความดันของระบบน้ำยา  เช็คกำลังอัดของคอมเพชสเซอร์</li>
                  <li>ตรวจเช็คการทำงานของไทม์เมอร์  และอุปกรณ์ช่วยสตาร์ททุกชนิด  ของระบบคอมเพลสเซอร์</li>
                </ol>
                <h2>&nbsp; &nbsp; &nbsp; ล้างย่อย คอลย์เย็น (Fan coil)</h2>
                <ol>
                  <li>ล้างทำความสะอาดแผ่นกรองอากาศ  (Filter)</li>
                  <li>ดูดและเป่าทำความสะอาดท่อน้ำทิ้งด้วย (Blower)</li>
                  <li>ตรวจเช็คสปีดและ Roomthermostat</li>
                  <li>ตรวจเช็ครอบความเร็วของมอเตอร์พัดลม (Fancoil)</li>
                  <li>ตรวจเช็คจุดต่อสายไฟภายในระบบ  และยึดสกรูสายไฟให้แน่นหนา</li>
                </ol>
                <h2>&nbsp; &nbsp; &nbsp; ล้างย่อย คอลย์ร้อน  (Condensing)</h2>
                <ol>
                  <li>ดูดและเป่าแผงครีบคอนเดนซิ่งด้วย (Blower)</li>
                  <li>ตรวจวัดความดันของระบบน้ำยา  เช็คกำลังอัดของคอมเพชสเซอร์</li>
                  <li>ตรวจเช็คการทำงานของไทม์เมอร์  และอุปกรณ์ช่วยสตาร์ทุกชนิด  และระบบคอมเพชสเซอร์</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

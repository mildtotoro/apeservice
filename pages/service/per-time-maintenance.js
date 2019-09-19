import React from "react";
import Layout from "../../components/layouts/Layout";

export default function perTimeMaintenance() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="pb-4 text-primary">รายละเอียดการล้างเครื่องปรับอากาศต่อครั้ง</h2>
            <div>
              <div>
                <p>เมื่อท่านให้ความไว้วางใจ  จะส่งช่างที่มือฝีมือและคุณภาพเข้าไปทำการตรวจเช็คและทำประวัติของเครื่องปรับอากาศทุกเครื่อง  ตรวจสอบพร้อมเสนอและสรุปผลงาน  ผลการตรวจเช็คสภาพของเครื่องปรับอากาศให้ทราบทุกครั้ง  โดยมีรายละเอียดแต่ละครั้งดังต่อไปนี้</p>
                <h4 className="pt-3 text-primary">(ล้างใหญ่) คอลย์เย็น  (Evaporator)</h4>
                <ol>
                  <li>ล้างทำความสะอาดฟิลคอลย์ (Evaporator)  ด้วยปั้มน้ำแรงดันสูง</li>
                  <li>ดูดและเป่าทำความสะอาดระบบท่อน้ำทิ้งด้วย (Blower)</li>
                  <li>ล้างทำความสะอาดแผ่นกรองอากาศ  (Filter)</li>
                  <li>ตรวจเช็คจุดต่อสายไฟภายในระบบ  และยึดสกรูสายไฟให้แน่นหนา</li>
                </ol>
                <h4 className="pt-3 text-primary">(ล้างใหญ่) คอลย์ร้อน  (Condensing  Unit)</h4>
                <ol>
                  <li>ล้างทำความสะอาดแผงครีบคอนเดนซิ่งด้วยปั้มน้ำแรงดันสูงและ Blower </li>
                  <li>ตรวจสอบการทำงานของมอเตอร์ระบายความร้อน</li>
                  <li>ตรวจเช็คจุดต่อสายไฟภายในระบบ  และยึดสกรูสายไฟให้แน่นหนา</li>
                  <li>ตรวจวัดความดันของระบบน้ำยา  เช็คกำลังอัดของคอมเพชสเซอร์</li>
                  <li>ตรวจเช็คการทำงานของไทม์เมอร์  และอุปกรณ์ช่วยสตาร์ททุกชนิด  ของระบบคอมเพชสเซอร์</li>
                </ol>
                <div className="mt-5 border border-danger p-3">
                  <p className="mb-0 pt-1"><strong>เงื่อนไขการบริการ</strong></p>
                  <ol>
                    <li>รายละเอียดบำรุงรักษาเครื่องปรับอากาศฉบับนี้มีผลบังคับใช้  เมื่อสั่งจ้าง</li>
                    <li>เป็นราคาบำรุงรักษาพร้อมล้างทำความสะอาด  ไม่รวมค่าเติมน้ำยาแอร์  ในกรณีที่ต้องเติมน้ำยาจะแจ้งท่านเพื่ออนุมัติดำเนินการ  ราคาน้ำยาแอร์  35  บาท/ปอนด์</li>
                    <li>กำหนดลำดับการล้างทำความสะอาดได้</li>
                    <li>เครื่องปรับอากาศทุกเครื่องต้องมีสภาพพร้อมใช้งานก่อนทำการเหมาจ่ายหรืออยู่ในดุลพินิจของช่าง</li>
                    <li>ในกรณีถ้าตรวจพบมีอุปกรณ์ชำรุด  ทางบริษัทฯ จะทำการเสนอราคาก่อนทำการซ่อมหรือเปลี่ยน    ให้ท่านอนุมัติดำเนินการ</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

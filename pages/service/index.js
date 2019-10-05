import React from "react";
import Layout from "../../components/layouts/Layout";
import service1 from '../../assets/images/service/service1.jpg'
import service2 from '../../assets/images/service/service2.jpg'

export default function service() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1>บริการของเรา</h1>
            <p>
              ด้วยอุดมการณ์ร่วมกันอันมุ่งมั่น ที่จะพัฒนาระบบงาน และการบริการ ด้วยความซื่อสัตย์ ความรับผิดชอบ และความจริงใจ อันเป็นจุดมุ่งหมาย หลักของบริษัทฯ จึงทำให้บริษัท ฯ มีวันนี้ และพร้อมจะทำงานให้ท่าน ในขอบเขตงานดังต่อไปนี้
            </p>
            <ul>
              <li>
                จัดหาจำหน่ายติดตั้งเครื่องปรับอากาศทุกชนิด, ทุกยี่ห้อ
          </li>
              <li>
                จัดหาและติดตั้งระบบ AIR CONDITION CHILLER SYSTEM
          </li>
              <li>
                ติดตั้งระบบจ่ายลมเย็น, ท่อส่งลม , ท่อส่งน้ำ และ PUMP
          </li>
              <li>
                ติดตั้งระบบดูดระบายควัน/กลิ่น และ BLOWER
          </li>
              <li>
                ติดตั้งท่อ DUCT WORK ทุกชนิด
          </li>
              <li>
                ระบบหัวกระจายน้ำดับเพลิง SPRINKLER
          </li>
              <li>
                งานหุ้มฉนวน และ งานหุ้ม  JACKET
          </li>
            </ul>
            <p>
              บริษัท เอ พี อี เซอร์วิส จำกัด มีความเพรียบพร้อมเป็นอย่างมาก โดยมีทีมวิศวกรและช่างที่ชำนาญ การเป็นอย่างมากอีกทั้งยังมีเครื่องมือที่ทันสมัยเข้ามาช่วยในการทำงาน สำหรับการวัดและปรับปริมาณ น้ำที่ต้องมีการปรับก็เพื่อช่วยในการประหยัดทรัพยากรน้ำ เนื่องจากเครื่องปรับอากาศขนาดเล็กและ ขนาดใหญ่ตามที่มีการผลิตออกมาจำหน่ายจะระบุปริมาณน้ำที่เครื่องปรับอากาศเหล่านั้นต้องการมาด้วย จึงทำให้สามารถปรับปริมาณน้ำได้ง่ายและเร็วมากขึ้น
      การปรับปริมาณน้ำเพื่อให้น้ำไหลผ่านเข้าไปตามจำนวนที่ AHU. และ Fan Coil ต้องการเพราะว่า ถึงมีน้ำผ่านเข้าไปมากก็ไม่ทำให้ประสิทธิภาพการทำความเย็นเพิ่มขึ้น ดังนั้นจึงควรจะมีการปรับปริมาณ น้ำให้เท่ากับที่เครื่องปรับอากาศต้องการจะดีกว่า เป็นการประหยัดพลังงานด้วย
        </p>
          </div>
          <div className="col-12 col-md-4">
            <img className="img-fluid" src={service1} alt="apeservice" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <img className="img-fluid pt-1" src={service2} alt="apeservice" />
          </div>
          <div className="col-12 col-md-7 pt-1 pt-md-5">
            <p>
              การวัดความเร็วลม และปรับปริมาณลม บริษัท เอ พี อี เซอร์วิส จำกัด มีความชำนาญงานในการทำ งานเกี่ยวกับงานท่อส่งลม ไม่ว่าจะเป็นท่อส่งลมเย็น ท่อลมระบายอากาศ โดยมีทีมวิศวกรที่มีความสามารถ ในการออกแบบและทีมช่างที่ชำนาญการเฉพาะทาง
        </p>
            <p>
              การวัดความเร็วลมและการปรับปริมาณลมให้ได้ตามความต้องการนั้น ความเร็วลมที่วัดได้จากเครื่อง วัดความเร็วลม ( Thermo - Anemometer ) ที่วัดจากหัวจ่ายลมแต่ละหัวสามารถนำมาคำนวนหาปริมาณ ลมได้ โดยการนำเอาความเร็วลมที่วัดได้ มาคูณกับพื้นที่ขอหัวจ่าย
        </p>
            <p>
              ปริมาณลมที่คำนวนได้จะมีปริมาณใกล้เคียงจากการออกแบบโดยทีมวิศวกร สำหรับการปรับปริมาณ ลมก็สามารถทำได้ง่าย เนื่องจากตอนที่วิศวกรทำการออกแบบได้กำหนดให้มีก้านปรับปริมาณลมที่ท่อแยก ทุกจุดเพื่อให้ง่ายต่อการปรับปริมาณลม เพื่อที่จะทำให้บุคคลที่อยู่ภายในห้องที่มีการดำเนินงานแล้วเสร็จ ได้เข้าไปใช้งานได้อย่างมีความสบาย เนื่องจากมีลมมากระทบกับผิวหนังไม่ความเร็วมากเกินไป
        </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

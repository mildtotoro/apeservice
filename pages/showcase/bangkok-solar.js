import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class BangkokSolar extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="bangkok-solar"
                    imgLength="5"
                    projectName="Bangkok Solar"
                    subtitle="ระบบปรับอากาศแบบ Air Cooled Chiller"
                    content="ใช้ Chiller 82 Tons 3 Sets ใช้ Fin ของ Chiller เป็นทองแดง เนื่องจากอยู่ในพื้นที่กรดสูง ของเดิมเคยใช้ Aluminium จะผุพังเร็วมาก Chiller ทั้ง 3 Units สลับกันใช้งานได้ สามารถใช้ครั้งละ 1 Unit, 2 Units , 3 Units พร้อมกัน Air Handling Unit แบบต่อท่อลม 12 Units Fancoil 3 Units ใช้ Pump น้ำเย็น 2 ชุด ชุดที่ 1 มี 6 Pumps ใช้งาน 5 Spare 1 (Zone Factory) ชุดที่ 2 มี 2 Pump ใช้ 1 spare 1 เนื่องจากเป็น Zone Office วันเสาร์ - อาทิตย์ หยุดไม่ต้องเปิด ได้ช่วยประหยัดบรรยากาศที่นี่ ความชื้นสูงมากต้องใช้ฉนวนท่อลมชนิดความหนาแน่นพิเศษ (24Kg/m2'' Thick)"
                />
            </Layout >
        );
    }
}

export default BangkokSolar;

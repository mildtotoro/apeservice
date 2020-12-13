import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class NsElectronic extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="ns-electronic"
                    imgLength="5"
                    projectName="บริษัท เอ็น เอส อิเล็กทรอนิกส์ จำกัด"
                    subtitle="ติดตั้งระบบปรับอากาศ และ แสงสว่าง สำหรับห้อง Clean Room"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>
                    <ol>
                        <li>ติดตั้งท่อส่งลมเย็นหุ้มฉนวน close cell หนา 2”บริเวณภาย นอกอาคารและ หุ้มฉนวนใยแก้วความหนาแน่น 24 กก./ลบ.ม. หนา 2”บริเวณภายในอาคาร</li>
                        <li>ติดตั้งระบบ HEPA FILTER จำนวน 32 ชุด</li>
                        <li>ติดตั้งไฟฟ้าแสงสว่าง จำนวน 32 ชุด</li>
                        <li>ติดตั้งพัดลมดูดอากาศขนาด2,600คิวบิคฟุตต่อนาที 1 ตัว</li>
                        <li>เดินท่อ พีวีซี ขนาด 14”สำหรับพัดลมดูดอากาศ และ แยกตาม จุดต่างตามตำแหน่งของเครื่องจักร ขนาดท่อแยก 4” มี VOLUME DAMPER สำหรับปรับปริมาณลม</li>
                    </ol>
                    <div className="my-1">

                        มูลค่างานทั้งหมด 1,653,418 บาท(ก่อนภาษีมูลค่าเพิ่ม)

                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default NsElectronic;

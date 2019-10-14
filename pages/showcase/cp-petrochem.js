import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class CPPetrochem extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="cp-petrochem"
                    imgLength="5"
                    projectName="บริษัทเจริญโภคภัณฑ์ ปิโตรเคมี (มหาชน) จำกัด"
                    subtitle="ติดตั้งระบบปรับอากาศ และ ระบบส่งน้ำเย็น"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>
                    <ol>
                        <li>ติดตั้งPacked Air Cooled Chiller ขนาดทำความเย็น 1,000,000 บีทียู/ชั่วโมง 1 ชุด<br />
                            Chilled Water Coil ขนาดทำความเย็น 714,719 บีทียู/ชั่วโมง 1 ชุด<br />
                            AHU. ขนาดทำความเย็น 120,000 บีทียู/ชั่วโมง 4 ชุด<br />
                            Water Pump 4 ชุด<br />
                            Storage Tank ขนาดความจุ 3 คิวบิคเมตร 1 ชุด
                        </li>
                        <li>ติดตั้งท่อส่งน้ำเย็น และ อุปกรณ์วาล์วต่างๆเข้าระบบทำน้ำเย็น
และ ส่งน้ำเย็นเข้าระบบปรับอากาศ</li>
                        <li>ติดตั้งระบบไฟฟ้าคอนโทรลทั้งหมด</li>
                    </ol>
                    <div className="my-1">
                        มูลค่างานทั้งหมด 2,400,000 บาท(ก่อนภาษีมูลค่าเพิ่ม)
                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default CPPetrochem;

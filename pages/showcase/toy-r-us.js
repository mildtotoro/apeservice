import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class toyRUs extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                projectFolderName="toy-r-us"
                imgLength="10"
                projectName="ร้านทอยส์ อาร์ อัส คาร์ฟูพระราม4"
                subtitle="ติดตั้งระบบปรับอากาศ และ ระบบท่อส่งลมเย็น"
                content="คำนวณหาขนาดเครื่องปรับอากาศ และ ออกแบบท่อส่งลมเย็น
                ติดตั้งท่อน้ำเย็น และ อุปกรณ์วาล์วต่างๆเข้าเครื่องปรับอากาศ ขนาดทำความเย็น 361,000 บีทียู/ชั่วโมง ปริมาณลม 15,000 คิวบิคฟุต/นาที ทั้งหมด 2 เครื่อง
                ติดตั้งท่อส่งลมเย็นหุ้มฉนวนclose cell ความหนา 3/4” พร้อมทั้งติดตั้งหัวจ่ายลม และ ช่องลมกลับ มูลค่างานทั้งหมด 1,331,178.48 บาท (ก่อนภาษีมูลค่าเพิ่ม)"
                ></ShowCase>
            </Layout >
        );
    }
}

export default toyRUs;

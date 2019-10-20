import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class ThaiNissei extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="thai-nissei"
                    imgLength="4"
                    projectName="บริษัท ไทยนิสเซ่คอนเวอร์ติ้ง จำกัด"
                    subtitle="งานติดตั้งระบบท่อลม (Duct Work)"
                    content=""
                >

ติดตั้งระบบท่อลมเครื่องพิมพ์และเครื่องดราย (Dry) ติดตั้งระบบท่อลมดูด (Exhaust Duct) ใช้สังกะสีแผ่นเรียบความหนา 1 มม. ดูดอากาศเสียจากเครื่องจักรตามจุดต่าง ๆ โดยผ่านพัดลมดูดอากาศข้างนอกอาคาร และติดตั้งระบบท่อลมร้อน (Hot Air Duct) ใช้สังกะสีแผ่นเรียบความหนา 1 มม. หุ้มด้วยฉนวกันความร้อนแบบใยหินความหนา 25 มม. ส่งลมร้อนจากเครื่อง Burnner ไปจ่ายให้กับเครื่องจักรที่อยู่ภายในอาคาร ส่วนท่อลมด้านนอกอาคารหุ้มด้วยฉนวนกันความร้อนแบบใยหินขนาด 25 มม. หุ้มด้วยแผ่นสแตนเลสเพื่อปิดกันความเสียหาย
                    ติดตั้งท่อลมเติมอากาศ (Fresh Air) ใช้สังกะสีแผ่นเรียบความหนา 1 มม. เพื่อดูดอากศออกจากด้านนอกอาคาร โดยผ่านกล่องฟิลเตอร์ ที่มาพร้อมกับเครื่องจักรเข้าไปจ่ายให้กับเครื่องจักรที่อยู่ภายในอาคาร
                                     
                </ShowCase>
            </Layout >
        );
    }
}

export default ThaiNissei;

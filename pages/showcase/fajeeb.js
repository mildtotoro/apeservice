import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class Fajeeb extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="fajeeb"
                    imgLength="5"
                    projectName="บริษัท ฝาจีบ จำกัด (มหาชน)"
                    subtitle="ติดตั้งระบบดูดกลิ่น และ กรองกลิ่น ของแผนกพิมพ์"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>
                    <ol>
                        <li>คำนวณ และ ออกแบบขนาดพัดลม และ ท่อส่งลม</li>
                        <li>ติดตั้งพัดลมแบบ Centrifugal ขนาด 5,700 คิวบิคฟุต/นาที</li>
                        <li>ติดตั้ง Activated Carbon Filter 1ชุดไว้สำหรับดูดกลิ่น</li>
                        <li>ติดตั้งท่อส่งลมด้านดูดต่อกับ Hood ตามตำแหน่งต่างๆ และ
                        ติดตั้งท่อส่งด้านลมออกต่อท่อขึ้นหลังคา ด้านปลายสุดต่อ
End Cap กันฝนเข้า ติดตั้งสายล่อฟ้าที่ปลายสุดด้วย</li>
                        <li>ติดตั้งพัดลม Centrifugal ขนาด 1,000 คิวบิคฟุต/นาที ใช้ดันอากาศบริเวณที่มีกลิ่นไปในทิศทางเดียวกัน บริษัทได้ทำการติดตั้งทั้งหมด 6 สายการผลิต</li>
                    </ol>
                    <div className="my-1">
                        มูลค่างานทั้งหมด 1,748,184 บาท(ก่อนภาษีมูลค่าเพิ่ม)
                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default Fajeeb;

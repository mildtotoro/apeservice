import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class KuSriracha extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="kasetsart-university-sriracha"
                    imgLength="5"
                    projectName="Kasetsart University Sriracha"
                    subtitle="ระบบปรับอากาศ และ ระบายอากาศ"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>
                    <ol>
                        <li>ติดตั้งเครื่องปรับอากาศ จำนวน 131 ชุด ปริมาณทำความเย็น
รวมทั้งหมด 4,521,000 บีทียูต่อชั่วโมง</li>
                        <li>ติดตั้งพัดลมระบายอากาศ จำนวน 69 ชุด ปริมาณลมที่ระบาย
ออก คือ 13,907 คิวบิคฟุตต่อนาที</li>
                        <li>ติดตั้งท่อส่งลมเย็น ท่อส่งลมระบายอากาศ และ ท่อส่งลมบริสุทธิ์</li>
                    </ol>
                    <div className="my-1">
                        มูลค่างานทั้งหมด 8,435,000 บาท(รวมภาษีมูลค่าเพิ่ม)
    
                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default KuSriracha;

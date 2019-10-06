import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class Engai extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="engai"
                    imgLength="2"
                    projectName="บริษัท เอ็นไก ไทย จำกัด"
                    subtitle="ติดตั้งระบบแอร์คอมเพรสเซอร์ และ ระบบแอร์ดรายเออร์"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>

                    <ol>
                        <li>
                            ติดตั้งแอร์ดรายเออร์ 1 ชุด และ ย้ายเครื่องเก่าจำนวน 5 ชุด</li>
                        <li>
                            ติดตั้งท่อเฮดเดอร์ขนาด 12” และ เดินท่อเข้าระบบของเดิม</li>
                        <li>
                            ติดตั้งโครงสร้างหลังคา และ มุงหลังคาด้วยกระเบื้อง</li>
                        <li>
                            ติดตั้งท่อส่งลมระบายความร้อนของแอร์คอมเพรสเซอร์ทิ้งบนหลังคา</li>
                    </ol>
                    <div className="my-1">
                        มูลค่างานทั้งหมด 322,543.28 บาท(ก่อนภาษีมูลค่าเพิ่ม)
                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default Engai;

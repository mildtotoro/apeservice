import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class AmornHouse extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="amorn-house"
                    imgLength="5"
                    projectName="บ้านพักอาศัย คุณอมร เตชะหรูวิจิตร"
                    subtitle="ระบบปรับอากาศแบบ Split Type"
                    content="แนวคิดในการคำนวณและออกแบบเน้นความสวยงาม ความเป็นระเบียบเรียบร้อย และสุขภาพของผู้ใช้บริการ ทางบริษัทฯ จึงเลือกใช้เครื่องปรับอากาศแบบ conceal และมีการเติมอากาศเข้าในระบบเพิ่ม filter กรองอากาศอย่างดี จัดว่างตำแหน่ง condensing ยูนิตเป็นระเบียบเรียบร้อย ไม่เกะกะ ใช้หัวส่งลมเย็นและลมกลับแบบอลูมิเนียมเคลือบสีขาวสวยงาม ซึ่งทำให้เหมาะสมกับรูปทรงสวยงามหรูหราและทันสมัยของแบบบ้าน"
                />
            </Layout >
        );
    }
}

export default AmornHouse;

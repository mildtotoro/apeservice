import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class PackPro extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="packpro"
                    imgLength="5"
                    projectName="บริษัท แพ็กโปร จำกัด"
                    subtitle="ระบบปรับอากาศแบบ Split Duct Type"
                    content="ทางบริษัทฯของเรามีการคัด เลือกสีในการพิมพ์สลาก ซึ่งมีส่วนผสมของ Solvent (สารระเหย) เป็นอันตรายต่อสุขภาพ ในกระบวนการผลิตนั้นทางบริษัทฯแพ็กโปรต้องการความสะอาดในการกระบวนการผลิต เพราะสินค้าที่ผลิตเป็นซองบรรจุอาหารสำหรับบริโภค และทางบริษัทฯของเราได้มีการออกแบบการแลกเปลี่ยนอากาศให้กลิ่นของ Solvent ไม่เป็นอันตรายต่อพนักงานที่ควบคุมดูแลเครื่องจักรและอากาศที่มาแลกเปลี่ยน และมีการกรองอากาศเพื่อความสะอาด"
                />
            </Layout >
        );
    }
}

export default PackPro;

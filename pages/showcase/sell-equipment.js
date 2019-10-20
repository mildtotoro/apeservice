import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class SellEquipment extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="sell-equipment"
                    imgLength="8"
                    projectName="งานขายอุปกรณ์ อะไหล่แอร์"
                    subtitle=""
                    content="
                    นอกจากงานระบบปรับอากาศ ระบบระบายอากศ
เครื่องปรับอากาศสำหรับที่พักอาศัย และเครื่องปรับอากาศในเชิงพาณิชย์แล้วนั้น
ทางบริษัทฯ ของเรายังมีบริการงานซ่อมแอร์สำหรับที่พักอาศัย ออฟฟิศสำนักงาน
และโรงงานอุตสาหกรรมรวมไปถึงอะไหล่แอร์ น้ำยาแอร์ ทุกชนิด"
                >
                  
                </ShowCase>
            </Layout >
        );
    }
}

export default SellEquipment;

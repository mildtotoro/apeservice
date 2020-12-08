import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class TFM extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="tfm"
                    imgLength="4"
                    projectName="บริษัท อุตสาหกรรมแป้งข้าวสาลีไทย จำกัด"
                    subtitle="งานติดตั้งระบบ ท่อส่งน้ำดับเพลิง และหัวจ่ายน้ำ Roof Manifold"
                    content=""
                >

                    <p>
                        เนื่องจากข้อกำหนดด้านความปลอดภัยในสถานประกอบการระบบดับเพลิง ในด้านความปลอดภัย และทรัพย์สิน จึงจำเป็นอย่างยิ่งต้องมีระบบป้องกันภัยอันเกิดจากอัคคีภัย
                        ติดตั้งท่อส่งน้ำดับเพลิงไลน์เมนต์ขนาด 6” และ 4” จากปั๊มดับเพลิงไปยังตำแหน่ง หัวจ่ายน้ำดับเพลิง Roof Manifold 4”x2-1/2”x2-1/2” จำนวน 7 จุด ทำการทดสอบและใช้งานได้เรียบร้อยตามวัตถุประสงค์ของโครงการ

                </p>


                </ShowCase>
            </Layout >
        );
    }
}

export default TFM;

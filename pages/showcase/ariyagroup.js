import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class AriyaGroup extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="ariyagroup"
                    imgLength="6"
                    projectName="บริษัท อริยะอีควิปเม้นท์ จำกัด"
                    subtitle="งานติดตั้ง Water Cooled Chiller"
                    content=""
                >

                    <p>
                        เป็นการติดตั้ง Water Cooled Chiller แบบเปิดทดแทนของเดิมที่มีอยู่ซึ่งมีอายุการใช้งานมานานแล้ว ประกอบกับทางผู้ใช้งานต้องการขยายพื้นที่ใช้งาน อีกทั้งยังต้องการลดอัตราการสิ้นเปลืองพลังงาน และการซ่อมบำรุงรักษาเครื่องปรับอากาศระบบชิลเลอร์ (Chiller) เดินท่อส่งน้ำเย็นไปยังตำแหน่งที่ต้องการได้หลายจุด ซึ่งเหมาะกับการติดตั้งในโรงงานอุตสาหกรรม ไลน์การผลิต อาคารสำนักงาน  โดยอาคารอริยะนั้นทางเราเลือกใช้ Chiller ขนาด 200 Tons ระบายความร้อนด้วยน้ำจาก Cooling Tower และต่อท่อทำน้ำเย็นให้กับ AHU Fancoil ภายในอาคารชั้น 9 จากการติดตามข้อมูลหลังจากการใช้งานไปแล้ว พบว่าประหยัดพลังงาน

                    </p>


                </ShowCase>
            </Layout >
        );
    }
}

export default AriyaGroup;

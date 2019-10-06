import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class Cyberpax extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="cyberpax"
                    imgLength="5"
                    projectName="CYBERPAX"
                    subtitle="ระบบปรับอากาศแบบ Water Cooler Chiller"
                    content="เป็นการเลือกใช้ Chiller ขนาด 98 Tons 4 Sets ระบายความร้อนด้วยน้ำจาก Cooling Tower เลือกคอมเพรสเซอร์ แบบ Serew Air Handing Unit 4 Set Phase ละ 2 Sets และยังได้ต่อท่อน้ำเย็นจ่ายให้กับ Fancoil Unit เล็ก ๆ อีกหลาย Unit สำหรับห้องควบคุมเล็ก ๆ ใช้เป็นเบอร์ 2 ระบบ สามารถใช้ Split Type ก็ได้ในเวลาที่ไม่ได้เปิด Chiller ซึ่ง Air split Type เลือกใช้เบอร์ 5 ทั้งหมด จากการสอบถามข้อมูลหลักจากได้ใช้งานจริงแล้ว พบว่าประหยัดพลังได้ดีมาก"
                />
            </Layout >
        );
    }
}

export default Cyberpax;

import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class EFD extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="efd-introduction"
                    imgLength="4"
                    projectName="EFD INDUCTION Co.,Ltd."
                    subtitle="งานติดตั้งระบบปรับอากาศ VRF TOSHIBA"
                    content=""
                >
                    <h5>รายละเอียดของงาน</h5>
                    <p>
                        ติดตั้งระบบปรับอากาศสำนักงาน ด้วยระบบ VRF (Variable Refrigerant Flow) เป็นระบบปรับอากาศที่สามารถเปลี่ยนแปลงปริมาณสารทำความเย็นตามภาระโหลดของการทำความเย็นและจำนวนตัวเครื่องที่ทำการติดตั้งได้
                    </p>
                    <p>
                        เครื่องภายนอกอาคาร Condensing Unit  มีขนาด 50 Tons จำนวน 1 เครื่อง จ่ายให้กับเครื่องภายในอาคาร Fan Coil Unit จำนวน 14 เครื่อง ประกอบไปด้วย
                    </p>
                    <p>
                        เครื่องปรับอากาศแบบกระจายลมสี่ทิศทาง Cassette type จำนวน 4 เครื่อง และแบบแขวนใต้ฝ้า Ceiling type จำนวน 10 เครื่อง และติดตั้งปั๊มน้ำทิ้งสำหรับเครื่องปรับอากาศแบบแขวนใต้ฝ้า เพื่อส่งน้ำทิ้งเครื่องปรับอากาศขึ้นไปยังท่อเมนต์หลักที่ติดตั้งไว้บนฝ้าและส่งออกนอกอาคาร
                    </p>
                    <ol>
                        <li>ติดตั้งระบบไฟฟ้าสำหรับเครื่องปรับอากาศ
                        </li>
                        <li>ติดตั้งสายเมนต์ไฟฟ้าไปยัง Condensing Unit</li>
                        <li>ติดตั้งสายไฟเมนต์ไฟฟ้าไปยัง Fan Coil Unit</li>
                        <li>
                            ติดตั้งสายสัญญาณจาก Fancoil Unit ไปยัง Condensing Unit

                        </li>
                    </ol>
                    <div className="my-1">
                    </div>
                </ShowCase>
            </Layout >
        );
    }
}

export default EFD;

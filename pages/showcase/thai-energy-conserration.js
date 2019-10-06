import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class ThaiEnergyConserration extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="thai-energy-conserration"
                    imgLength="3"
                    projectName="Thai Energy Conserration"
                    subtitle="ระบบปรับอากาศแบบ Water Cooler Chiller"
                    content="ใช้ Chiller 78 Tons Air Handing Unit 6 Units Fancoil 3 Units Fancoil 3 Units Pump Cooled 2 Units ใช้ 1 Spare 1 Pump Cooling 2 Units ใช้ 1 Spare 1 Chiller Compressor แบบ Screw เสียงเงียบดี ประหยัดด้วย AHU แบบต่อ Pemium Supply มีเสียงลมบ้างแต่ประหยัดค่าติดตั้ง"
                />
            </Layout >
        );
    }
}

export default ThaiEnergyConserration;
